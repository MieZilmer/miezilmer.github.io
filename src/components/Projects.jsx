import ProjectRow from "./ProjectRow";
import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("/data/clients.json");
      const data = await response.json();
      setProjects(data);
    }
    getData();
  }, []);

  // Split projects into school and other projects
  const schoolProjects = projects.slice(0, 4);
  const otherProjects = projects.slice(4);

  return (
    <section id="projects">

      {/* School Projects Section */}
      <div className="project-section">
        <h3 className="project-section-title">// School projects</h3>
        <div className="projects-grid">
          {schoolProjects.map((project) => (
            <ProjectRow project={project} key={project.id} />
          ))}
        </div>
      </div>

      {/* Other Projects Section */}
      <div className="project-section">
        <h3 className="project-section-title">// Other projects</h3>
        <div className="projects-grid">
          {otherProjects.map((project) => (
            <ProjectRow project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
