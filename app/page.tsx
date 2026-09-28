"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import {
  BookOpen,
  Check,
  Download,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Lock,
  Mail,
  MapPin,
  Server,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ModeToggle } from "@/components/mode-toggle";
import BackToTopButton from "@/components/back-to-top-button";
import ContactForm from "@/components/contact-form";
import {
  projectFilters,
  projects,
  skills,
  softSkills,
  type Project,
  type ProjectLink,
  type Tech,
} from "@/constants/static-list";

const RESUME_PATH = "/documents/madan-ghimire-resume.pdf";
const EMAIL = "madanghimire.dev@gmail.com";
const GITHUB = "https://github.com/madan-ghimire";
const LINKEDIN = "https://www.linkedin.com/in/madan-ghimire-21416a143/";

// Hero: the one orchestrated entrance on the page
const heroParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const heroChild = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const linkIcon: Record<ProjectLink["kind"], typeof ExternalLink> = {
  live: ExternalLink,
  api: Server,
  docs: BookOpen,
  code: Github,
};

/* ---------------- Skills ---------------- */

function SkillTile({ tech }: { tech: Tech }) {
  const Icon = tech.icon;
  const glow = tech.color === "currentColor" ? "#71717a" : tech.color;
  return (
    <li
      style={{ "--c": glow } as CSSProperties}
      className="group flex flex-col items-center gap-2.5 rounded-xl border bg-card px-2 py-4 text-center text-xs font-medium transition duration-200 hover:border-(--c) hover:shadow-[0_10px_28px_-10px_var(--c)] motion-safe:hover:-translate-y-1.5"
    >
      <Icon
        className="h-8 w-8 transition-transform duration-200 motion-safe:group-hover:-rotate-6 motion-safe:group-hover:scale-125"
        style={{ color: tech.color }}
      />
      <span className="leading-tight">{tech.name}</span>
    </li>
  );
}

function Skills() {
  const [active, setActive] = useState("All");
  const groups =
    active === "All" ? skills : skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="scroll-mt-20 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-2 text-3xl font-bold">Skills & technologies</h2>
        <p className="mb-8 max-w-xl text-muted-foreground">
          The tools I reach for across the frontend, backend and cloud. Hover an
          icon, or pick a group.
        </p>

        <div
          className="mb-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Skill groups"
        >
          {["All", ...skills.map((s) => s.category)].map((c) => (
            <Button
              key={c}
              size="sm"
              role="tab"
              aria-selected={active === c}
              variant={active === c ? "default" : "outline"}
              onClick={() => setActive(c)}
            >
              {c}
            </Button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="space-y-8"
        >
          {groups.map((g) => (
            <div key={g.category}>
              <h3 className="mb-3 text-sm font-semibold text-muted-foreground">
                {g.category}
              </h3>
              <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7">
                {g.items.map((t) => (
                  <SkillTile key={t.name} tech={t} />
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <div className="mt-12">
          <h3 className="mb-3 text-sm font-semibold text-muted-foreground">
            How I work
          </h3>
          <ul className="flex flex-wrap gap-2">
            {softSkills.map((s) => (
              <li
                key={s}
                className="rounded-md border bg-muted/50 px-3 py-1.5 text-sm"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Projects ---------------- */

function TechChip({ tech }: { tech: Tech }) {
  const Icon = tech.icon;
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border bg-background px-2 py-1 text-xs transition-transform motion-safe:hover:scale-105">
      <Icon className="h-3.5 w-3.5" style={{ color: tech.color }} />
      {tech.name}
    </span>
  );
}

function ProjectCard({ p }: { p: Project }) {
  const Icon = p.icon;
  const visible = p.featured ? p.tech : p.tech.slice(0, 6);
  const hidden = p.tech.length - visible.length;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.25 }}
      className={`group flex flex-col overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow duration-200 hover:shadow-xl ${
        p.featured ? "md:col-span-2 xl:col-span-3 md:flex-row" : ""
      }`}
    >
      <div
        className={`flex items-center justify-between p-5 ${
          p.featured
            ? "md:w-64 md:shrink-0 md:flex-col md:items-start md:justify-between md:p-6"
            : ""
        }`}
        style={{
          backgroundColor: `${p.accent}14`,
          borderBottom: `3px solid ${p.accent}`,
        }}
      >
        <span
          className="flex h-12 w-12 items-center justify-center rounded-lg text-white transition-transform duration-200 motion-safe:group-hover:-rotate-6 motion-safe:group-hover:scale-110"
          style={{ backgroundColor: p.accent }}
        >
          <Icon className="h-6 w-6" />
        </span>
        <span className="rounded-md bg-background/80 px-2 py-0.5 text-xs font-medium">
          {p.featured ? `Featured · ${p.category}` : p.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="text-xl font-semibold">{p.title}</h3>
          <p className="mt-1.5 text-muted-foreground">{p.summary}</p>
        </div>

        <ul className="space-y-1.5 text-sm">
          {p.highlights.map((h) => (
            <li key={h} className="flex gap-2">
              <Check
                className="mt-0.5 h-4 w-4 shrink-0"
                style={{ color: p.accent }}
              />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {visible.map((t) => (
            <TechChip key={t.name} tech={t} />
          ))}
          {hidden > 0 && (
            <span
              className="inline-flex items-center rounded-md border border-dashed px-2 py-1 text-xs text-muted-foreground"
              title={p.tech
                .slice(visible.length)
                .map((t) => t.name)
                .join(", ")}
            >
              +{hidden} more
            </span>
          )}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
          {p.links.length > 0 ? (
            p.links.map((l, i) => {
              const LIcon = linkIcon[l.kind];
              return (
                <Button
                  key={l.href}
                  asChild
                  size="sm"
                  variant={i === 0 ? "default" : "outline"}
                >
                  <a href={l.href} target="_blank" rel="noopener noreferrer">
                    <LIcon className="mr-2 h-4 w-4" />
                    {l.label}
                  </a>
                </Button>
              );
            })
          ) : (
            <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Lock className="h-3.5 w-3.5" /> No public link yet
            </p>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All");
  const list =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="scroll-mt-20 bg-muted/50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-2 text-3xl font-bold">Projects</h2>
        <p className="mb-8 max-w-xl text-muted-foreground">
          Products I have built across fintech, aviation, real estate and
          education.
        </p>

        <div
          className="mb-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Project type"
        >
          {projectFilters.map((f) => (
            <Button
              key={f}
              size="sm"
              role="tab"
              aria-selected={filter === f}
              variant={filter === f ? "default" : "outline"}
              onClick={() => setFilter(f)}
            >
              {f}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Page ---------------- */

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="flex h-screen flex-col bg-background">
        {/* <header className="fixed z-50 w-full border-b bg-background/80 backdrop-blur-sm"> */}
        <header className="z-50 shrink-0 border-b bg-background">
          <div className="container mx-auto flex items-center justify-between px-4 py-4">
            <a href="#top" className="text-xl font-bold">
              MG
            </a>
            <nav className="flex items-center gap-6">
              <ul className="hidden gap-6 text-sm text-muted-foreground sm:flex">
                {["about", "skills", "projects", "contact"].map((id) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="capitalize transition-colors hover:text-foreground"
                    >
                      {id}
                    </a>
                  </li>
                ))}
              </ul>
              <ModeToggle />
            </nav>
          </div>
        </header>

        {/* Hero */}
        <div className="flex-1 overflow-y-auto scroll-smooth">
          <section id="top" className="px-4 pb-16 pt-32">
            <motion.div
              className="container mx-auto flex max-w-4xl flex-col items-center gap-8 md:flex-row md:items-start"
              variants={heroParent}
              initial="hidden"
              animate="show"
            >
              <motion.div
                variants={heroChild}
                className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full border-4 border-primary/20 md:h-60 md:w-48"
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
                  variants={heroChild}
                  className="mb-3 text-4xl font-bold md:text-6xl"
                >
                  Hi, I&apos;m Madan Ghimire
                </motion.h1>
                <motion.p
                  variants={heroChild}
                  className="mb-1 flex items-center gap-1.5 text-sm text-muted-foreground"
                >
                  <MapPin className="h-4 w-4" /> Lalitpur, Nepal
                </motion.p>
                <motion.p
                  variants={heroChild}
                  className="mb-8 mt-4 text-lg leading-snug tracking-tight text-muted-foreground md:text-xl"
                >
                  Full Stack Software Engineer with 5+ years of experience
                  building scalable, high-performance web apps with React,
                  Next.js, TypeScript, Node.js and Express.js. I design frontend
                  architecture (SSR/SSG/ISR/PPR), build REST APIs with Prisma
                  ORM and PostgreSQL, and deploy on AWS (EC2, RDS, S3, IAM)
                  using Docker and GitHub Actions CI/CD. Adaptable, and focused
                  on clean, secure, scalable and maintainable code.
                </motion.p>

                <motion.div
                  variants={heroChild}
                  className="flex flex-wrap gap-3"
                >
                  <Button asChild>
                    <a href={`mailto:${EMAIL}`}>
                      <Mail className="mr-2 h-4 w-4" />
                      Contact me
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={GITHUB} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a
                      href={LINKEDIN}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">
                        <FileText className="mr-2 h-4 w-4" />
                        Preview resume
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="flex h-[92vh] w-[95vw] flex-col gap-0 overflow-hidden p-0 sm:max-w-5xl">
                      <DialogHeader className="px-4 pb-2 pt-4">
                        <DialogTitle>Resume preview</DialogTitle>
                      </DialogHeader>
                      <iframe
                        src={`${RESUME_PATH}#view=FitH`}
                        className="w-full flex-1 border-t"
                        title="Resume preview"
                      />
                    </DialogContent>
                  </Dialog>
                  <Button variant="secondary" asChild>
                    <a href={RESUME_PATH} download>
                      <Download className="mr-2 h-4 w-4" />
                      Download resume
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* About */}
          <section id="about" className="scroll-mt-20 bg-muted/50 px-4 py-16">
            <div className="container mx-auto max-w-4xl space-y-4 text-lg text-muted-foreground">
              <h2 className="mb-6 text-3xl font-bold text-foreground">
                About me
              </h2>
              <p>
                I&apos;m a detail-oriented, solution-driven engineer who is
                comfortable on both sides of the stack. I specialize in frontend
                architecture with React and Next.js (SSR, SSG, ISR, PPR), and I
                build the REST APIs behind it with Node.js, Express.js, Prisma
                ORM and PostgreSQL.
              </p>
              <p>
                I deploy what I build: Linux servers on AWS EC2, RDS and S3 with
                IAM access control, and GitHub Actions pipelines that build
                Docker images and roll them out automatically. I care about
                clean, secure, scalable and maintainable code, and I enjoy
                mentoring other developers.
              </p>
            </div>
          </section>

          <Skills />
          <Projects />

          {/* Contact */}
          {/* <section id="contact" className="scroll-mt-20 px-4 py-20">
            <div className="container mx-auto max-w-4xl text-center">
              <h2 className="mb-3 text-3xl font-bold">
                Let&apos;s work together
              </h2>
              <p className="mb-8 text-muted-foreground">
                Have a product to build or a team to join? Send me a message.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button asChild>
                  <a href={`mailto:${EMAIL}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    {EMAIL}
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </section> */}

          {/* Contact */}
          <section id="contact" className="scroll-mt-20 px-4 py-20">
            <div className="container mx-auto max-w-3xl">
              <h2 className="mb-3 text-center text-3xl font-bold">
                Let&apos;s work together
              </h2>
              <p className="mb-8 text-center text-muted-foreground">
                Have a product to build or a team to join? Send me a message.
              </p>

              <ContactForm />

              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Button variant="outline" asChild>
                  <a href={`mailto:${EMAIL}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    {EMAIL}
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </section>

          <footer className="border-t py-8">
            <div className="container mx-auto max-w-4xl px-4 text-center text-muted-foreground">
              © {new Date().getFullYear()} Madan Ghimire. All rights reserved.
            </div>
            <BackToTopButton />
          </footer>
        </div>
      </main>
    </MotionConfig>
  );
}
