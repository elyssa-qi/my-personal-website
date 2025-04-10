import React from "react";
import { motion } from "framer-motion";
import { Github, Mail, Linkedin, Download } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/Navbar";
import casrImage from "../images/casrimg.png";
import uwImage from "../images/uraimg.png";
import compImage from "../images/sumimg.png";
import pwrImage from "../images/pwerpimg.png";
import pinkImage from "../images/pinksimg.png";

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
        "A collaborative task management system with real-time updates and team collaboration features.",
      imageUrl: compImage,
      techStack: ["React", "Firebase", "Material UI"],
      link: "https://example.com/project3",
    },
    {
      id: "4",
      title: "Power Prompt",
      description:
        "A machine learning model for image classification using convolutional neural networks.",
      imageUrl: pwrImage,
      techStack: ["Python", "TensorFlow", "Keras"],
      link: "https://example.com/project4",
    },
    {
      id: "5",
      title: "The Pink Stairs",
      description:
        "A dashboard for tracking and analyzing social media metrics across multiple platforms.",
      imageUrl: pinkImage,
      techStack: ["React", "D3.js", "Social Media APIs"],
      link: "https://example.com/project5",
    },
    {
      id: "6",
      title: "Mobile Fitness App",
      description:
        "A mobile application for tracking workouts, nutrition, and fitness progress.",
      imageUrl:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
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
