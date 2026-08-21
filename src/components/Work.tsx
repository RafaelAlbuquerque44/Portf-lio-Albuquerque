import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Work = () => {
  useGSAP(() => {
    function getTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (!box || box.length === 0) return 0;
      const container = document.querySelector(".work-container");
      if (!container) return 0;
      const rectLeft = container.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      
      const paddingStr = window.getComputedStyle(box[0]).paddingLeft || "80px";
      let padding: number = parseInt(paddingStr) / 2;
      if (isNaN(padding)) padding = 40;

      const translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
      return isNaN(translateX) ? 2000 : translateX; // Fallback seguro
    }

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-scroll-wrapper",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: ".work-section",
        pinSpacing: false, // Desativa o pin-spacer bugado
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: () => -getTranslateX(),
      ease: "none",
    });

    return () => {
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  const projects = [
    {
      name: "Bingo-Quermesse",
      category: "TypeScript",
      tools: "TypeScript, React, Node",
      url: "https://github.com/RafaelAlbuquerque44/Bingo-Quermesse",
      image: "/Portf-lio-Albuquerque/images/Bingo.png"
    },
    {
      name: "Steam-Hour-Farm",
      category: "TypeScript",
      tools: "TypeScript, Node",
      url: "https://github.com/RafaelAlbuquerque44/Steam-Hour-Farm",
      image: "/Portf-lio-Albuquerque/images/Steam Hour Farm.png"
    },
    {
      name: "GameHub",
      category: "TypeScript",
      tools: "TypeScript, Fullstack",
      url: "https://gamehub.moncy.dev",
      image: "/Portf-lio-Albuquerque/images/GameHub.png"
    },
    {
      name: "fleetmonitor",
      category: "TypeScript",
      tools: "TypeScript, Web App",
      url: "https://github.com/RafaelAlbuquerque44/fleetmonitor",
      image: "/Portf-lio-Albuquerque/images/FleetMonitor.png"
    }
  ];

  return (
    <div className="work-scroll-wrapper" style={{ height: "400vh", width: "100%", position: "relative" }}>
      <div className="work-section" id="work" style={{ height: "100vh", overflow: "hidden" }}>
        <div className="work-container section-container">
          <h2>
            Meus <span>Trabalhos</span>
          </h2>
          <div className="work-flex">
            {projects.map((project, index) => (
              <div className="work-box" key={index}>
                <div className="work-info">
                  <div className="work-title">
                    <h3>0{index + 1}</h3>

                    <div>
                      <h4>{project.name}</h4>
                      <p>{project.category}</p>
                    </div>
                  </div>
                  <h4>Ferramentas e recursos</h4>
                  <p>{project.tools}</p>
                </div>
                <a href={project.url} target="_blank" rel="noreferrer" style={{ display: 'block', height: '100%', width: '100%' }}>
                  <WorkImage image={project.image || "/Portf-lio-Albuquerque/images/placeholder.webp"} alt={project.name} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
