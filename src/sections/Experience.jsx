export default function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>

      <article className="job">
        <p className="when">Jan 2025<br /><span>to now</span></p>
        <div className="what">
          <h3>Cloud and platform engineering at Dhan</h3>
          <p className="where">Raise Financial Services, Mumbai</p>

          <p>I own the AWS side of things across a few products: networking, deploys,
            access control, and the bill.</p>

          <p>The account structure was the first real piece of work. We run several AWS accounts
            under Organizations, so I built the cross-account IAM roles and the service control
            policies that keep them apart, then went through everyone's permissions and cut them
            down to what they were actually using. Centralized logging and billing visibility came
            out of the same effort.</p>

          <p>The bill was the second. Right-sizing compute and cleaning up old storage took about
            $2,500 a month off it. I keep an eye on it now so it doesn't creep back up.</p>

          <p>Deploys used to be a manual affair. They go through Jenkins and CodePipeline now,
            with SCA, SAST and DAST checks in the pipeline. My rough estimate is 60% less effort
            per release, though that number is a feel more than a measurement.</p>

          <p>Beyond that: CloudWatch, Prometheus and Grafana for monitoring, a CentOS 7 to 9
            migration that went out with almost no downtime, and the patching, backups and DR
            planning that nobody notices until the day they need it.</p>
        </div>
      </article>

      <article className="job">
        <p className="when">Feb 2022<br /><span>to Dec 2024</span></p>
        <div className="what">
          <h3>Backend at Upsurge</h3>
          <p className="where">Raise Financial Services, Mumbai</p>

          <p>Node, Express and MongoDB on AWS, with enough traffic that the slow paths found us
            quickly. I built the onboarding and auth flow (OTP login, token sessions, encryption)
            and then spent a long stretch on payments and subscriptions.</p>

          <p>Most of the performance work was Redis caching and rewriting queries that had no
            business being as slow as they were. Response times came down roughly 40%. Toward the
            end I split the monolith into separate services, which took considerably longer than
            I had told anyone it would.</p>
        </div>
      </article>

      <article className="job">
        <p className="when">Jun 2021<br /><span>to Feb 2022</span></p>
        <div className="what">
          <h3>Backend at Mobzway Technologies</h3>
          <p className="where">Jaipur</p>

          <p>My first job. Node APIs for real-time multiplayer games, running on MongoDB and
            SmartFoxServer. I wrote the HMAC and SHA-256 auth for it, and learned what happens
            to a server when a few thousand people connect to it at the same time.</p>
        </div>
      </article>
    </section>
  )
}
