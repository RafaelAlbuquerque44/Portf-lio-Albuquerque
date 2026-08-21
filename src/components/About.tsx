import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">Sobre Mim</h3>
        <p className="para">
          Sou <span className="highlight">Rafael Rodrigues de Albuquerque</span>, desenvolvedor Front-End apaixonado por unir código, design e automação de interfaces.
        </p>
        
        <div className="about-details">
          <p className="detail-para">
            Minha trajetória me deu uma visão muito além da programação. Passei pela <strong>Nestlé</strong> na área de Gestão de Pessoas (comunicação corporativa e endomarketing) e pela <strong>Brobot</strong> em suporte B2B, operações e comercial. Essa bagagem me fez entender que um bom produto não depende só de código, mas de uma excelente experiência e relacionamento.
          </p>
          <p className="detail-para">
            Busco sempre combinar Front-End, UI/UX Design e Inteligência Artificial para criar soluções que sejam funcionais, eficientes e visualmente impecáveis. Sou movido pela curiosidade: gosto de entender como as coisas funcionam por trás dos panos e testar novas tecnologias para construir produtos cada vez mais inteligentes.
          </p>
          <p className="detail-para">
            Meu objetivo é consolidar minha carreira transformando experiências digitais com inovação e performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
