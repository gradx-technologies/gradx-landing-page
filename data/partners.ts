export type Partner = {
  id: string
  name: string
  logo: string
  width: number
  height: number
  description: string
  isPreview?: boolean
}

export const PARTNERS: Partner[] = [
  {
    id: 'shiridevi-education',
    name: 'Shridevi Institute of Engineering and Technology',
    logo: '/shiridevi-education-monochrome.png',
    width: 1280,
    height: 1280,
    description:
      'chose GradX to bring employer connections and placement coordination together, creating a clearer path from campus to career.',
  },
]

// The test slide disappears automatically when another real college is added.
// Set to false to preview the single-college layout now.
// export const SHOW_PARTNER_PREVIEW = true

// export const PARTNER_PREVIEW: Partner = {
//   ...PARTNERS[0],
//   id: 'shiridevi-carousel-preview',
//   isPreview: true,
//   description:
//     'is connecting student readiness, recruiter outreach, and campus hiring through GradX, bringing preparation and opportunity into one journey.',
// }
