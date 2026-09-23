'use client'

import { useState } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  Phone,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldDescription,
} from '@/components/ui/field'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b border-[#e5e2e9] bg-[#fafafa]"
    >
      {/* Soft background glow */}
      <div
        className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full blur-[120px]"
        style={{
          background: 'rgba(98, 70, 217, 0.08)',
        }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full blur-[120px]"
        style={{
          background: 'rgba(169, 154, 240, 0.10)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12 lg:py-32">

        {/* ================================================================ */}
        {/* INTRO                                                             */}
        {/* ================================================================ */}

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">

          {/* Left */}
          <div className="lg:sticky lg:top-24">

            <h2 className="max-w-4xl text-balance text-[3rem] font-medium leading-[0.98] tracking-[-0.055em] text-[#17151c] sm:text-[4.25rem] lg:text-[5rem]">
              Let&rsquo;s build a stronger{' '}
              <span className="bg-gradient-to-r from-[#6246d9] via-[#8066e6] to-[#a99af0] bg-clip-text text-transparent">
                placement engine.
              </span>
            </h2>

            <p className="mt-7 max-w-md text-base leading-7 text-[#6d6873] sm:text-lg">
              Tell us about your institution or hiring needs. We&rsquo;ll
              help you understand how GradX can fit into your placement
              ecosystem.
            </p>

            {/* Contact details */}
            <div className="mt-10 border-t border-[#e5e2e9] pt-7">

              <a
                href="mailto:partnerships@gradx.app"
                className="group flex items-center gap-4 py-2"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#ddd9e2] bg-white">
                  <Mail
                    className="size-4 text-[#6246d9]"
                    strokeWidth={1.8}
                  />
                </span>

                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#918b98]">
                    Email
                  </span>

                  <span className="mt-1 block text-sm font-medium text-[#34313a]">
                    partnerships@gradx.app
                  </span>
                </span>
              </a>

              <a
                href="tel:+911800000000"
                className="group mt-3 flex items-center gap-4 py-2"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#ddd9e2] bg-white">
                  <Phone
                    className="size-4 text-[#6246d9]"
                    strokeWidth={1.8}
                  />
                </span>

                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#918b98]">
                    Phone
                  </span>

                  <span className="mt-1 block text-sm font-medium text-[#34313a]">
                    +91 91486 30441
                  </span>
                </span>
              </a>

            </div>
          </div>

          {/* ============================================================ */}
          {/* FORM                                                          */}
          {/* ============================================================ */}

          <div className="rounded-[1.5rem] border border-[#e2dfe7] bg-white p-6 sm:p-8 lg:p-10">

            {submitted ? (
              <div className="flex min-h-[480px] flex-col items-center justify-center px-4 text-center">

                <div className="flex size-14 items-center justify-center rounded-full bg-[#eeeaff]">
                  <CheckCircle2
                    className="size-7 text-[#6246d9]"
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="mt-6 text-2xl font-medium tracking-[-0.03em] text-[#17151c]">
                  Thanks — we&rsquo;re on it.
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-[#706b76]">
                  Your request has been received. A member of the GradX team
                  will reach out within one working day.
                </p>

                <Button
                  variant="outline"
                  className="mt-7 rounded-full border-[#d8d4de]"
                  onClick={() => setSubmitted(false)}
                >
                  Submit another request
                </Button>

              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
              >
                <FieldGroup>

                  {/* Name + Organization */}
                  <div className="grid gap-5 sm:grid-cols-2">

                    <Field>
                      <FieldLabel
                        htmlFor="name"
                        className="text-[#34313a]"
                      >
                        Full name
                      </FieldLabel>

                      <Input
                        id="name"
                        name="name"
                        placeholder="Priya Sharma"
                        required
                        className="h-11 border-[#ddd9e2] bg-[#fafafa] text-[#17151c] placeholder:text-[#aaa5b0] focus-visible:border-[#8066e6] focus-visible:ring-[#8066e6]/20"
                      />
                    </Field>

                    <Field>
                      <FieldLabel
                        htmlFor="org"
                        className="text-[#34313a]"
                      >
                        Organization
                      </FieldLabel>

                      <Input
                        id="org"
                        name="org"
                        placeholder="Institution or company"
                        required
                        className="h-11 border-[#ddd9e2] bg-[#fafafa] text-[#17151c] placeholder:text-[#aaa5b0] focus-visible:border-[#8066e6] focus-visible:ring-[#8066e6]/20"
                      />
                    </Field>

                  </div>

                  {/* Email + Type */}
                  <div className="grid gap-5 sm:grid-cols-2">

                    <Field>
                      <FieldLabel
                        htmlFor="email"
                        className="text-[#34313a]"
                      >
                        Work email
                      </FieldLabel>

                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@organization.edu"
                        required
                        className="h-11 border-[#ddd9e2] bg-[#fafafa] text-[#17151c] placeholder:text-[#aaa5b0] focus-visible:border-[#8066e6] focus-visible:ring-[#8066e6]/20"
                      />
                    </Field>

                    <Field>
                      <FieldLabel className="text-[#34313a]">
                        I am reaching out as
                      </FieldLabel>

                      <Select defaultValue="college">
                        <SelectTrigger className="h-11 w-full border-[#ddd9e2] bg-[#fafafa] text-[#34313a]">
                          <SelectValue />
                        </SelectTrigger>

                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="college">
                              A college / placement cell
                            </SelectItem>

                            <SelectItem value="employer">
                              An employer / recruiter
                            </SelectItem>

                            <SelectItem value="other">
                              Something else
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </Field>

                  </div>

                  {/* Message */}
                  <Field>
                    <FieldLabel
                      htmlFor="message"
                      className="text-[#34313a]"
                    >
                      How can we help?
                    </FieldLabel>

                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Share a little about your placement goals or hiring needs."
                      className="resize-none border-[#ddd9e2] bg-[#fafafa] text-[#17151c] placeholder:text-[#aaa5b0] focus-visible:border-[#8066e6] focus-visible:ring-[#8066e6]/20"
                    />

                    <FieldDescription className="text-[#918b98]">
                      We&rsquo;ll never share your details.
                    </FieldDescription>
                  </Field>

                  {/* Submit */}
                  <Button
                    type="submit"
                    size="lg"
                    className="h-11 rounded-full bg-[#17151c] px-6 text-sm font-medium text-white hover:bg-[#25222c] sm:w-fit"
                  >
                    Send request
                    <ArrowRight
                      className="ml-1 size-4"
                      strokeWidth={1.8}
                    />
                  </Button>

                </FieldGroup>
              </form>
            )}

          </div>
        </div>

        {/* ================================================================ */}
        {/* BOTTOM STATEMENT                                                 */}
        {/* ================================================================ */}

        <div className="mt-20 border-t border-[#e5e2e9] pt-10 lg:mt-24">
          <p className="max-w-4xl text-2xl font-medium leading-[1.25] tracking-[-0.035em] text-[#17151c] sm:text-3xl">
            Ready to make placement work
            <span className="text-[#8066e6]">
              {' '}as one connected system?
            </span>
          </p>
        </div>

      </div>
    </section>
  )
}
