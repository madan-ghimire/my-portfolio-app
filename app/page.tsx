"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  MoonIcon,
  SunIcon,
  Download,
  FileText,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTheme } from "next-themes";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const resumePath = "/documents/madan-ghimire.pdf";

  const projects = [
    {
      title: "Dynamic Web Application",
      description:
        "A dynamic web app built with React.js, Next.js, and Tailwind CSS, featuring advanced state management with Redux.",
      tech: ["React.js", "Next.js", "Redux", "Tailwind CSS"],
    },
    {
      title: "Robust Backend System",
      description:
        "A robust backend system using Node.js, Express.js, and Prisma ORM for efficient database interactions.",
      tech: ["Node.js", "Express.js", "Prisma ORM", "JWT Auth"],
    },
    {
      title: "SaaS Platform",
      description:
        "A full-stack SaaS platform with an intuitive UI using Ant Design and MUI, backed by a scalable API.",
      tech: ["React.js", "Ant Design", "Material-UI", "Node.js"],
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: [
        "React.js",
        "Next.js",
        "Kendo React",
        "Ant Design",
        "Material-UI",
        "Redux",
        "SCSS",
        "Playwright Automation",
        "Storybook",
        "Tailwind CSS",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "Prisma ORM",
        "TypeScript",
        "Nest.js",
        "OOP",
        "Next Auth",
        "JWT AUTH",
        "Swagger Documentation",
      ],
    },
    {
      category: "State Management",
      items: ["Redux", "TanStack Query", "Redux toolkit", "Zustand"],
    },
  ];

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardHover = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const buttonHover = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    tap: { scale: 0.95 },
  };

  return (
    <main className="min-h-screen bg-background">
      <motion.nav
        className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1
            className="text-xl font-bold"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            MG
          </motion.h1>
          <div className="flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                aria-label="Toggle theme"
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section with Profile Image */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <motion.div
              className="w-40 h-40 md:w-48 md:h-60 cursor-pointer relative rounded-full overflow-hidden border-4 border-primary/20 flex-shrink-0"
              initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05, rotate: 5 }}
            >
              <Image
                src="/profile.jpg"
                alt="Madan Ghimire"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
            <div>
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Hi, I&apos;m Madan Ghimire 👋
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-muted-foreground mb-8 text-justify tracking-tight leading-snug"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                A passionate Full-Stack Software Developer from Lalitpur, Nepal
                with extensive experience in building scalable, high-performance
                web applications. I specialize in crafting elegant user
                interfaces and robust backend systems using modern web
                technologies. Let&apos;s create something amazing together! 🚀
              </motion.p>
              <motion.div
                className="flex gap-4 flex-wrap"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.div
                  variants={buttonHover}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button asChild>
                    <a href="mailto:your.email@example.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Contact Me
                    </a>
                  </Button>
                </motion.div>
                <motion.div
                  variants={buttonHover}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button variant="outline" asChild>
                    <a
                      href="https://github.com/madan-ghimire"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </motion.div>
                <motion.div
                  variants={buttonHover}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button variant="outline" asChild>
                    <a
                      href="https://www.linkedin.com/in/madan-ghimire-21416a143/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      Linkedin
                    </a>
                  </Button>
                </motion.div>
                <Dialog>
                  <DialogTrigger asChild>
                    <motion.div
                      variants={buttonHover}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <Button variant="outline" className="cursor-pointer">
                        <FileText className="mr-2 h-4 w-4" />
                        Preview Resume
                      </Button>
                    </motion.div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 overflow-hidden">
                    <DialogHeader className="px-4 pt-4 pb-2">
                      <DialogTitle>Resume Preview</DialogTitle>
                    </DialogHeader>
                    <iframe
                      src={`${resumePath}#view=FitH`}
                      className="w-full h-[80vh] border-t"
                      title="Resume Preview"
                      onError={(e) => {
                        console.error("Resume preview failed", e);
                      }}
                    />
                  </DialogContent>
                </Dialog>
                <motion.div
                  variants={buttonHover}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button variant="secondary" asChild>
                    <a href="/documents/madan-ghimire.pdf" download>
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        className="py-16 bg-muted/50 px-4"
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            className="text-3xl font-bold mb-8"
            {...fadeInUp}
            whileInView="animate"
            initial="initial"
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="space-y-4 text-lg text-muted-foreground text-justify"
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            <motion.p variants={fadeInLeft}>
              I am a detail-oriented and solution-driven developer, experienced
              in both frontend and backend development. With a deep
              understanding of React.js, Next.js, and Node.js, I build
              intuitive, high-performing, and scalable applications. My
              expertise in Prisma ORM, Express.js, and TypeScript ensures that
              the backend is as solid as the frontend experience.
            </motion.p>
            <motion.p
              className="tracking-tight leading-snug"
              variants={fadeInRight}
            >
              I am passionate about clean code, responsive design, and
              optimizing user experience. Whether it&apos;s designing
              pixel-perfect UI components or implementing complex business
              logic, I thrive in solving challenging problems.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="py-16 px-4"
        id="skills"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            className="text-3xl font-bold mb-8"
            {...fadeInUp}
            whileInView="animate"
            initial="initial"
            viewport={{ once: true }}
          >
            Skills & Technologies
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                variants={fadeInUp}
                whileHover="hover"
                custom={index}
              >
                <motion.div variants={cardHover}>
                  <Card className="p-6 h-80 flex flex-col cursor-pointer">
                    <h3 className="text-xl font-semibold mb-4">
                      {skill.category}
                    </h3>
                    <div className="flex flex-wrap gap-2 flex-1">
                      {skill.items.map((item, itemIndex) => (
                        <motion.span
                          key={item}
                          className="px-3 py-1 bg-primary/10 rounded-full text-sm h-fit"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: itemIndex * 0.1, duration: 0.3 }}
                          whileHover={{ scale: 1.1 }}
                          viewport={{ once: true }}
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className="py-16 bg-muted/50 px-4"
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            className="text-3xl font-bold mb-8"
            {...fadeInUp}
            whileInView="animate"
            initial="initial"
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                whileHover="hover"
                custom={index}
              >
                <motion.div variants={cardHover}>
                  <Card className="p-6 h-80 cursor-pointer flex flex-col">
                    <h3 className="text-xl font-semibold mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-2 py-1 bg-primary/10 rounded-full text-xs h-fit"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.1, duration: 0.3 }}
                          whileHover={{ scale: 1.1 }}
                          viewport={{ once: true }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="py-16 px-4"
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2
            className="text-3xl font-bold mb-8"
            {...fadeInUp}
            whileInView="animate"
            initial="initial"
            viewport={{ once: true }}
          >
            Let&apos;s Connect!
          </motion.h2>
          <motion.div
            className="flex justify-center gap-4"
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInLeft}>
              <motion.div
                variants={buttonHover}
                whileHover="hover"
                whileTap="tap"
              >
                <Button asChild>
                  <a href="mailto:madan.ghimiry@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </a>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div variants={fadeInRight}>
              <motion.div
                variants={buttonHover}
                whileHover="hover"
                whileTap="tap"
              >
                <Button variant="outline" asChild>
                  <a
                    href="https://www.linkedin.com/in/madan-ghimire-21416a143/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.footer
        className="py-8 border-t"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto max-w-4xl px-4 text-center text-muted-foreground">
          © {new Date().getFullYear()} Madan Ghimire. All rights reserved.
        </div>
      </motion.footer>
    </main>
  );
}
