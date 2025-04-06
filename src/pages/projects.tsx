import React from "react";
import { motion } from "framer-motion";
import { Github, Mail, Linkedin, Download } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/Navbar";

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
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with user authentication, product catalog, and payment processing.",
      imageUrl:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://example.com/project1",
    },
    {
      id: "2",
      title: "Weather App",
      description:
        "A responsive weather application that provides real-time weather data based on user location.",
      imageUrl:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
      techStack: ["JavaScript", "OpenWeather API", "CSS"],
      link: "https://example.com/project2",
    },
    {
      id: "3",
      title: "Task Management System",
      description:
        "A collaborative task management system with real-time updates and team collaboration features.",
      imageUrl:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      techStack: ["React", "Firebase", "Material UI"],
      link: "https://example.com/project3",
    },
    {
      id: "4",
      title: "Machine Learning Model",
      description:
        "A machine learning model for image classification using convolutional neural networks.",
      imageUrl:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
      techStack: ["Python", "TensorFlow", "Keras"],
      link: "https://example.com/project4",
    },
    {
      id: "5",
      title: "Social Media Dashboard",
      description:
        "A dashboard for tracking and analyzing social media metrics across multiple platforms.",
      imageUrl:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
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
