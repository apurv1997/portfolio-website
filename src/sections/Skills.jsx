function SkillsIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2-2 2.8-2.8Z" />
    </svg>
  )
}

const LEFT_LOGOS = [
  {
    slug: "amazonaws",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    top: "5%",
    left: "3%",
    width: 70,
    duration: 6,
    delay: 0,
  },
  { slug: "terraform", top: "18%", left: "6%", size: 52, duration: 7, delay: 0.6 },
  { slug: "jenkins", top: "32%", left: "2%", size: 38, duration: 5.5, delay: 1.2 },
  { slug: "kubernetes", top: "46%", left: "5%", size: 48, duration: 6.5, delay: 0.3 },
  { slug: "mongodb", top: "60%", left: "4%", size: 42, duration: 7.5, delay: 1.8 },
  { slug: "prometheus", top: "74%", left: "7%", size: 50, duration: 6, delay: 0.9 },
  { slug: "gitlab", top: "88%", left: "3%", size: 40, duration: 5, delay: 1.5 },
]

const RIGHT_LOGOS = [
  { slug: "docker", top: "10%", right: "4%", size: 46, duration: 6.5, delay: 0.4 },
  { slug: "githubactions", top: "24%", right: "2%", size: 40, duration: 5.5, delay: 1.1 },
  { slug: "grafana", top: "38%", right: "6%", size: 52, duration: 7, delay: 0.2 },
  { slug: "redis", top: "52%", right: "3%", size: 38, duration: 6, delay: 1.6 },
  { slug: "nodedotjs", top: "66%", right: "5%", size: 48, duration: 5, delay: 0.8 },
  { slug: "mysql", top: "80%", right: "2%", size: 42, duration: 7.5, delay: 0.1 },
  { slug: "rabbitmq", top: "94%", right: "4%", size: 50, duration: 6.2, delay: 1.3 },
]

function SkillsDecor() {
  return (
    <div className="skills-decor" aria-hidden="true">
      {LEFT_LOGOS.map((logo) => (
        <img
          key={logo.slug}
          src={logo.src || `https://cdn.simpleicons.org/${logo.slug}`}
          alt=""
          loading="lazy"
          style={{
            top: logo.top,
            left: logo.left,
            width: logo.width || logo.size,
            height: logo.width ? "auto" : logo.size,
            animationDuration: `${logo.duration}s`,
            animationDelay: `${logo.delay}s`,
          }}
        />
      ))}
      {RIGHT_LOGOS.map((logo) => (
        <img
          key={logo.slug}
          src={`https://cdn.simpleicons.org/${logo.slug}`}
          alt=""
          loading="lazy"
          style={{
            top: logo.top,
            right: logo.right,
            width: logo.size,
            height: logo.size,
            animationDuration: `${logo.duration}s`,
            animationDelay: `${logo.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills">
      <SkillsDecor />
      <h2><SkillsIcon /><b>Skills &amp; Technologies_</b></h2>

      <h3>Languages &amp; Backend :</h3>
      <ul className="skill-boxes">
        <li>JavaScript</li>
        <li>Python</li>
        <li>Node.js</li>
        <li>REST APIs</li>
      </ul>

      <h3>Cloud &amp; Infrastructure :</h3>
      <ul className="skill-boxes">
        <li>AWS (EC2, IAM, VPC, S3, OIDC, SCPs)</li>
        <li>Multi-Account Governance</li>
      </ul>

      <h3>IaC &amp; CI/CD :</h3>
      <ul className="skill-boxes">
        <li>CloudFormation</li>
        <li>Terraform</li>
        <li>Jenkins</li>
        <li>GitHub Actions</li>
        <li>GitLab</li>
        <li>CodePipeline</li>
        <li>Checkov</li>
      </ul>

      <h3>Containers &amp; Orchestration :</h3>
      <ul className="skill-boxes">
        <li>Docker</li>
        <li>Kubernetes</li>
      </ul>

      <h3>Monitoring &amp; Observability :</h3>
      <ul className="skill-boxes">
        <li>Grafana</li>
        <li>Prometheus</li>
        <li>CloudWatch</li>
        <li>SigNoz</li>
      </ul>

      <h3>Databases, Caching &amp; Messaging :</h3>
      <ul className="skill-boxes">
        <li>MongoDB</li>
        <li>MySQL</li>
        <li>Redis</li>
        <li>RabbitMQ</li>
      </ul>

      <h3>Networking &amp; Security :</h3>
      <ul className="skill-boxes">
        <li>VPC</li>
        <li>Subnets</li>
        <li>Security Groups</li>
        <li>Load Balancing</li>
        <li>IAM</li>
        <li>Least Privilege</li>
        <li>TLS</li>
      </ul>
    </section>
  )
}
