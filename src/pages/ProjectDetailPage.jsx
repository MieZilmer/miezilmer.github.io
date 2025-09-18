import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ScrollToTop from "../components/ScrollToTop";

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
    // Use setTimeout to ensure navigation completes before scrolling
    setTimeout(() => {
      const savedScrollPosition = sessionStorage.getItem("homeScrollPosition");
      if (savedScrollPosition) {
        window.scrollTo({
          top: parseInt(savedScrollPosition),
          behavior: "smooth",
        });
        // Clean up the stored position
        sessionStorage.removeItem("homeScrollPosition");
      } else {
        // Fallback to scrolling to projects section
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 100);
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

      {/* Additional Images Section */}
      {project.additionalImages && project.additionalImages.length > 0 && (
        <div className="project-additional-images">
          {project.additionalImages.map((imageUrl, index) => (
            <div key={index} className="additional-image">
              <img
                src={imageUrl}
                alt={`${project.name} - Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      )}

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
