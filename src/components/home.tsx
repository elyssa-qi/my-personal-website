import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 py-20 md:py-32"
      >
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary">John Doe</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground">
              Engineering Student & Aspiring Software Engineer
            </h2>
            <p className="text-lg max-w-2xl text-muted-foreground">
              I'm passionate about building innovative solutions and exploring
              new technologies. Currently studying Computer Engineering with a
              focus on software development.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild>
                <Link to="/projects">
                  View My Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
            <div className="flex gap-4 pt-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6 text-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6 text-foreground hover:text-primary transition-colors" />
              </a>
              <a href="mailto:example@email.com" aria-label="Email Me">
                <Mail className="h-6 w-6 text-foreground hover:text-primary transition-colors" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-muted/30">
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Experience
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                My professional journey and academic experiences that have
                shaped my skills and knowledge.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <ExperienceCard
                title="Software Engineering Intern"
                company="Tech Company"
                period="May 2023 - August 2023"
                description="Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to implement new features and fix bugs."
              />

              <ExperienceCard
                title="Research Assistant"
                company="University Lab"
                period="January 2023 - Present"
                description="Conducting research on machine learning algorithms for computer vision applications. Implementing and testing models using Python and TensorFlow."
              />

              <ExperienceCard
                title="Web Development Project"
                company="Course Project"
                period="September 2022 - December 2022"
                description="Led a team of 4 students to develop a full-stack web application for local businesses. Used React, Express, and MongoDB."
              />

              <ExperienceCard
                title="Hackathon Participant"
                company="University Hackathon"
                period="October 2022"
                description="Participated in a 48-hour hackathon and developed a mobile app for sustainable living. Won the 'Most Innovative Solution' award."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Get In Touch
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Feel free to reach out if you're looking for a developer, have a
                question, or just want to connect.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <a
                        href="mailto:example@email.com"
                        className="hover:text-primary transition-colors"
                      >
                        example@email.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Github className="h-5 w-5 text-primary" />
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        github.com/johndoe
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Linkedin className="h-5 w-5 text-primary" />
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        linkedin.com/in/johndoe
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">Resume</h3>
                  <p className="text-muted-foreground">
                    Download my resume to learn more about my education, skills,
                    and experiences.
                  </p>
                  <Button className="w-full mt-4" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Download Resume <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 border-t bg-muted/30">
        <div className="container max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a href="mailto:example@email.com" aria-label="Email Me">
              <Mail className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

const ExperienceCard = ({
  title,
  company,
  period,
  description,
}: ExperienceCardProps) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-primary font-medium">{company}</p>
          <p className="text-sm text-muted-foreground">{period}</p>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default Home;
