import React from "react";
import Particles from "react-tsparticles";

import "./index.css";

const ParticleBackground = ({ color }) => (
  <Particles
    id="tsparticles"
    options={{
      background: {
        color: {
          value: `${color}`,
        },
      },
      fpsLimit: 60,
      interactivity: {
        detectsOn: "window",
        events: {
          onHover: {
            enable: true,
            mode: "attract",
            parallax: {
              smooth: 100,
            },
          },
        },
        modes: {
          attract: {
            speed: 2,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        move: {
          direction: "top",
          enable: true,
          outModes: {
            bottom: "out",
            left: "out",
            right: "out",
            top: "out",
          },
          random: true,
          speed: 0.3,
        },
        number: {
          density: {
            enable: true,
          },
          value: 200,
        },
        opacity: {
          value: 0.6,
          random: {
            enable: true,
            minimumValue: 0.2,
          },
          animation: {
            enable: true,
            speed: 1,
          },
        },
        size: {
          random: {
            enable: true,
            minimumValue: 0.5,
          },
          value: 1.5,
          animation: {
            minimumValue: 0.3,
            speed: 4,
          },
        },
        twinkle: {
          particles: {
            enable: true,
            frequency: 0.0001,
          },
        },
      },
    }}
  />
);

export default ParticleBackground;
