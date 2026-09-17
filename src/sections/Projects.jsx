export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <article className="project">
        <h3>Multi-account access control and cost cleanup</h3>
        <p className="stack">AWS Organizations · IAM · SCPs · CloudTrail · Cost Explorer</p>
        <p>
          We run several AWS accounts under one Organization, and permissions had grown
          the way permissions always do: broadly, and without much record of why.
        </p>
        <p>
          I designed cross-account IAM roles and service control policies to keep the
          accounts properly separated, then went through every role and user and cut
          access down to what was actually being used. Centralized logging and billing
          visibility came out of the same pass — once you're auditing permissions
          account by account, you may as well wire up somewhere to see all the spend
          at once. Right-sizing compute and clearing out orphaned storage on the back
          of that visibility took about $2,500 a month off the bill.
        </p>
      </article>

      <article className="project">
        <h3>CI/CD pipeline with security gates built in</h3>
        <p className="stack">Jenkins · AWS CodePipeline · SCA · SAST · DAST · Docker</p>
        <p>
          Deploys were manual before this: someone SSH'd in, pulled the branch, and
          hoped. It worked until it didn't, and nobody could tell you what was actually
          running in production at a given time.
        </p>
        <p>
          I rebuilt the release process around Jenkins and CodePipeline, with SCA, SAST
          and DAST checks running as gates rather than an afterthought — a build with a
          high-severity finding doesn't ship. The pipeline also standardized what "done"
          means for a release: build, scan, deploy, verify, in that order, every time.
          My rough estimate is 60% less manual effort per release, though that number is
          a feel more than a measurement.
        </p>
      </article>

      <article className="project">
        <h3>CentOS 7 to 9 migration</h3>
        <p className="stack">CentOS · EC2 · Load balancing · Bash</p>
        <p>
          CentOS 7 was heading out of support, and the fleet behind it wasn't small
          enough to ignore that.
        </p>
        <p>
          The approach was staged rather than in-place: build and test CentOS 9 images
          alongside the existing fleet, roll new instances in behind the load balancer,
          confirm health, then retire the old ones a batch at a time. Nothing got
          upgraded in place, which cost more setup time but meant there was always a
          known-good fallback one step away. It went out with almost no downtime.
        </p>
      </article>

      <article className="project">
        <h3>Monolith to microservices split at Upsurge</h3>
        <p className="stack">Node.js · Express · MongoDB · Redis · REST</p>
        <p>
          One Node and Express monolith had grown to cover onboarding, auth, payments
          and subscriptions, and traffic had grown enough that the slow paths in it
          were starting to find everyone.
        </p>
        <p>
          I split it along those domain lines — payments and subscriptions came out
          first, since they were the parts most likely to need independent scaling and
          release cycles. Redis caching and a pass on the worst-offending queries
          brought response times down roughly 40% before the split even finished. The
          split itself took considerably longer than I told anyone it would, which is
          probably the most honest thing I can say about it.
        </p>
      </article>

      <article className="project">
        <h3>Real-time multiplayer backend at Mobzway</h3>
        <p className="stack">Node.js · MongoDB · SmartFoxServer · HMAC/SHA-256</p>
        <p>
          Real-time multiplayer games need a backend that can hold session and
          matchmaking state for a few thousand concurrent players without falling over,
          and that trusts none of the traffic hitting it by default.
        </p>
        <p>
          Node APIs sat in front of SmartFoxServer for the real-time messaging layer,
          with MongoDB holding player and session state. I wrote the request signing
          scheme — HMAC with SHA-256 — to stop requests from being tampered with or
          replayed, which mattered more than usual given how easy it is to cheat a game
          server that trusts its own clients. This was also where I learned, firsthand,
          what a server looks like under real concurrent load.
        </p>
      </article>
    </section>
  )
}
