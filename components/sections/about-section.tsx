"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/section-container";
import { SectionHeading } from "@/components/section-heading";
import {
  GraduationCap,
  Microscope,
  FolderGit2,
  Trophy,
  Wrench,
  Award,
} from "lucide-react";

export function AboutSection() {
  const cards = [
    {
      icon: GraduationCap,
      title: "Education",
      description:
        "BSc Eng. (Hons) Computer Engineering\nUniversity of Jaffna\n\nBIT Undergraduate\nUniversity of Moratuwa",
    },
    {
      icon: Microscope,
      title: "Research",
      description:
        "A Two Stage Deep Learning Framework For Weapon Detection And Classification Using CCTV Images\nin CCTV Images\n\nYOLOv8 • Deep Learning\nComputer Vision",
    },
    {
      icon: FolderGit2,
      title: "Projects",
      description:
        "10+\n\nAI Projects\nFull Stack Applications\nResearch Solutions",
    },
    {
      icon: Trophy,
      title: "Leadership",
      description:
        "Secretary\nIEEE ComSoc Student Chapter",
    },
    {
      icon: Wrench,
      title: "Tech Stack",
      description:
        "25+\n\nLanguages\nFrameworks\nCloud & Databases",
    },
    {
      icon: Award,
      title: "Credentials",
      description:
        "20+\n\nAWS\nGoogle Cloud\nAI & ML Certifications",
    },
  ];

  return (
    <SectionContainer id="about">
      <SectionHeading
        title="About Me"
        subtitle="Computer Engineering Undergraduate specializing in Artificial Intelligence, Computer Vision, Data Engineering, and Software Development."
      />

      {/* Professional Summary */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center mb-14"
      >

        <div className="space-y-4 text-lg leading-relaxed text-slate-300 max-w-3xl mx-auto">

  <p>
    Final Year Computer Engineering Undergraduate at the University of Jaffna
    and BIT Undergraduate at the University of Moratuwa.
  </p>

  <p>
    Driven by a passion for innovation, problem-solving, and the development of
    impactful technology solutions.
  </p>

  <p>
    Actively engaged in research, leadership, and project-based learning while
    continuously expanding technical and professional expertise.
  </p>

</div>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-6
                hover:border-cyan-500/40
                hover:bg-white/10
                transition-all
                duration-300
                min-h-[240px]
              "
            >
              <Icon className="w-10 h-10 text-cyan-400 mb-5" />

              <h4 className="text-xl font-semibold text-white mb-4">
                {card.title}
              </h4>

              <p className="text-slate-400 whitespace-pre-line leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </SectionContainer>
  );
}