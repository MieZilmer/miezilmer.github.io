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

  return (
    <section id="projects">
      <div className="headline-container">
        <h2>Projects</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectRow project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
}
