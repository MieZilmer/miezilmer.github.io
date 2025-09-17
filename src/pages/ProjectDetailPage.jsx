import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProject() {
      try {
        const response = await fetch("/data/clients.json");
        const projects = await response.json();
        const foundProject = projects.find((p) => p.id === id);
        setProject(foundProject);
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    }
    getProject();
  }, [id]);

  const handleGoBack = () => {
    navigate("/");
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!project) {
    return <div className="error">Project not found</div>;
  }

  return (
    <div className="project-detail-fullpage">
      <button className="back-button-fullpage" onClick={handleGoBack}>
        ← Back to Projects
      </button>

      <div className="project-header">
        <h1 className="project-title">{project.name}</h1>
        <div className="project-content-row">
          <div className="project-description">
            <p>{project.body}</p>
          </div>
          <div className="project-links-right">
            {project.links.map((link, index) => (
              <a
                key={`${project.id}-${index}`}
                href={link.url}
                rel="noreferrer"
                target="_blank"
                className="project-link-button"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="project-image-full">
        <img src={project.image} alt={project.name} />
      </div>
    </div>
  );
}
