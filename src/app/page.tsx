import Navbar from "@/components/Navbar";
import { FaFileAlt } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import BlurFade from "@/components/ui/blur-fade";
import WorkExperience from "@/components/WorkExperience";
import EducationSection from "@/components/EducationSection";
import { ProjectCard } from "@/components/ui/project-card";
import { Icons } from "@/components/icons";
import {
  BLUR_FADE_DELAY,
  skills,
  experiences,
  educationData,
} from "@/lib/constants";
import SparklesText from "@/components/ui/sparkles-text";

const projects = [
  {
    title: "Email Marketing Tool",
    href: "https://github.com/HimanshuJ011/EmailMarketing",
    active: true,
    description:
      "A powerful SaaS solution for managing email marketing campaigns and tracking emails efficiently. Built with Node.js and TypeScript, the tool supports robust data management with PostgreSQL, utilizes Redis for caching, and employs Bull-MQ for background processing and job management.",
    technologies: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Bull-MQ"],
    links: [
      {
        type: "Source",
        href: "https://github.com/HimanshuJ011/EmailMarketing",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "./email-marketing.png",
  },

  {
    title: "Discord AI Bot",
    href: "https://github.com/HimanshuJ011/Discord-Bot",
    active: true,
    description:
      "An AI-powered Discord bot that integrates with OpenAI's API to provide smart responses and assist users in various tasks. Developed using Node.js and JavaScript, this bot features API integrations for dynamic interactions, making it a versatile assistant for Discord communities.",
    technologies: ["Node.js", "JavaScript", "OpenAI API", "APIs"],
    links: [
      {
        type: "Source",
        href: "https://github.com/HimanshuJ011/Discord-Bot",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "./dbot.avif",
  },

  {
    title: "Employee Management System",
    href: "https://github.com/HimanshuJ011/Employee_Management_System",
    active: true,
    description:
      "A desktop-based application for managing employee records and performing CRUD operations, developed in Java using Swing and AWT for the user interface. Integrated with SQL for reliable data storage and efficient handling of employee information such as attendance, payroll, and performance metrics.",
    technologies: ["Java", "Java Swing", "Java AWT", "SQL", "CRUD APIs"],
    links: [
      {
        type: "Source",
        href: "https://github.com/HimanshuJ011/Employee_Management_System",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "./EMPS.png",
  },

  {
    title: "QR-Code Generator",
    href: "https://github.com/HimanshuJ011/Qr-code_using_ReactJs",
    active: true,
    description:
      "A web application that generates QR codes dynamically based on user input, built with React.js and JavaScript. Leveraging the QR-react library, this tool allows users to create and download QR codes for easy sharing and access to URLs, contact details, and more.",
    technologies: ["React.js", "JavaScript", "QR-react"],
    links: [
      {
        type: "Source",
        href: "https://github.com/HimanshuJ011/Qr-code_using_ReactJs",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "./qrGen.png",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="container mx-auto flex flex-col items-center md:flex-row border-t justify-between py-6 mt-8 md:space-x-8">
        {/* Profile Header */}
        <header className="space-y-4 md:text-left md:pb-0 ">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl md:text-6xl">
            Hi, I&lsquo;m Himanshu 👋🏻
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Full-Stack Developer, Exploring Tech with Building Things,
          </p>

          {/* Resume Link */}
          {/* <a
            href="https://drive.google.com/file/d/13Nfe3tGV5bVTud6701Tccoa9n4lO1Alz/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="flex items-center max-w-[100px] text-fore-primary transition-colors border p-1 "
          >
            <FaFileAlt size={20} className="mr-2" />
            Resume
          </a> */}
        </header>
        {/* Profile Image */}
        {/* <div className="flex-shrink-0">
          <Image
            src="/propic.jpg"
            alt="Profile"
            height={200}
            width={200}
            className="rounded-full"
          />
        </div> */}
      </section>

      <div className="container lg:mx-auto text-left py-8 ">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 ">
          About
        </h2>
        <p className="py-2">
          I&apos;m a <strong>Full-Stack Developer</strong> with a background in
          <strong> Computer Science and Engineering</strong> and hands-on
          experience in <strong>entrepreneurship</strong>. As a{" "}
          <strong>Founding Software Engineer</strong> and developer at a
          startup, I&apos;ve specialized in the MERN stack and Next.js to build
          scalable projects from the ground up. My contributions to the Cloud
          Native Computing Foundation&apos;s Zero to Merge Incubator Program
          showcase my commitment to advancing cloud technology. As a founding
          member of <strong>AlphaloopIT</strong>, I blend technical expertise
          with <strong>R&D</strong> and{" "}
          <strong>client-driven innovation </strong>
          to deliver impactful SaaS solutions. My work is further informed by
          insights from the Digital Marketing space where I align strategy with
          technology to ensure data-driven, client-focused results.
          <br />
          <br />
          I&apos;m committed to continuous learning and excited about the future
          of technology. Let&apos;s connect to explore new opportunities
          together!
        </p>
      </div>

      <section className="container py-8">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Skills
            </h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-8">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 ">
            Experience and Open-Source Contributions
          </h2>
        </BlurFade>
        <div className="grid grid-cols-1 md:grid-cols-1 divide-y divide-gray-200 dark:divide-gray-700 gap-8">
          {experiences.map((experience, index) => (
            <WorkExperience key={index} {...experience} />
          ))}
        </div>
      </section>

      <EducationSection education={educationData} />

      <section className="container py-8 border-t">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-5xl">
                  Check out my Work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, Here are a few of
                  my favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                  dates={""}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section className="group h-72 flex flex-col items-center justify-center my-32 ">
        <h3 className="text-5xl flex items-center gap-x-2 font-bold">
          <SparklesText
            text="
          Get in touch"
            className="text-center text-5xl md:text-7xl"
          />
        </h3>
        <div className="text-xl my-3 text-center text-gray-700 dark:text-gray-100 space-y-4">
          <p>
            Just shoot me a DM, I&apos;m always looking for new opportunities!
          </p>
        </div>

        <a
          href="mailto:joshihimanshu245@gmail.com"
          className="text-white px-9  py-2 mt-8 text-lg bg-gradient-to-r from-pink-500 to-violet-400 rounded-2xl hover:to-yellow-500"
        >
          {" "}
          Say Hi👋
        </a>
      </section>
    </>
  );
}
