function EducationIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 9l10-5 10 5-10 5-10-5Z" />
      <path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
    </svg>
  )
}

export default function Education() {
  return (
    <section id="education">
      <h2><EducationIcon /><b>Education_</b></h2>
      <h3><b>Bachelor of Technology in Computer Science Engineering</b></h3>
      <p></p>
      <p>Arya Institute of Engineering and Technology, Jaipur</p>
      <p>Rajasthan Technical University (RTU), Kota | 2016–2021</p>
    </section>
  )
}
