import React from "react";
import { motion } from "framer-motion";
import { Github, Mail, Linkedin, Download } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/Navbar";
import casrImage from "../images/casrimg.png";
import uwImage from "../images/uraimg.png";
import compImage from "../images/sumimg.png";
import pwrImage from "../images/pwerpimg.png";
import pinkImage from "../images/pinkyimg.png";
import sickImage from "../images/sickyimg.png";
import novaImage from "../images/technovaimg.png";
import rocketImage from "../images/rocketryimg.png";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  link?: string;
}

export default function Projects() {
  // Mock data for projects
  const projects: Project[] = [
    {
      id: "1",
      title: "CASR",
      description:
        "Full-stack development for a nationwide non-profit organization.",
      imageUrl: casrImage,
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://example.com/project1",
    },
    {
      id: "2",
      title: "University of Waterloo",
      description:
        "Undergraduate Research Assistant for Behaviour Analytics and Modelling Lab.",
      imageUrl: uwImage,
      techStack: ["JavaScript", "OpenWeather API", "CSS"],
      link: "https://example.com/project2",
    },
    {
      id: "3",
      title: "ComparaSum",
      description:
        "AI-powered review summarizer that makes online shopping more efficient.",
      imageUrl: compImage,
      techStack: ["React", "Firebase", "Material UI"],
      link: "https://example.com/project3",
    },
    {
      id: "4",
      title: "Power Prompt",
      description:
        "Chrome extension that visualizes the energy consumption of AI interactions.",
      imageUrl: pwrImage,
      techStack: ["Python", "TensorFlow", "Keras"],
      link: "https://example.com/project4",
    },
    {
      id: "5",
      title: "The Pink Stairs",
      description:
        "Full-stack development for one of the largest youth-led non-profits globally.",
      imageUrl: pinkImage,
      techStack: ["React", "D3.js", "Social Media APIs"],
      link: "https://example.com/project5",
    },
    {
      id: "6",
      title: "Koziarski Lab",
      description:
        "A mobile application for tracking workouts, nutrition, and fitness progress.",
      imageUrl: sickImage,
      techStack: ["React Native", "Redux", "Firebase"],
      link: "https://example.com/project6",
    },
    {
      id: "7",
      title: "TechNova",
      description:
        "Design for University of Waterloo’s First Women+ in Tech Hackathon",
      imageUrl: novaImage,
      techStack: ["React Native", "Redux", "Firebase"],
      link: "https://example.com/project6",
    },
    {
      id: "8",
      title: "Waterloo Rocketry",
      description:
        "Software member for Waterloo's rocketry design team.",
      imageUrl: rocketImage,
      techStack: ["React Native", "Redux", "Firebase"],
      link: "https://example.com/project6",
    },
  ];

  // Animation variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#1f1f1f]">
      <div className="relative">
        <Navbar isFixed={false} />
        {/* Name and Social Links positioned in navbar area */}
        <div className="absolute top-0 left-0 w-full">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col items-start">
              <h1 className="text-[40px] font-seasons text-white mb-0">Elyssa Qi</h1>
              <div className="flex space-x-3">
                <a
                  href="https://github.com/elyssa-qi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/60 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/elyssa-qi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/60 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="elyssaqi314@gmail.com"
                  className="text-white hover:text-white/60 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="/path-to-your-resume.pdf"
                  download
                  className="text-white hover:text-white/60 transition-colors"
                >
                  <Download className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              techStack={project.techStack}
              link={project.link}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
