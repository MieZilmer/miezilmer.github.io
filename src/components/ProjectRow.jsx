import { useNavigate } from "react-router-dom";

export default function ProjectRow({ project }) {
  const navigate = useNavigate();

  const handleProjectClick = () => {
    // Store current scroll position before navigating
    sessionStorage.setItem("homeScrollPosition", window.scrollY.toString());
    navigate(`/project/${project.id}`);
  };

  return (
    <section
      className="project-row"
      onClick={handleProjectClick}
      style={{ cursor: "pointer" }}
    >
      <figure>
        <img src={project.image} alt={project.name} />
      </figure>
      <article>
        <h3>{project.name}</h3>
      </article>
    </section>
  );
}
