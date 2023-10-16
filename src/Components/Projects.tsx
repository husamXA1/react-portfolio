export default function Projects() {
  return (
    <div className="projects py-5">
      <div className="container">
        <h2>PROJECTS</h2>
        <div className="projects-grid">
          <ProjectCard
            image=""
            title="Project Name"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            link=""
          />

          <ProjectCard
            image=""
            title="Project Name"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            link=""
          />

          <ProjectCard
            image=""
            title="Project Name"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            link=""
          />
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  image,
  title,
  description,
  link,
}: {
  image: string;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className="d-md-flex my-5 py-5 align-items-center project-card">
      <div className="w-100">
        <img src={image} alt="project-image" />
      </div>
      <div className="w-100">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link}>VIEW PROJECT</a>
      </div>
    </div>
  );
}
