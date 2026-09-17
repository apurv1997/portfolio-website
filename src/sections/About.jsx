export default function About() {
  return (
    <section id="about">
      <h2>About</h2>
      <div className="about-layout">
        {/* Swap for a real photo: <img src="/headshot.jpg" alt="Apurv Vyas" className="photo" />
            and give .photo the same width/height/border-radius as .photo-placeholder. */}
        <div className="photo-placeholder" aria-hidden="true">AV</div>
        <div className="about-text">
          <p>
            I'm a cloud and platform engineer, currently at Dhan, a stockbroking platform
            in Mumbai. I design and govern the AWS architecture behind a low-latency
            trading system — networking, deploys, access control, and the bill.
          </p>
          <p>
            I got here by way of backend development. For about two and a half years I
            built and scaled Node.js services — first for a real-time multiplayer game
            backend, then for an ed-tech product handling real payments and subscriptions
            at scale. Somewhere in that second job I ended up owning more infrastructure
            than code, and when the platform role at Dhan came up, it was less a career
            pivot than an admission of what I was already doing.
          </p>
          <p>
            I still think in terms of the systems I used to build, and that helps: it's
            easier to design IAM policies and pipelines for services when you've spent
            years on the other end of them. I like infrastructure that's reliable,
            cost-aware, and doesn't need a war room to keep running. That's mostly what
            I really do.
          </p>
        </div>
      </div>
    </section>
  )
}
