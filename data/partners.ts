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
  {
    id: 'sri-krishna-institute-of-technology',
    name: 'Sri Krishna Institute of Technology',
    logo: '/sri-krishna-institute-of-technology-monochrome.png',
    width: 800,
    height: 800,
    description:
      'is partnering with GradX to connect student preparation, employer engagement, and placement execution, creating stronger pathways from campus to career.',
  },
  {
    id: 'srs-group-of-institutions',
    name: 'SRS Group of Institutions',
    logo: '/srs-group-of-institutions-monochrome.png',
    width: 800,
    height: 800,
    description:
      'has chosen GradX to strengthen training and placements across its departments, connecting student preparation with stronger employer access and career outcomes.',
  },
  {
    id: 'rns-institute-of-technology',
    name: 'RNS Institute of Technology',
    logo: '/rns-institute-of-technology-monochrome.png',
    width: 800,
    height: 800,
    description:
      'has chosen GradX for placement support, connecting its engineering students with stronger employer access and career opportunities.',
  },
  {
    id: 'sapthagiri-college-of-engineering',
    name: 'Sapthagiri College of Engineering',
    logo: '/sapthagiri-college-of-engineering-monochrome.png',
    width: 800,
    height: 800,
    description:
      'has chosen GradX for placement support, connecting its engineering students with stronger employer access and career opportunities.',
  },
  {
    id: 'sri-siddhartha-institute-of-technology',
    name: 'Sri Siddhartha Institute of Technology',
    logo: '/sri-siddhartha-institute-of-technology-monochrome.png',
    width: 800,
    height: 800,
    description:
      'has chosen GradX for placement support, connecting its engineering students with stronger employer access and career opportunities.',
  },
  {
    id: 's-vyasa',
    name: 'S-VYASA',
    logo: '/s-vyasa-monochrome.png',
    width: 800,
    height: 800,
    description:
      'has chosen GradX for placement support, helping students connect with employers and pursue stronger career opportunities.',
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
