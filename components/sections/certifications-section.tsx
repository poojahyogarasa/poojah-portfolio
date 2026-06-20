"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/section-container";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Award, ArrowRight } from "lucide-react";

export function CertificationsSection() {
const certifications = [
{
title: "AWS Cloud Practitioner Essentials",
issuer: "Amazon Web Services",
},
{
title: "Innovating with Google Cloud AI",
issuer: "Google Cloud",
},
{
title: "Introduction to Artificial Intelligence",
issuer: "Great Learning",
},
{
title:
"Machine Learning Deep Dive: Business Applications and Coding Walkthroughs",
issuer: "SkillUp by Simplilearn",
},
{
title: "Data Analysis with ChatGPT",
issuer: "SkillUp by Simplilearn",
},
{
title: "Python Programmer Bootcamp",
issuer: "Udemy",
},
{
title: "API Testing Learning Path",
issuer: "Postman",
},
{
title: "Introduction to Microsoft Azure Synapse Analytics",
issuer: "Microsoft Learn",
},
];

return ( <SectionContainer id="certifications"> <SectionHeading
     title="Certifications & Learning"
     subtitle="Professional certifications and continuous learning across Artificial Intelligence, Cloud Computing, Data Engineering, Software Development, and Quality Assurance."
   />

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {certifications.map((cert, index) => (
      <motion.div
        key={cert.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: index * 0.05,
        }}
        viewport={{ once: true }}
      >
        <Card
          className="
            h-full
            bg-white/5
            border-white/10
            backdrop-blur-xl
            hover:border-cyan-500/40
            hover:bg-white/10
            transition-all
            duration-300
          "
        >
          <CardContent className="p-6">
            <Award className="h-10 w-10 text-cyan-400 mb-4" />

            <h3 className="text-lg font-semibold text-white mb-3">
              {cert.title}
            </h3>

            <p className="text-slate-400 text-sm">
              {cert.issuer}
            </p>
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </div>

  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
    viewport={{ once: true }}
    className="flex justify-center mt-12"
  >
    <a
      href="https://www.linkedin.com/in/poojah-yogarasa/details/certifications/"
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex
        items-center
        gap-2
        px-6
        py-3
        rounded-full
        border
        border-cyan-500/30
        bg-cyan-500/10
        text-cyan-400
        hover:bg-cyan-500/20
        hover:border-cyan-500/50
        transition-all
        duration-300
        font-medium
      "
    >
      View All Credentials
      <ArrowRight className="h-4 w-4" />
    </a>
  </motion.div>
</SectionContainer>


);
}
