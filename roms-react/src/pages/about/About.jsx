import "./About.scss";
import contributors from "../../assets/contributors";
import ContributorCard from "../../components/contributorCard/ContributorCard";
const About = () => {
  return (
    <div className="about">
      <div className="about-text">
        <h2>Antecedentes</h2>
        <p>
          {" "}
          El proyecto "GameLoadX" fue concebido por tres estudiantes
          universitarios apasionados por los videojuegos y la tecnología. Al
          darse cuenta de la creciente dificultad para encontrar y descargar
          juegos clásicos, decidieron unir sus habilidades y conocimientos para
          crear una plataforma que facilitara este proceso. Con la combinación
          de sus habilidades en programación, diseño web y conocimiento en
          videojuegos, han trabajado juntos para desarrollar un sitio web fácil
          de usar y navegar, que ofrece una amplia selección de enlaces a juegos
          emulados de múltiples consolas y plataformas. Este proyecto es el
          resultado de su amor por los videojuegos y su deseo de compartir la
          nostalgia de los clásicos con otros aficionados de todo el mundo
        </p>
      </div>
      <div className="contributors-section">
        <h2>Contribuidores: {""} </h2>
        <div className="contributors">
          {contributors.map((contributor, i) => (
            <ContributorCard contributor={contributor} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
