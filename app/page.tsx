"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Image from "next/image";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import {
  BookOpen,
  Download,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Lock,
  Mail,
  MapPin,
  Menu,
  Server,
  X,
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
  workPrinciples,
  type Project,
  type ProjectLink,
  type Tech,
} from "@/constants/static-list";

const RESUME_PATH = "/documents/madan-ghimire-resume.pdf";
const EMAIL = "madanghimire.dev@gmail.com";
const GITHUB = "https://github.com/madan-ghimire";
const LINKEDIN = "https://www.linkedin.com/in/madan-ghimire-21416a143/";
const NAV = ["about", "skills", "projects", "contact"] as const;

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

/* ---------------- Header ---------------- */

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="relative z-50 shrink-0 border-b bg-background">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a
          href="#top"
          className="text-xl font-bold"
          onClick={() => setOpen(false)}
        >
          MG
        </a>

        <nav className="flex items-center gap-3 sm:gap-6" aria-label="Main">
          <ul className="hidden gap-6 text-sm text-muted-foreground sm:flex">
            {NAV.map((id) => (
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
          <Button
            variant="ghost"
            size="icon"
            className="sm:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="absolute inset-x-0 top-full border-b bg-background shadow-lg sm:hidden"
          >
            <ul className="container mx-auto flex flex-col px-4 py-2">
              {NAV.map((id) => (
                <li key={id} className="border-b last:border-b-0">
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className="block py-3.5 text-base font-medium capitalize"
                  >
                    {id}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ---------------- Skills ---------------- */

function SkillTile({ tech }: { tech: Tech }) {
  const Icon = tech.icon;
  const glow = tech.color === "currentColor" ? "#71717a" : tech.color;
  return (
    <li
      style={{ "--c": glow } as CSSProperties}
      className="group flex min-w-0 flex-col items-center justify-start gap-2 rounded-xl border bg-card px-1.5 py-3 text-center text-[11px] font-medium transition duration-200 hover:border-(--c) hover:shadow-[0_10px_28px_-10px_var(--c)] motion-safe:hover:-translate-y-1.5 sm:gap-2.5 sm:px-2 sm:py-4 sm:text-xs"
    >
      <Icon
        className="h-7 w-7 shrink-0 transition-transform duration-200 motion-safe:group-hover:-rotate-6 motion-safe:group-hover:scale-125 sm:h-8 sm:w-8"
        style={{ color: tech.color }}
      />
      <span className="wrap-break-word leading-tight">{tech.name}</span>
    </li>
  );
}

function FilterTabs<T extends string>({
  items,
  active,
  onChange,
  label,
}: {
  items: readonly T[];
  active: T;
  onChange: (v: T) => void;
  label: string;
}) {
  return (
    <div
      className="mb-6 flex flex-wrap gap-1.5 sm:mb-8 sm:gap-2"
      role="tablist"
      aria-label={label}
    >
      {items.map((c) => (
        <Button
          key={c}
          size="sm"
          role="tab"
          className="h-8 px-3 text-xs sm:h-9 sm:px-4 sm:text-sm"
          aria-selected={active === c}
          variant={active === c ? "default" : "outline"}
          onClick={() => onChange(c)}
        >
          {c}
        </Button>
      ))}
    </div>
  );
}

function Skills() {
  const [active, setActive] = useState("All");
  const groups =
    active === "All" ? skills : skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="scroll-mt-20 px-4 py-12 md:py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-2 text-2xl font-bold sm:text-3xl">
          Skills & technologies
        </h2>
        <p className="mb-6 max-w-xl text-sm text-muted-foreground sm:mb-8 sm:text-base">
          The tools and practices I use across frontend, backend, security,
          cloud and AI-assisted development.
        </p>

        <FilterTabs
          items={["All", ...skills.map((s) => s.category)]}
          active={active}
          onChange={setActive}
          label="Skill groups"
        />

        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="space-y-6 sm:space-y-8"
        >
          {groups.map((g) => (
            <div key={g.category}>
              <h3 className="mb-3 text-sm font-semibold text-muted-foreground">
                {g.category}
              </h3>
              <ul className="grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3 md:grid-cols-5 lg:grid-cols-7">
                {g.items.map((t) => (
                  <SkillTile key={t.name} tech={t} />
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <div className="mt-10 sm:mt-12">
          <h3 className="mb-3 text-sm font-semibold text-muted-foreground">
            How I work
          </h3>

          <ul className="mb-5 grid gap-3 sm:mb-6 sm:grid-cols-2">
            {workPrinciples.map(({ title, text, icon: Icon }) => (
              <li
                key={title}
                className="rounded-xl border bg-card p-3.5 sm:p-4"
              >
                <div className="mb-2 flex items-center gap-2.5">
                  <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  <h4 className="font-semibold">{title}</h4>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </li>
            ))}
          </ul>

          <ul className="flex flex-wrap gap-1.5 sm:gap-2">
            {softSkills.map((s) => (
              <li
                key={s}
                className="rounded-md border bg-muted/50 px-2.5 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm"
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

function ProjectCard({ p }: { p: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.25 }}
      className="rounded-xl border bg-card p-5 shadow-sm sm:p-8"
    >
      {/* Title + category */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
          {p.title}
        </h3>
        <span
          className="rounded-md px-2.5 py-1 font-mono text-xs font-medium"
          style={{ backgroundColor: `${p.accent}1F`, color: p.accent }}
        >
          {p.category}
        </span>
      </div>

      <p className="mt-3 leading-relaxed text-muted-foreground">{p.summary}</p>

      {/* Highlights */}
      <div className="mt-5 border-t pt-5">
        <h4 className="mb-3 text-sm font-semibold">Highlights:</h4>
        <ul className="space-y-2 text-sm leading-relaxed">
          {p.highlights.map((h) => (
            <li key={h} className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: p.accent }}
              />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech */}
      <ul
        className="mt-5 flex flex-wrap gap-2 border-t pt-5"
        aria-label="Technologies used"
      >
        {p.tech.map((t) => (
          <li
            key={t.name}
            className="rounded-md bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground"
          >
            {t.name}
          </li>
        ))}
      </ul>

      {/* Links */}
      <div className="mt-5 flex flex-wrap items-center gap-2">
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
            <Lock className="h-3.5 w-3.5" /> Private project (company code)
          </p>
        )}
      </div>
    </motion.article>
  );
}

function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All");
  const list =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-muted/50 px-4 py-16 md:py-20"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="mb-2 text-3xl font-bold">Projects</h2>
        <p className="mb-8 max-w-xl text-muted-foreground">
          Products I have built across fintech, aviation, real estate and
          education.
        </p>

        <FilterTabs
          items={projectFilters}
          active={filter}
          onChange={setFilter}
          label="Project type"
        />

        <div className="flex flex-col gap-6">
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
        <Header />

        <div className="flex-1 overflow-y-auto scroll-smooth">
          {/* Hero */}
          <section id="top" className="px-4 pb-14 pt-10 md:pb-16 md:pt-20">
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

              <div className="text-center md:text-left">
                <motion.h1
                  variants={heroChild}
                  className="text-4xl font-bold tracking-tight md:text-6xl"
                >
                  Madan Ghimire
                </motion.h1>
                <motion.p
                  variants={heroChild}
                  className="mt-2 text-xl font-medium md:text-2xl"
                >
                  Full Stack Software Developer
                </motion.p>
                <motion.p
                  variants={heroChild}
                  className="mt-2 flex items-center justify-center gap-1.5 text-sm text-muted-foreground md:justify-start"
                >
                  <MapPin className="h-4 w-4" /> Lalitpur, Nepal
                </motion.p>
                <motion.p
                  variants={heroChild}
                  className="mb-8 mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
                >
                  5+ years building scalable web applications with React,
                  Next.js, TypeScript and Node.js. I design frontend and backend
                  systems with clean, object-oriented architecture, build REST
                  APIs with Prisma ORM and PostgreSQL, and secure them with
                  validation, sanitization and access control. I ship with
                  Docker and GitHub Actions CI/CD on AWS, and use AI tools to
                  automate repetitive work and deliver faster.
                </motion.p>

                <motion.div
                  variants={heroChild}
                  className="flex flex-wrap justify-center gap-3 md:justify-start"
                >
                  <Button asChild>
                    <a href={`mailto:${EMAIL}`}>
                      <Mail className="mr-2 h-4 w-4" />
                      Contact me
                    </a>
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">
                        <FileText className="mr-2 h-4 w-4" />
                        Resume
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
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href={RESUME_PATH}
                      download
                      aria-label="Download resume"
                      title="Download resume"
                    >
                      <Download className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href={GITHUB}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      title="GitHub"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href={LINKEDIN}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      title="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* About */}
          <section id="about" className="scroll-mt-20 bg-muted/50 px-4 py-16">
            <div className="container mx-auto max-w-4xl space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              <h2 className="mb-6 text-3xl font-bold text-foreground">
                About me
              </h2>
              <p>
                I&apos;m a detail-oriented engineer who is comfortable on both
                sides of the stack. I specialize in frontend architecture with
                React and Next.js, and build the REST APIs behind it with
                Node.js, Express.js, Prisma ORM and PostgreSQL. I apply
                object-oriented principles and clean architecture, and think
                through system design on both the frontend and the backend
                before I write code.
              </p>
              <p>
                Security is part of the design, not an afterthought: I validate
                and sanitize input, enforce access with JWT, role-based access
                and data-layer policies, and keep secrets out of code.
              </p>
              <p>
                I deploy containerized apps on Ubuntu servers on AWS EC2, with
                RDS and S3 under least-privilege IAM access, and GitHub Actions
                pipelines that build Docker images and roll them out
                automatically. I use AI tools to take over repetitive and manual
                tasks such as boilerplate, tests and docs, then review the
                result myself. That lets me ship quickly without lowering the
                bar on clean, secure, scalable and maintainable code.
              </p>
            </div>
          </section>

          <Skills />
          <Projects />

          {/* Contact */}
          <section id="contact" className="scroll-mt-20 px-4 py-16 md:py-20">
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
