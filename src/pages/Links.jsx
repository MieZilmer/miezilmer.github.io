import LinkTree from "../components/LinkTree";

export default function Links() {
  return (
    <section className="links">
      <figure>
        <img src="../img/race_2024.webp" alt="Rasmus Cederdorff" />
      </figure>
      <header>
        <h1>Rasmus Cederdorff</h1>
        <p>Web App Developer | Senior Lecturer</p>
      </header>

      <LinkTree />
    </section>
  );
}
