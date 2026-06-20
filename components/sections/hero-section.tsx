"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { getPersonalInfo, getSocialLinks } from "@/lib/config";
import { ArrowDown } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export function HeroSection() {
const personalInfo = getPersonalInfo();
const socials = getSocialLinks();

const roles = [
"AI Engineer",
"Computer Vision Researcher",
"Software Developer",
"Machine Learning Enthusiast",
"Data Engineer",
"Computer Engineering Undergraduate",
];

const [currentRole, setCurrentRole] = useState(0);

useEffect(() => {
const interval = setInterval(() => {
setCurrentRole((prev) => (prev + 1) % roles.length);
}, 2500);


return () => clearInterval(interval);


}, []);

const scrollToAbout = () => {
const aboutSection = document.getElementById("about");

if (aboutSection) {
  aboutSection.scrollIntoView({
    behavior: "smooth",
  });
}

};

const container = {
hidden: { opacity: 0 },
show: {
opacity: 1,
transition: {
staggerChildren: 0.1,
},
},
};

const item = {
hidden: {
opacity: 0,
y: 20,
},
show: {
opacity: 1,
y: 0,
transition: {
duration: 0.5,
},
},
};

return ( <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12"> <div className="container mx-auto px-4 relative z-10"> <div className="grid lg:grid-cols-[1fr_0.9fr] gap-8 items-center">

      {/* LEFT SIDE */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-8 text-center lg:text-left"
      >
        <motion.div variants={item}>
          <h1 className="font-bold">
            <span className="block text-xl md:text-3xl text-muted-foreground mb-3">
              Welcome, I'm
            </span>

            <span
  className="
    block
    text-6xl
    md:text-7xl
    lg:text-8xl
    font-black
    leading-none
    bg-gradient-to-r
    from-white
    via-slate-100
    to-cyan-200
    bg-clip-text
    text-transparent
  "
>
  Poojah
</span>

          </h1>
        </motion.div>

        <motion.div variants={item}>
          <motion.h2
            key={currentRole}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
  text-2xl
  md:text-3xl
  font-semibold
  mb-6
  bg-gradient-to-r
  from-cyan-400
  to-blue-400
  bg-clip-text
  text-transparent
"
          >
            {roles[currentRole]}
          </motion.h2>
        </motion.div>

        <motion.div variants={item}>
          <p className="text-lg md:text-xl max-w-2xl lg:max-w-xl text-slate-300 leading-relaxed">
            {personalInfo.bio}
          </p>
        </motion.div>

        <motion.div variants={item}>
          <div className="flex gap-4 justify-center lg:justify-start">
            {socials.map((social) => {
              const IconComponent =
                Icons[
                  social.icon as keyof typeof Icons
                ] as LucideIcon;

              return (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                  className={cn(
                    "h-11 w-11 flex items-center justify-center rounded-full",
                    "border border-border",
                    "text-muted-foreground",
                    "hover:text-primary hover:border-primary",
                    "transition-colors"
                  )}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {IconComponent && (
                    <IconComponent className="h-5 w-5" />
                  )}
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE IMAGE */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="hidden lg:flex justify-center -ml-16"
>
  <div className="relative">

    {/* Glow */}
    <div
  className="
    absolute
    inset-0
    bg-cyan-500/40
    blur-[140px]
    scale-150
    rounded-full
  "
/>

    {/* Image Container */}
    <div
      className="
        relative
        w-[400px]
        h-[400px]
        rounded-full
        overflow-hidden
        border-4
        border-cyan-400/60
shadow-[0_0_100px_rgba(34,211,238,0.35)]
      "
    >
      <Image
        src="/images/poojah.jpg"
        alt="Poojah Yogarasa"
        fill
        priority
        className="object-cover"
      />
    </div>

  </div>
</motion.div>

    </div>
  </div>

  <motion.div
    className="
      absolute
      bottom-8
      left-1/2
      -translate-x-1/2
      cursor-pointer
    "
    animate={{ y: [0, 10, 0] }}
    transition={{
      repeat: Infinity,
      duration: 1.5,
    }}
    onClick={scrollToAbout}
  >
    <ArrowDown className="h-6 w-6 text-primary" />
  </motion.div>
</section>


);
}
