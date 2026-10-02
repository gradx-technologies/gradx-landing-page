import { NextResponse } from 'next/server'

import { getSql } from '@/lib/neon'

export const runtime = 'nodejs'

const audiences = ['College', 'Employer', 'Other'] as const

type Audience = (typeof audiences)[number]

type ContactPayload = {
  name?: unknown
  organization?: unknown
  email?: unknown
  audience?: unknown
  message?: unknown
  website?: unknown
}

let schemaReady: Promise<void> | undefined

function text(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

function error(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status })
}

async function ensureSchema() {
  if (!schemaReady) {
    schemaReady = (async () => {
      const sql = getSql()

      await sql`
        CREATE TABLE IF NOT EXISTS contact_leads (
          id BIGSERIAL PRIMARY KEY,
          name VARCHAR(100) NOT NULL,
          organization VARCHAR(160) NOT NULL,
          email VARCHAR(254) NOT NULL,
          audience VARCHAR(20) NOT NULL CHECK (audience IN ('College', 'Employer', 'Other')),
          message TEXT NOT NULL DEFAULT '',
          submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
      `

      await sql`
        CREATE INDEX IF NOT EXISTS contact_leads_submitted_at_idx
        ON contact_leads (submitted_at DESC)
      `
    })().catch((cause) => {
      schemaReady = undefined
      throw cause
    })
  }

  return schemaReady
}

export async function POST(request: Request) {
  const origin = request.headers.get('origin')
  if (origin && origin !== new URL(request.url).origin) {
    return error('Invalid request origin.', 403)
  }

  let payload: ContactPayload
  try {
    payload = await request.json()
  } catch {
    return error('Please try submitting the form again.')
  }

  // Hidden from people, visible to simple bots. Treat bot requests as accepted.
  if (text(payload.website)) {
    return NextResponse.json({ ok: true }, { status: 201 })
  }

  const name = text(payload.name)
  const organization = text(payload.organization)
  const email = text(payload.email).toLowerCase()
  const audience = text(payload.audience)
  const message = text(payload.message)

  if (!name || name.length > 100) {
    return error('Enter a name of up to 100 characters.')
  }

  if (!organization || organization.length > 160) {
    return error('Enter an organization of up to 160 characters.')
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return error('Enter a valid work email address.')
  }

  if (!audiences.includes(audience as Audience)) {
    return error('Choose how you are reaching out.')
  }

  if (message.length > 2_000) {
    return error('Keep your message to 2,000 characters or fewer.')
  }

  try {
    await ensureSchema()
    const sql = getSql()

    await sql`
      INSERT INTO contact_leads (name, organization, email, audience, message)
      VALUES (${name}, ${organization}, ${email}, ${audience}, ${message})
    `
  } catch (cause) {
    console.error('Unable to save contact lead.', cause)

    if (!process.env.DATABASE_URL) {
      return error('The contact form is being set up. Please try again shortly.', 503)
    }

    return error('We could not send your request. Please try again.', 500)
  }

  return NextResponse.json({ ok: true }, { status: 201 })
}
