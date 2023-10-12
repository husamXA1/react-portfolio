import aboutImg from "/assets/about.svg"

export default function About() {
  return (
    <div className="about" id="about">
      <div className="d-md-flex flex-row-reverse align-items-center container py-5">
        <div className="w-100 py-5">
          <h2>ABOUT ME</h2>
          <p className="py-3">
            Passionate Front-End Web Developer with expertise in React,
            skilled in creating visually stunning and intuitive websites.
            Proficient in HTML, CSS, JavaScript, Bootstrap, and React. with a
            focus on design aesthetics and exceptional user experiences.
            Currently a third-year software engineering student, seeking to
            leverage skills and knowledge to contribute to innovative web solutions.
          </p>
          <a href="#contact" className="btn btn-primary">GET IN TOUCH</a>
        </div>
        <div className="w-100">
          <img src={aboutImg} alt="about-img" className="img-fluid" />
        </div>
      </div>
    </div>
  )
}