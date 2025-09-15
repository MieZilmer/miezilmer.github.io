export default function CVHero() {
  function scrollToContact(event) {
    event.preventDefault();
    const element = document.querySelector("#contact");
    element.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <section className="hero">
      <article>
        <h2>
          Do you
          <br /> need more?
        </h2>
        <p>
          Download my{" "}
          <a href="/cv-2025.pdf" rel="noreferrer" target="_blank">
            curriculum vitae here
          </a>
          ,<br /> visit my{" "}
          <a
            href="https://www.instagram.com/cederdorff/"
            rel="noreferrer"
            target="_blank"
          >
            Instragram Profile{" "}
          </a>
          or let&apos;s{" "}
          <a href="/#contact" onClick={scrollToContact}>
            get in touch
          </a>
        </p>
      </article>
    </section>
  );
}
