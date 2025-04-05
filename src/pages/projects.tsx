import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ProjectCard from "../components/ProjectCard";

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
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Link
            to="/"
            className="flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-muted-foreground max-w-2xl">
            Here's a collection of projects I've worked on during my engineering
            studies and personal time. Each project demonstrates different
            skills and technologies I've mastered.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
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
