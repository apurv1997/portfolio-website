function AboutIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
    </svg>
  )
}

export default function About() {
  return (
    <section id="about">
      <h2><AboutIcon /><b>About_</b></h2>
      <p>
        I'm a Cloud & Platform Engineer at Dhan, an Indian stockbroking firm.
        My job is to keep the AWS infrastructure behind our trading system running
        smoothly — networking, deployments, access control, and keeping the bill under
        control.
      </p>
      <p>
        I got here through backend development. For about two and a half years,
        I built and scaled Node.js services — first for a real-time multiplayer game
        backend, then for an ed-tech product that handled real payments and subscriptions
        at scale. At some point in that second job, I realized I was spending more time on
        infrastructure than on application code. Moving into a platform role at Dhan wasn't
        really a career change — it was just making official what I was already doing.
      </p>
      <p>
        I still think like a backend engineer, and that helps: it's easier to design good
        IAM policies and pipelines when you have spent years being the one affected by bad ones.
        I care about infrastructure to be reliable and cost-aware more than clever or impressive.
        If something is boring in production, I have usually done my job right.
      </p>
    </section>
  )
}
