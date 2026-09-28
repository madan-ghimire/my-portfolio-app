import type { ElementType } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiSass,
  SiStorybook,
  SiReactrouter,
  SiRedux,
  SiReactquery,
  SiNodedotjs,
  SiExpress,
  SiSwagger,
  SiRedis,
  SiSocketdotio,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
  SiPrisma,
  SiMongoose,
  SiLinux,
  SiDocker,
  SiGithubactions,
  SiNetlify,
  SiJsonwebtokens,
  SiMui,
  SiAntdesign,
  SiRadixui,
  SiStyledcomponents,
  SiGit,
  SiGithub,
  SiVite,
  SiWebpack,
  SiEslint,
  SiFigma,
  SiElasticsearch,
  SiCloudinary,
} from "react-icons/si";
import {
  Server,
  Database,
  HardDrive,
  ShieldCheck,
  Route,
  Sparkles,
  Layers,
  Zap,
  Webhook,
  Workflow,
  Container,
  KeyRound,
  LockKeyhole,
  Fingerprint,
  Blocks,
  Component as ComponentIcon,
  Drama,
  PawPrint,
  BarChart3,
  Mail,
  Building2,
  Plane,
  Landmark,
  CreditCard,
  HeartHandshake,
  FileText,
  MessageCircle,
  GraduationCap,
} from "lucide-react";

/* ---------- Tech catalogue (one place to edit icons/colors) ---------- */

export type Tech = { name: string; icon: ElementType; color: string };
const CC = "currentColor"; // brands that are black/white: follows light/dark theme

const defineTech = <T extends Record<string, Tech>>(t: T) => t;

export const tech = defineTech({
  react: { name: "React", icon: SiReact, color: "#61DAFB" },
  next: { name: "Next.js", icon: SiNextdotjs, color: CC },
  ts: { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  js: { name: "JavaScript (ES6+)", icon: SiJavascript, color: "#F7DF1E" },
  html: { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  tailwind: { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  tailwindVariants: {
    name: "Tailwind Variants",
    icon: Sparkles,
    color: "#38BDF8",
  },
  scss: { name: "SCSS", icon: SiSass, color: "#CC6699" },
  storybook: { name: "Storybook", icon: SiStorybook, color: "#FF4785" },
  reactRouter: {
    name: "React Router v7",
    icon: SiReactrouter,
    color: "#CA4245",
  },
  tanstackRouter: { name: "TanStack Router", icon: Route, color: "#F59E0B" },

  redux: { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
  reduxSaga: { name: "Redux Thunk", icon: SiRedux, color: "#999999" },
  zustand: { name: "Zustand", icon: Layers, color: "#A16207" },
  tanstackQuery: {
    name: "TanStack Query",
    icon: SiReactquery,
    color: "#FF4154",
  },
  context: { name: "React Context", icon: SiReact, color: "#61DAFB" },

  node: { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  express: { name: "Express.js", icon: SiExpress, color: CC },
  serverActions: { name: "Server Actions", icon: Zap, color: "#F59E0B" },
  rest: { name: "REST APIs", icon: Webhook, color: "#10B981" },
  swagger: { name: "Swagger", icon: SiSwagger, color: "#85EA2D" },
  redis: { name: "Redis", icon: SiRedis, color: "#DC382D" },
  bullmq: { name: "BullMQ", icon: Workflow, color: "#E11D48" },
  socketio: { name: "Socket.io", icon: SiSocketdotio, color: CC },
  nodemailer: { name: "Nodemailer", icon: Mail, color: "#22B573" },

  postgres: { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  mssql: { name: "MS SQL", icon: Database, color: "#CC2927" },
  mongodb: { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  supabase: { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  prisma: { name: "Prisma ORM", icon: SiPrisma, color: CC },
  mongoose: { name: "Mongoose", icon: SiMongoose, color: "#880000" },

  ec2: { name: "AWS EC2", icon: Server, color: "#FF9900" },
  rds: { name: "AWS RDS", icon: Database, color: "#527FFF" },
  s3: { name: "AWS S3", icon: HardDrive, color: "#569A31" },
  iam: { name: "AWS IAM", icon: ShieldCheck, color: "#DD344C" },
  linux: { name: "Linux (Ubuntu)", icon: SiLinux, color: "#FCC624" },
  docker: { name: "Docker", icon: SiDocker, color: "#2496ED" },
  dockerHub: { name: "Docker Hub", icon: Container, color: "#1D63ED" },
  githubActions: {
    name: "GitHub Actions CI/CD",
    icon: SiGithubactions,
    color: "#2088FF",
  },
  netlify: { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },

  nextauth: { name: "NextAuth", icon: KeyRound, color: "#A855F7" },
  jwt: { name: "JWT", icon: SiJsonwebtokens, color: "#D63AFF" },
  oauth: { name: "OAuth", icon: LockKeyhole, color: "#EB5424" },
  zenstack: { name: "ZenStack Policies", icon: Fingerprint, color: "#F59E0B" },

  mui: { name: "Material UI", icon: SiMui, color: "#007FFF" },
  kendo: { name: "Kendo React", icon: ComponentIcon, color: "#FF6358" },
  antd: { name: "Ant Design", icon: SiAntdesign, color: "#0170FE" },
  radix: { name: "Radix UI", icon: SiRadixui, color: CC },
  shadcn: { name: "Shadcn UI", icon: Blocks, color: CC },
  styled: {
    name: "Styled Components",
    icon: SiStyledcomponents,
    color: "#DB7093",
  },

  playwright: { name: "Playwright", icon: Drama, color: "#2EAD33" },
  git: { name: "Git", icon: SiGit, color: "#F05032" },
  github: { name: "GitHub", icon: SiGithub, color: CC },
  vite: { name: "Vite", icon: SiVite, color: "#646CFF" },
  webpack: { name: "Webpack", icon: SiWebpack, color: "#8DD6F9" },
  eslint: { name: "ESLint", icon: SiEslint, color: "#4B32C3" },
  husky: { name: "Husky", icon: PawPrint, color: "#F59E0B" },
  figma: { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  elasticsearch: {
    name: "Elasticsearch",
    icon: SiElasticsearch,
    color: "#00A9E5",
  },
  cloudinary: { name: "Cloudinary", icon: SiCloudinary, color: "#3448C5" },
  recharts: { name: "Recharts", icon: BarChart3, color: "#22B5BF" },
});

export type TechKey = keyof typeof tech;
const pick = (...keys: TechKey[]) => keys.map((k) => tech[k]);

/* ---------- Skills (same groups as the resume) ---------- */

export const skills = [
  {
    category: "Frontend",
    items: pick(
      "react",
      "next",
      "ts",
      "js",
      "html",
      "tailwind",
      "tailwindVariants",
      "scss",
      "storybook",
      "reactRouter",
      "tanstackRouter",
    ),
  },
  {
    category: "State management",
    items: pick("redux", "reduxSaga", "zustand", "tanstackQuery", "context"),
  },
  {
    category: "Backend & APIs",
    items: pick(
      "node",
      "express",
      "serverActions",
      "rest",
      "swagger",
      "redis",
      "bullmq",
      "socketio",
      "nodemailer",
    ),
  },
  {
    category: "Databases & ORM",
    items: pick(
      "postgres",
      "mssql",
      "mongodb",
      "supabase",
      "prisma",
      "mongoose",
    ),
  },
  {
    category: "Cloud & DevOps",
    items: pick(
      "ec2",
      "rds",
      "s3",
      "iam",
      "linux",
      "docker",
      "dockerHub",
      "githubActions",
    ),
  },
  { category: "Auth", items: pick("nextauth", "jwt", "oauth", "zenstack") },
  {
    category: "UI libraries",
    items: pick("mui", "kendo", "antd", "radix", "shadcn", "styled"),
  },
  {
    category: "Testing & tooling",
    items: pick(
      "playwright",
      "git",
      "github",
      "vite",
      "webpack",
      "eslint",
      "husky",
      "figma",
      "elasticsearch",
    ),
  },
];

export const softSkills = [
  "Problem solving & critical thinking",
  "Communication & collaboration",
  "Accountability & ownership",
  "Adaptability & continuous learning",
  "Attention to detail",
  "Time management & prioritization",
  "Creativity & innovation",
  "Clean, secure, scalable code",
];

/* ---------- Projects ---------- */

export type ProjectLink = {
  label: string;
  href: string;
  kind: "live" | "api" | "docs" | "code";
};
export type Project = {
  id: string;
  title: string;
  category: "Full Stack" | "Frontend" | "Backend";
  summary: string;
  highlights: string[];
  tech: Tech[];
  accent: string;
  icon: ElementType;
  featured?: boolean;
  links: ProjectLink[]; // add { label: "Code", href: "...", kind: "code" } for GitHub repos
};

export const projectFilters = [
  "All",
  "Full Stack",
  "Frontend",
  "Backend",
] as const;

export const projects: Project[] = [
  {
    id: "real-estate",
    title: "Multi-tenant real estate SaaS",
    category: "Full Stack",
    featured: true,
    accent: "#0D9488",
    icon: Building2,
    summary:
      "Property listings and tenant dashboards on a PERN stack. Every tenant's data is isolated, and the backend ships itself to AWS on each push.",
    highlights: [
      "Tenant-isolated PostgreSQL data with Prisma ORM v7, JWT auth and Nodemailer emails",
      "All endpoints documented with Swagger",
      "GitHub Actions builds a Docker image, pushes it to Docker Hub, then EC2 pulls it and restarts the container",
      "Ubuntu EC2 backend, RDS database, S3 file storage and IAM-scoped access; frontend on Netlify",
    ],
    tech: pick(
      "next",
      "react",
      "ts",
      "shadcn",
      "tailwind",
      "node",
      "express",
      "prisma",
      "postgres",
      "jwt",
      "swagger",
      "ec2",
      "rds",
      "s3",
      "iam",
      "linux",
      "docker",
      "dockerHub",
      "githubActions",
    ),
    links: [
      {
        label: "Live site",
        href: "https://realestatemdn.netlify.app/",
        kind: "live",
      },
      {
        label: "API",
        href: "https://madan-realestate-api.duckdns.org/",
        kind: "api",
      },
    ],
  },
  {
    id: "plm",
    title: "Materiel Insights: PLM dashboard",
    category: "Full Stack",
    accent: "#0284C7",
    icon: Plane,
    summary:
      "Aircraft management SaaS for aviation: lifecycle tracking, bills of materials, maintenance schedules and parts inventory.",
    highlights: [
      "Reusable components and customizable dashboards",
      "ZenStack, Prisma, Server Actions and TanStack Query for data",
      "Query tuning and memoization for scale",
    ],
    tech: pick(
      "next",
      "react",
      "kendo",
      "scss",
      "prisma",
      "postgres",
      "tanstackQuery",
      "zenstack",
    ),
    links: [],
  },
  {
    id: "banking",
    title: "RAPID API banking platform",
    category: "Frontend",
    accent: "#4F46E5",
    icon: Landmark,
    summary:
      "API banking platform that gives banks one secure, consent-driven integration point for their core banking and related systems. I build the frontend: reusable UI, dashboards and API integration.",
    highlights: [
      "Frontend integration of the RAPID API layer, where every flow follows customer consent, security and compliance rules",
      "Reusable UI interfaces and components on Radix UI, Tailwind and Tailwind Variants, shared across products",
      "Secure API integration using schema-based patterns for type-safe, validated data",
      "Type-safe routing with TanStack Router loaders and actions",
      "Real-time transaction and payment status dashboards, responsive and accessible",
    ],
    tech: pick(
      "tanstackRouter",
      "radix",
      "ts",
      "tailwind",
      "tailwindVariants",
      "rest",
    ),
    links: [],
  },

  {
    id: "smart-gateway",
    title: "Smart Gateway payments",
    category: "Frontend",
    accent: "#059669",
    icon: CreditCard,
    summary:
      "One API for eSewa, Khalti, Connect IPS and bank or card payments, with a merchant portal to follow every transaction.",
    highlights: [
      "Merchant admin portal with real-time payment status",
      "Recharts dashboards across all providers",
      "Secure REST payment workflows",
    ],
    tech: pick("react", "ts", "mui", "redux", "reduxSaga", "recharts"),
    links: [],
  },
  {
    id: "piiink",
    title: "Piiink community platform",
    category: "Frontend",
    accent: "#E11D48",
    icon: HeartHandshake,
    summary:
      "Customers shop with nearby merchants and each purchase supports a charity or club they choose.",
    highlights: [
      "Role-based dashboards",
      "Redux Toolkit + Saga state flow",
      "Pixel-perfect design implementation",
    ],
    tech: pick("react", "redux", "reduxSaga", "mui"),
    links: [],
  },
  {
    id: "blog-cms",
    title: "Blog CMS API",
    category: "Backend",
    accent: "#D97706",
    icon: FileText,
    summary:
      "Content management API with JWT auth, media uploads and an automated test-and-deploy pipeline.",
    highlights: [
      "Swagger docs for every endpoint",
      "Multer + Cloudinary uploads for images, PDFs and video",
      "GitHub Actions deploys to Render",
    ],
    tech: pick(
      "node",
      "express",
      "mongodb",
      "jwt",
      "swagger",
      "cloudinary",
      "githubActions",
    ),
    links: [
      {
        label: "API docs",
        href: "https://blog-cms-hn17.onrender.com/api-docs/",
        kind: "docs",
      },
    ],
  },
  {
    id: "chat",
    title: "Real-time chat app",
    category: "Full Stack",
    accent: "#7C3AED",
    icon: MessageCircle,
    summary: "Instant two-way messaging on the MERN stack with live presence.",
    highlights: [
      "Message delivery events over WebSockets",
      "Online/offline status and live updates",
    ],
    tech: pick("react", "node", "express", "mongodb", "socketio"),
    links: [],
  },
  {
    id: "ebidhya",
    title: "Ebidhya e-learning",
    category: "Frontend",
    accent: "#EA580C",
    icon: GraduationCap,
    summary:
      "Student and admin interfaces for an e-learning platform, mobile-first.",
    highlights: ["Token-based JWT authentication", "Axios API consumption"],
    tech: pick("react", "antd", "scss", "jwt", "rest"),
    links: [],
  },
];
