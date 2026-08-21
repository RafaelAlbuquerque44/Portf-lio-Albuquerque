import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contato</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>E-mail</h4>
            <p>
              <a href="mailto:raffa.rod2005@gmail.com" data-cursor="disable">
                raffa.rod2005@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Redes Sociais</h4>
            <a
              href="https://github.com/RafaelAlbuquerque44"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/rafael-albuquerque-b44b4b2b7/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Projetado e Desenvolvido <br /> por <span>Rafael Albuquerque</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
