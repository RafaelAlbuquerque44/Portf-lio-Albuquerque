import { useRef, useState, useEffect, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";

const Work = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollbarRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(25); // Default to 25% if 4 projects

  const updateScrollbar = useCallback(() => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const p = maxScroll > 0 ? scrollLeft / maxScroll : 0;
      setProgress(Math.max(0, Math.min(1, p))); // Clamp between 0 and 1
      
      const thumbH = scrollWidth > 0 ? (clientWidth / scrollWidth) * 100 : 25;
      setThumbHeight(Math.max(10, Math.min(100, thumbH))); // Ensure it's at least 10%
    }
  }, []);

  useEffect(() => {
    updateScrollbar();
    window.addEventListener("resize", updateScrollbar);
    return () => window.removeEventListener("resize", updateScrollbar);
  }, [updateScrollbar]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    handlePointerMove(e);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.buttons !== 1) return; // Only execute when left mouse button is pressed
    if (!containerRef.current || !scrollbarRef.current) return;
    
    const rect = scrollbarRef.current.getBoundingClientRect();
    // We want the mouse to center on the thumb, but for simplicity we calculate progress
    // based on the click position relative to the track minus half thumb height
    const thumbPixelHeight = (thumbHeight / 100) * rect.height;
    const clickY = e.clientY - rect.top - (thumbPixelHeight / 2);
    const maxTrack = rect.height - thumbPixelHeight;
    
    const clickProgress = maxTrack > 0 ? Math.max(0, Math.min(1, clickY / maxTrack)) : 0;
    
    const { scrollWidth, clientWidth } = containerRef.current;
    const maxScroll = scrollWidth - clientWidth;
    containerRef.current.scrollTo({ left: maxScroll * clickProgress });
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

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
    <div className="work-scroll-wrapper" style={{ width: "100%", position: "relative" }}>
      <div className="work-section" id="work" style={{ minHeight: "100vh", paddingBottom: "100px" }}>
        <div className="work-container section-container">
          <h2>
            Meus <span>Trabalhos</span>
          </h2>
          <div 
            className="work-flex-container" 
            ref={containerRef} 
            onScroll={updateScrollbar}
          >
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
          <div 
            className="work-scrollbar" 
            ref={scrollbarRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            <div 
              className="work-scrollbar-thumb" 
              style={{ 
                height: `${thumbHeight}%`, 
                top: `${progress * (100 - thumbHeight)}%` 
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
