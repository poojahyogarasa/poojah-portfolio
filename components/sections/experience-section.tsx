"use client";

import { SectionContainer } from "@/components/section-container";
import { SectionHeading } from "@/components/section-heading";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
Brain,
Code2,
Globe,
Database,
Cloud,
BarChart3,
Network,
Microscope,
} from "lucide-react";

export function ExperienceSection() {
const skillCategories = [
{
icon: Brain,
title: "Artificial Intelligence & Machine Learning",
skills: [
"YOLOv8",
"Computer Vision",
"Deep Learning",
"Scikit-Learn",
"Pandas",
"NumPy",
"Generative AI",
"Prompt Engineering",
],
},
{
icon: Code2,
title: "Programming Languages",
skills: [
"Python",
"Java",
"C",
"C++",
"JavaScript",
"TypeScript",
"SQL",
],
},
{
icon: Globe,
title: "Web Development",
skills: [
"React",
"Next.js",
"Node.js",
"Express.js",
"Flask",
"REST APIs",
"Tailwind CSS",
],
},
{
icon: Database,
title: "Database Technologies",
skills: [
"MySQL",
"Firebase",
"SQLite",
"Supabase",
],
},
{
icon: Cloud,
title: "Cloud & DevOps",
skills: [
"Google Cloud",
"Git",
"GitHub",
"GitHub Actions",
"Docker",
"Postman",
],
},
{
icon: BarChart3,
title: "Data & Analytics",
skills: [
"Data Analysis",
"Statistics",
"Linear Algebra",
"SciPy",
"Matplotlib",
],
},
{
icon: Network,
title: "Networking & Communication",
skills: [
"TCP/IP",
"Socket.IO",
"WebRTC",
"Socket Programming",
],
},
{
icon: Microscope,
title: "Research & Engineering",
skills: [
"Literature Review",
"Dataset Preparation",
"Model Training",
"Model Evaluation",
"Experimental Analysis",
"Technical Documentation",
],
},
];

return ( <SectionContainer id="skills"> <SectionHeading
     title="Skills & Technologies"
     subtitle="Technologies, frameworks, tools, and research expertise used across AI, software engineering, and data-driven projects."
   />

  <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
    {skillCategories.map((category, index) => {
      const Icon = category.icon;

      return (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.08,
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
              transition-all
              duration-300
            "
          >
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <Icon className="h-8 w-8 text-cyan-400" />

                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-4
                      py-2
                      rounded-full
                      bg-cyan-500/10
                      border
                      border-cyan-500/20
                      text-cyan-300
                      text-sm
                      font-medium
                      hover:bg-cyan-500/20
                      transition
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      );
    })}
  </div>
</SectionContainer>


);
}
