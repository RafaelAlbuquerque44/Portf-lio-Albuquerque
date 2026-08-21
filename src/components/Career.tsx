import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Minha carreira <span>&</span>
          <br /> experiência
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Suporte & Operações B2B</h4>
                <h5>Brobot</h5>
              </div>
              <h3>ATUAL</h3>
            </div>
            <p>
              Interface com clientes corporativos e resolução de demandas técnicas. Atuação em campanhas de marketing, prospecção e monitoramento de processos para garantir a excelência operacional.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Gestão de Pessoas</h4>
                <h5>Nestlé</h5>
              </div>
              <h3>Profissional</h3>
            </div>
            <p>
              Comunicação corporativa e endomarketing no setor de achocolatados. Criação de campanhas visuais focadas em padronizar o fluxo de informação e aumentar o engajamento das equipes.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Liderança & Serviço Cívico</h4>
                <h5>Voluntariado</h5>
              </div>
              <h3>23/24</h3>
            </div>
            <p>
              Reconhecido com Honra ao Mérito no Serviço Militar pelo Tiro de Guerra 02-053 (2024). Também atuou como parlamentar jovem na 22ª Legislatura do Programa Vereador Jovem (2023).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
