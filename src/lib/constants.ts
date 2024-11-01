import { Icons } from "@/components/icons";
import { AiFillGithub, AiFillLinkedin, AiOutlineX } from "react-icons/ai";

export const NavLinks = [
  {
    href: "https://github.com/HimanshuJ011",
    title: "Github",
    Logo: AiFillGithub,
  },
  {
    href: "https://www.linkedin.com/in/himanshujoshi011/",
    title: "Linkedin",
    Logo: AiFillLinkedin,
  },
  { href: "https://x.com/himanshuJ144", title: "X", Logo: AiOutlineX },
];
export const BLUR_FADE_DELAY = 0.04;
export const skills = [
  "React",
  "Next.js",
  "JavaScript",
  "Typescript",
  "Node.js",
  "Python",
  "Postgres",
  "MongoDB",
  "Linux",
  "Docker",
  "Java",
];
export const experiences = [
  {
    logoSrc: "./company/alphaloop.jpeg",
    logoAlt: "AlphaloopIT",
    title: "Full-Stack Developer (Founding team)",
    date: "Aug - 2023 — Present",
    description:
      "As a Software Developer at Alphaloop IT, I have built a solid foundation in full-stack development, specializing in MERN stack technologies and Next.js. My experience extends to SaaS projects, where I have worked on backend integrations, including payment systems with PostgreSQL. With a strong grasp of the DevOps lifecycle, I am proficient in implementing CI/CD pipelines using GitHub Actions to streamline project delivery",
    details: [
      "I have also collaborated with digital marketing teams to boost clients website visibility and enhance their online presence for business growth. I excel at understanding client needs, translating ideas into actionable plans, and leading projects to successful outcomes",
    ],
  },
  {
    logoSrc: "./company/cncf-logo.png",
    logoAlt: "CNCF",
    title: "CNCF Mentee & Open-source Contributor",
    date: "Oct-2023 — Jan-2024",
    description:
      "During my internship with the Cloud Native Computing Foundation (CNCF), I participated in the Zero to Merge Incubator Program, contributing remotely.",
    details: [
      "Recognition: Acknowledged as one of the initial program participants, highlighting my commitment to learning and contributing. Program Engagement: Engaged in a comprehensive four-week program focused on essential skills development.",
      "Activities: I actively participated in identifying issues, collaborating on open GitHub problems, and submitting Pull Requests (PRs) for review.",
      "Learning: Through this experience, I gained valuable insights into cloud-native technologies, enhancing my understanding of modern computing practices.",
    ],
  },
];

export const educationData = [
  {
    class: "B.tech",
    topic: "Bachelor of Technology in Computer Science and Engineering",
    college: "Techno India NJR Institue of Technology",
    batch: "2020 - 2024",
  },
];
