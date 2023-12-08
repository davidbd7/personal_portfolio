import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineering Apprenticeship @Logicsoft",
    location: "Delhi",
    description:
      "Learned industry standards and full-stack development in a summer apprenticeship experience",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Software Engineering Internship @Cratus Technology",
    location: "San Jose, CA",
    description:
      "Gained valuable experience in multiple differnt technologies during my time as an intern here. I am currnetly using python as a backend developer at Cratus.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - Present",
  },
  {
    title: "Graduated from San Jose State University",
    location: "San Jose California",
    description:
      "Recieved B.S Computer Science Degree on December 18th, 2023",
    icon: React.createElement(FaReact),
    date: "December 18th, 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Personal Portfolio",
    description:
      "Learned TypeScript, Next.Js and utilized Tailwind CSS to create a modern, smooth, website to showcase my portfolio",
    tags: ["TypeScript", "Next.js", "React", "Tailwind", "React"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Bioinformatics MSA",
    description:
      "This program takes in Fasta Format sequences, performs multiple sequence alignment, prints out a percent identity matrix, and min/max scores.",
    tags: ["Java", "Python", "Javascript", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Langchain Multiple PDF Reader",
    description:
      "An app where you can upload multiple PDFs and have a trained AI model answer questions about them specifically.",
    tags: ["Python", "Langchain", "Streamlit", "OpenAI"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;