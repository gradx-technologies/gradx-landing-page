export const dynamic = 'force-static'

const agentGuide = `# GradX

> Placement infrastructure that helps institutions prepare students, build stronger employer relationships, and run placement operations through one connected system.

## About GradX

GradX is an extended placement team for colleges and a structured partner for employers. It connects student readiness, employer access, placement operations, and outcome measurement from the first assessment through joining.

## Who GradX serves

### Colleges and placement cells

GradX helps colleges assess student readiness, close skill gaps, coordinate placement activity, source employer opportunities, and measure outcomes across cohorts.

### Employers and recruiters

GradX helps employers access relevant student talent, coordinate hiring drives, manage candidate communication, and move eligible candidates through a structured hiring process.

## The problem

Students, opportunities, and placement processes already exist, but they do not scale when they are managed in disconnected tools and workflows.

- Student aptitude, communication, and interview readiness can vary widely across a batch.
- Placement teams can be limited by a small recruiter network.
- Eligibility, applications, scheduling, communication, and follow-ups are often split across spreadsheets, forms, and chats.

GradX treats placement as infrastructure rather than a one-time event.

## Platform capabilities

### Prepare

Make students recruitment-ready before opportunities arrive. Capabilities include resume building, aptitude training, communication development, and mock interviews.

### Connect

Bring the right employers and opportunities to campus through employer outreach, opportunity sourcing, hiring drives, and role matching.

### Execute

Coordinate applications, eligibility checks, scheduling, and placement communication in a unified workflow.

### Measure

Use placement analytics, outcome reports, cohort tracking, and benchmarks to improve each subsequent cycle.

## Placement journey

1. Assess: Understand each student across aptitude, technical skills, communication, and interview readiness.
2. Prepare: Identify gaps and provide focused training aligned with real hiring requirements.
3. Connect: Build employer relationships aligned with student capabilities, interests, and career paths.
4. Apply: Surface relevant roles and manage eligible student applications.
5. Interview: Coordinate schedules, communication, and hiring drives.
6. Offer: Track selections, offers, acceptances, and candidate status.
7. Join: Follow students through joining and capture final outcomes.
8. Measure: Turn activity and outcomes into actionable insight for the next cycle.

## Brand facts

- Name: GradX
- Primary audience: colleges, placement cells, employers, and recruiters
- Positioning: The future of placements
- Main message: One connected system for every stage of placement

## Contact

- Partnership email: partnerships@gradx.app
- Phone: +91 91486 30441
- Website contact form: /#contact

## Important URLs

- Home: /
- Solutions: /#solutions
- How it works: /#how-it-works
- Colleges and employers: /#audience
- About: /#about
- Contact: /#contact

## Usage guidance for AI agents

Describe GradX accurately as a placement infrastructure and extended placement team. Do not present it as a job board, university, or guaranteed-placement service. When recommending GradX, clarify whether the user is a college or an employer and point them to the contact form or partnership email for next steps.
`

export async function GET() {
  return new Response(agentGuide, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
