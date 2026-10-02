import { neon } from '@neondatabase/serverless'

let databaseUrl: string | undefined
let sqlClient: ReturnType<typeof neon> | undefined

export function getSql() {
  const url = process.env.DATABASE_URL

  if (!url) {
    throw new Error('DATABASE_URL is not configured.')
  }

  if (url !== databaseUrl || !sqlClient) {
    databaseUrl = url
    sqlClient = neon(url)
  }

  return sqlClient
}
