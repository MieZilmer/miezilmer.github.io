export default function Skills() {
  const skillsAreas = [
     {
       id: 1,
       title: "Frontend Development",
       description:
         "Building responsive and interactive web applications with modern technologies and tools.",
       logos: [
         "/data/img/CSS3_logo_and_wordmark.svg.png",
         "/data/img/HTML5_logo_and_wordmark.svg.png",
         "/data/img/JavaScript-Logo.png",
         "/data/img/React-icon.svg.png",
       ],
     },
    {
      id: 2,
      title: "UI/UX Design",
      description:
        "Creating intuitive and engaging user experiences through thoughtful design and user research.",
      logo: "/data/img/Figma-logo.svg",
    },
    {
      id: 3,
      title: "Digital design",
      description:
        "Creating logos and digitalizing visual content using industry-standard tools.",
      logo: "/data/img/Adobe_Illustrator_CC_icon.svg.png",
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">// My Skills</h2>
        <div className="skills-grid">
          {skillsAreas.map((area) => (
            <div key={area.id} className="skills-card">
              <h3 className="skills-card-title">{area.title}</h3>
              <p className="skills-card-description">{area.description}</p>
              {area.logo ? (
                <div className="skills-logo">
                  <img src={area.logo} alt="Skills logo" />
                </div>
              ) : area.logos ? (
                <div className="skills-logos-grid">
                  {area.logos.map((logoSrc, index) => (
                    <div key={index} className="skills-logo-item">
                      <img src={logoSrc} alt={`Technology logo ${index + 1}`} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="skills-tags">
                  {area.skills &&
                    area.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
