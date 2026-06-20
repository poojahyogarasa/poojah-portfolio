"use client";

import { useEffect, useState, useCallback } from "react";
import { useTheme } from "next-themes";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

export function ParticlesBackground() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -10,
        },

        fpsLimit: 120,

        detectRetina: true,

        background: {
          color: {
            value: "transparent",
          },
        },

        particles: {
          number: {
            value: 40,
            density: {
              enable: true,
              area: 1000,
            },
          },

          color: {
            value: isDark
              ? ["#22d3ee", "#3b82f6", "#14b8a6"]
              : ["#06b6d4", "#2563eb"],
          },

          shape: {
            type: "circle",
          },

          opacity: {
            value: {
              min: 0.05,
              max: 0.25,
            },
            animation: {
              enable: true,
              speed: 0.5,
              sync: false,
            },
          },

          size: {
            value: {
              min: 1,
              max: 4,
            },
          },

          links: {
            enable: false,
          },

          move: {
            enable: true,
            speed: 0.8,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out",
            },
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },

          modes: {
            grab: {
              distance: 120,
              links: {
                opacity: 0.15,
              },
            },
          },
        },
      }}
    />
  );
}