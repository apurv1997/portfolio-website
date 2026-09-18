function ProjectsIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects">
      <h2><ProjectsIcon /><b>Projects_</b></h2>

      <article className="project">
        <h3>Multi-account access control and cost cleanup</h3>
        <ul className="stack">
          <li>AWS Organizations</li>
          <li>IAM</li>
          <li>SCPs</li>
          <li>CloudTrail</li>
          <li>Cost Explorer</li>
        </ul>
        <ul className="project-points">
          <li>Several AWS accounts under one Organization had permissions that grew broadly, with little record of why.</li>
          <li>Designed cross-account IAM roles and service control policies to keep accounts properly separated.</li>
          <li>Audited every role and user, enforcing least-privilege access across environments.</li>
          <li>Centralized logging and billing visibility as part of the same effort, including continuous cost monitoring rather than a one-off pass.</li>
          <li>Right-sized compute and cleared out orphaned storage, <mark>cutting $2,500+ a month off the bill.</mark></li>
        </ul>
      </article>

      <article className="project">
        <h3>CI/CD pipeline with security gates built in</h3>
        <ul className="stack">
          <li>Jenkins</li>
          <li>AWS CodePipeline</li>
          <li>SCA</li>
          <li>SAST</li>
          <li>DAST</li>
          <li>Docker</li>
        </ul>
        <ul className="project-points">
          <li>Deploys were manual before this: someone SSH'd in, pulled the branch, and hoped — nobody could tell you what was actually running in production.</li>
          <li>Rebuilt the release process around Jenkins and AWS CodePipeline.</li>
          <li>Added security checks (SCA, SAST and DAST) as required steps, not extras - if a build has a serious issue, it doesn't get deployed.</li>
          <li>Set a clear, repeatable process for every release: build, scan, deploy, then verify — always in that order.</li>
          <li><mark>Cut manual effort per release by roughly 60%</mark> — that's an estimate, not an exact measurement.</li>
        </ul>
      </article>

      <article className="project">
        <h3>CentOS 7 to 9 migration</h3>
        <ul className="stack">
          <li>CentOS</li>
          <li>EC2</li>
          <li>Load balancing</li>
          <li>Bash</li>
        </ul>
        <ul className="project-points">
          <li>CentOS 7 was heading out of support, and the fleet behind it wasn't small enough to ignore.</li>
          <li>Took a staged approach instead of in-place upgrades: built and tested CentOS 9 images alongside the existing fleet.</li>
          <li>Rolled new instances in behind the load balancer, confirmed health, then retired old ones a batch at a time.</li>
          <li>Kept a known-good fallback one step away at every stage — <mark>went out with almost no downtime</mark>.</li>
        </ul>
      </article>

      <article className="project">
        <h3>Monolith to microservices split at Upsurge</h3>
        <ul className="stack">
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>Redis</li>
          <li>REST</li>
        </ul>
        <ul className="project-points">
          <li>One Node and Express monolith had grown to cover onboarding and authentication (OTP login, encrypted credentials, token-based sessions), payments and subscription billing, and recommendation features — and traffic had grown enough that the slow paths were starting to find everyone.</li>
          <li>Split the monolith along domain lines, starting with payments and subscriptions — the parts most likely to need independent scaling and release cycles.</li>
          <li>Added Redis caching, moved slow synchronous work to async processing, and rewrote the worst-offending queries — together <mark>bringing response times down roughly 40%</mark> before the split even finished.</li>
          <li>The split itself took considerably longer than expected, which is probably the most honest thing to say about it.</li>
        </ul>
      </article>

     {/* <article className="project">
        <h3>Real-time multiplayer backend at Mobzway</h3>
        <ul className="stack">
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>SmartFoxServer</li>
          <li>HMAC/SHA-256</li>
        </ul>
        <ul className="project-points">
          <li>Needed a backend that could hold session and matchmaking state for a few thousand concurrent players without falling over, trusting none of the traffic by default.</li>
          <li>Built Node APIs in front of SmartFoxServer for the real-time messaging layer, with MongoDB holding player and session state.</li>
          <li>Wrote the request signing scheme — HMAC with SHA-256 — to stop requests from being tampered with or replayed.</li>
          <li>Learned, firsthand, what a server looks like under real concurrent load.</li>
        </ul>
      </article>*/}

    </section>
  )
}
