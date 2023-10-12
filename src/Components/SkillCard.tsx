export default function SkillCard({img, title, description}: {img: string, title:string, description: string}) {
  return (
    <div className="d-flex flex-column text-center my-3 w-100">
      <div className="skill-img">
        <img className="img-fluid" src={img} alt="skill-img" />
      </div>
      <div className="text">
        <h3 className="px-3">{title}</h3>
        <p className="px-3">{description}</p>
      </div>
    </div>
  )
}