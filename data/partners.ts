export type Partner = {
  id: string
  name: string
  shortName: string
  logo: string
  width: number
  height: number
  description: string
  location: string
  type: string
  focusTag: string
  isPreview?: boolean
}

export const PARTNERS: Partner[] = [
  {
    id: 'shiridevi-education',
    name: 'Shridevi Institute of Engineering and Technology',
    shortName: 'Shridevi (SIET)',
    logo: '/shiridevi-education-monochrome.png',
    width: 1280,
    height: 1280,
    location: 'Tumakuru, Karnataka',
    type: 'Engineering & Technology',
    focusTag: 'Placement Coordination & Readiness',
    description:
      'chose GradX to bring employer connections and placement coordination together, creating a clearer path from campus to career.',
  },
  {
    id: 'sri-krishna-institute-of-technology',
    name: 'Sri Krishna Institute of Technology',
    shortName: 'SKIT Bengaluru',
    logo: '/sri-krishna-institute-of-technology-monochrome.png',
    width: 800,
    height: 800,
    location: 'Bengaluru, Karnataka',
    type: 'Engineering & Technical Sciences',
    focusTag: 'Preparation & Recruiter Engagement',
    description:
      'is partnering with GradX to connect student preparation, employer engagement, and placement execution, creating stronger pathways from campus to career.',
  },
  {
    id: 'srs-group-of-institutions',
    name: 'SRS Group of Institutions',
    shortName: 'SRS Group',
    logo: '/srs-group-of-institutions-monochrome.png',
    width: 800,
    height: 800,
    location: 'Chitradurga, Karnataka',
    type: 'Multi-Department Campus',
    focusTag: 'Cross-Department Placements',
    description:
      'has chosen GradX to strengthen training and placements across its departments, connecting student preparation with stronger employer access and career outcomes.',
  },
  {
    id: 'rns-institute-of-technology',
    name: 'RNS Institute of Technology',
    shortName: 'RNSIT',
    logo: '/rns-institute-of-technology-monochrome.png',
    width: 800,
    height: 800,
    location: 'Bengaluru, Karnataka',
    type: 'Autonomous Engineering Institute',
    focusTag: 'Engineering Talent & Recruiter Connect',
    description:
      'has chosen GradX for placement support, connecting its engineering students with stronger employer access and career opportunities.',
  },
  {
    id: 'sapthagiri-college-of-engineering',
    name: 'Sapthagiri College of Engineering',
    shortName: 'Sapthagiri (SCE)',
    logo: '/sapthagiri-college-of-engineering-monochrome.png',
    width: 800,
    height: 800,
    location: 'Bengaluru, Karnataka',
    type: 'Engineering & Applied Sciences',
    focusTag: 'Student Readiness & Career Pathways',
    description:
      'has chosen GradX for placement support, connecting its engineering students with stronger employer access and career opportunities.',
  },
  {
    id: 'sri-siddhartha-institute-of-technology',
    name: 'Sri Siddhartha Institute of Technology',
    shortName: 'SSIT Tumakuru',
    logo: '/sri-siddhartha-institute-of-technology-monochrome.png',
    width: 800,
    height: 800,
    location: 'Tumakuru, Karnataka',
    type: 'Technical & Research Institute',
    focusTag: 'Placement Operations & Outreach',
    description:
      'has chosen GradX for placement support, connecting its engineering students with stronger employer access and career opportunities.',
  },
  {
    id: 's-vyasa',
    name: 'S-VYASA',
    shortName: 'S-VYASA University',
    logo: '/s-vyasa-monochrome.png',
    width: 800,
    height: 800,
    location: 'Bengaluru, Karnataka',
    type: 'Deemed-to-be University',
    focusTag: 'University-Wide Opportunities',
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
