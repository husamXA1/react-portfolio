import SkillCard from "./SkillCard";
import frontend from "/assets/frontend.svg"
import responsive from "/assets/responsive.svg"
import softwareengineering from "/assets/softwareengineering.svg"


export default function Skills() {
  return (
    <div className="skills py-5" id="skills">
      <div className="container">
        <h2>SKILLS</h2>
        <div className="skills-grid d-md-flex">
          <SkillCard 
            img={frontend}
            title="Front-End Development" 
            description="React, HTML, CSS, and JavaScript expert with Bootstrap proficiency, crafting visually appealing and user-centric websites." 
          />
          <SkillCard 
            img={responsive}
            title="Responsive Design" 
            description="Conqueror of frontendmentor challenges, excelling in responsive layouts and creating adaptive interfaces." 
          />
          <SkillCard 
            img={softwareengineering}
            title="Software Engineering" 
            description="Proficient in SDLC with a focus on requirements engineering and detailed Software Requirements Specifications (SRS)." 
          />
        </div>
      </div>
    </div>
  )
}