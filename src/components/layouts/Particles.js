import React from "react";
import Particles from "react-particles-js";

const ParticlesBackground = () => {
  return (
    <div className="particle">
      <Particles
        height="100vh"
        width="100vw"
        params={{
          particles: {
            collisions: {
              enable: true,
            },
            number: {
              value: 80,
              density: {
                enable: false,
              },
            },
            color: "#000",
            size: {
              value: 5,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: true,
              color: "#000",
            },
            move: {
              random: true,
              speed: 1.5,
              direction: "bottom",
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              bubble: {
                distance: 100,
                duration: 1,
                size: 3,
                opacity: 0.5,
              },
              push: {
                particles_nb: 5,
              },
            },
            retina_detect: true,
          },
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
