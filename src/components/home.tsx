import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import Typewriter from "./typewriter";
import AnimatedStack from "./AnimatedStack";
import ImageCarousel from "./ImageCarousel";
import TimelineCard from "./TimelineCard";

// Create a context for the shared timer
export const TimerContext = React.createContext<number>(0);

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-50 bg-background flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1.2, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-primary text-4xl font-bold"
      >
        EQ
      </motion.div>
    </motion.div>
  );
};

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isGradientMounted, setIsGradientMounted] = useState(false);
  const [timerCount, setTimerCount] = useState(0);

  useEffect(() => {
    // First, wait a bit before starting to load the gradient
    const gradientTimer = setTimeout(() => {
      setIsGradientMounted(true);
    }, 500);

    // Then, wait a bit longer before removing the loading screen
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const timer = setInterval(() => {
      setTimerCount(prev => prev + 1);
    }, 5000);

    return () => {
      clearTimeout(gradientTimer);
      clearTimeout(loadingTimer);
      clearInterval(timer);
    };
  }, []);

  return (
    <TimerContext.Provider value={timerCount}>
      <div className="min-h-screen bg-background relative">
        <AnimatePresence mode="wait">
          {isLoading && <LoadingScreen />}
        </AnimatePresence>

        <div className="fixed inset-0 z-0">
          <AnimatePresence>
            {isGradientMounted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-full h-full"
              >
                <ShaderGradientCanvas className="w-full h-full">
                  <ShaderGradient
                    type="waterPlane"
                    animate="on"
                    color1="#f0b0c9"
                    color2="#eb7143"
                    color3="#f3a851"
                    brightness={1.2}
                    grain="off"
                    lightType="3d"
                    uSpeed={0.2}
                    uStrength={4}
                    uDensity={1.3}
                    uFrequency={5.5}
                    uAmplitude={0}
                    positionX={-1.4}
                    positionY={0}
                    positionZ={0}
                    rotationX={0}
                    rotationY={10}
                    rotationZ={50}
                    reflection={0.1}
                    wireframe={false}
                    shader="defaults"
                    cAzimuthAngle={180}
                    cPolarAngle={90}
                    cDistance={3.6}
                    envPreset="city"
                  />
                </ShaderGradientCanvas>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="relative z-10">
          <Navbar />

          {/* Hero Section */}
          <section
            id="home"
            className="min-h-screen flex items-center justify-center px-4"
          >
            <div className="container max-w-4xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-0"
              >
                <div className="space-y-0 text-white">
                  <div className="flex items-center justify-center gap-1 mb-[-2px]">
                    <Typewriter />
                    <h2 className="text-xl md:text-[30px] font-roboto font-[550]">
                     my name is
                    </h2>
                  </div>
                  <h1 className="text-[90px] md:text-[120px] font-['The_Seasons'] -mt-6 leading-[1.2]">
                    Elyssa Qi
                  </h1>
                  <div className="-mt-20 space-y-1">
                    <h2 className="text-xl md:text-[25px] font-roboto font-[570]">
                      Systems Design Engineering Student
                    </h2>
                    <h2 className="text-xl md:text-[25px] font-roboto font-[570] -mt-2">
                      at the University of Waterloo
                    </h2>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* About Me Section */}
          <section id="about" className="py-20 px-4">
            <div className="container max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                <h1 className="text-7xl md:text-6xl font-[600] text-white text-center mb-16">
                  About Me
                </h1>
                
                <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div className="w-full aspect-[4/3]">
                    <ImageCarousel />
                  </div>
                  
                  <div className="space-y-8">
                    <div className="flex items-center gap-2">
                      <h2 className="text-3xl md:text-4xl text-white font-roboto font-[550] flex items-center gap-1 items-center">
                        👋 Hello, I'm <AnimatedStack />
                      </h2>
                    </div>
                    <p className="text-2xl text-white/80 font-roboto font-[350] leading-relaxed">
                      Currently a first year engineering student at the University of Waterloo.
                      I am passionate about building at the intersection of Software and Design.
                      My hobbies include playing volleyball, trying new food, and spending time
                      with family & friends.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-20 px-4">
            <div className="container max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                <h1 className="text-7xl md:text-6xl font-[600] text-white text-center mb-16">
                  Work Experience
                </h1>

                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-white/30" />
                  
                  {/* Timeline content */}
                  <div className="relative">
                    <TimelineCard
                      title="Waterloo Rocketry"
                      role="Software Developer"
                      period="February 2025 - Present"
                      description="Worked on various AI/ML regression projects using Pandas, NumPy, Matplotlib, and Scikit-learn, including an email spam classifier that utilized NLP-based preprocessing (TF-IDF) for a web app."
                      isLeft={false}
                      index={0}
                    />
                    <TimelineCard
                      title="University of Waterloo"
                      role="Undergraduate Research Assistant"
                      period="January 2025 - Present"
                      description="Worked as a teaching assistant in a secondary school Java programming classroom, explaining various programming concepts ranging from basic printing to arrays and object-oriented programming."
                      isLeft={true}
                      index={1}
                    />
                    <TimelineCard
                      title="Dima Technology Inc."
                      role="Software Engineer Intern"
                      period="January 2025 - April 2025"
                      description="Collaborated with law enforcement professionals on community outreach initiatives and youth engagement programs."
                      isLeft={false}
                      index={2}
                    />
                    <TimelineCard
                      title="Markham Mayor's Youth Council"
                      role="Project Manager & Marketing Coordinator"
                      period="September 2020 - May 2024"
                      description="First-year Systems Design Engineering student focusing on the intersection of software development, design thinking, and engineering principles."
                      isLeft={true}
                      index={3}
                    />
                  </div>
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
                <h1 className="text-7xl md:text-6xl font-[600] text-white text-center mb-16">
                  Get In Touch
                </h1>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Social Links and Resume */}
                  <div className="space-y-8">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
                      <Button className="w-full text-lg py-6" asChild>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                          Download Resume <ExternalLink className="h-5 w-5" />
                        </a>
                      </Button>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] space-y-4">
                      <h3 className="text-xl font-semibold text-white">Connect With Me</h3>
                      <div className="space-y-4">
                        <a
                          href="mailto:elyssaqi314@gmail.com"
                          className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                        >
                          <Mail className="h-5 w-5" />
                          <span>elyssaqi314@gmail.com</span>
                        </a>
                        <a
                          href="https://github.com/elyssa-qi"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                        >
                          <Github className="h-5 w-5" />
                          <span>github.com/elyssa-qi</span>
                        </a>
                        <a
                          href="https://linkedin.com/in/elyssa-qi"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                        >
                          <Linkedin className="h-5 w-5" />
                          <span>linkedin.com/in/elyssa-qi</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
                    <form className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-lg text-white mb-2">Name</label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-lg text-white mb-2">Email</label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                          placeholder="Your email"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-lg text-white mb-2">Message</label>
                        <textarea
                          id="message"
                          rows={8}
                          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 resize-none"
                          placeholder="Your message"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-3 px-6 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-6 px-4">
            <div className="container max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-white">
                  {new Date().getFullYear()} © Elyssa Qi
                </p>
                <div className="flex gap-4 mt-4 md:mt-0">
                  <a
                    href="https://github.com/elyssa-qi"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-5 w-5 text-white/80 hover:text-white transition-colors" />
                  </a>
                  <a
                    href="https://linkedin.com/in/elyssa-qi"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-5 w-5 text-white/80 hover:text-white transition-colors" />
                  </a>
                  <a 
                    href="mailto:elyssaqi314@gmail.com" 
                    aria-label="Email Me"
                  >
                    <Mail className="h-5 w-5 text-white/80 hover:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </TimerContext.Provider>
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
