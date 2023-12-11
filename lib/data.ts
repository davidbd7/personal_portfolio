import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import portfolioImg from "@/public/portfolio.png";
import msaIMg from "@/public/MSA.png";
import langchainImg from "@/public/langchain.png";
import alarmImg from "@/public/alarm.png"
import aiImg from "@/public/ai.png"
import rideshareImg from "@/public/rideshare.png"
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
    icon: React.createElement(FaReact),
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
    icon: React.createElement(LuGraduationCap),
    date: "December 18th, 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Personal Portfolio",
    description:
      "Learned TypeScript, Next.Js and utilized Tailwind CSS to create a modern, smooth, website to showcase my portfolio",
    tags: ["TypeScript", "Next.js", "React", "Tailwind", "React"],
    imageUrl: portfolioImg,
  },
  {
    title: "Bioinformatics MSA",
    description:
      "This program takes in Fasta Format sequences, performs multiple sequence alignment, prints out a percent identity matrix, and min/max scores.",
    tags: ["Java", "Javascript", "Bioinformatics"],
    imageUrl: msaIMg,
  },
  {
    title: "Rideshare Visalization ",
    description:
      "Created a PostgreSQL database with rideshare data and created Springboot APIs to visualize the data in a React frontend",
    tags: ["Java", "React", "Springboot", "PostgreSQL"],
    imageUrl: rideshareImg,
  },
  {
    title: "Langchain Multiple PDF Reader",
    description:
      "An app where you can upload multiple PDFs and have a trained AI model answer questions about them specifically.",
    tags: ["Python", "Langchain", "Streamlit", "OpenAI"],
    imageUrl: langchainImg,
  },

  {
    title: "Alarm Panel Control",
    description:
      "FullStack Application that uses RESTAPis to execute a Python script that directly alters the alarm configuration panel within the Ubuntu system.",
    tags: ["React", "Python", "Linux", "Javascript"],
    imageUrl: alarmImg,
  },
  {
    title: "AI Article Summarizer",
    description:
      "Uses OpenAI to provide summaries for user inputed links, complete with a modern UI built using Javascript and Tailwind",
    tags: ["OpenAI", "Javascript", "React", "Tailwind"],
    imageUrl: aiImg,
  },
] as const;

export const skillsData = [
  "Java",
  "Python",
  "JavaScript",
  "React",
  "TypeScript",
  "Next.js",
  "Docker",
  "Git",
  "Jira",
  "Agile",
  "SQL",
  "PostgreSQL",
  "Node.js",
  "Linux",
  "HTML",
  "CSS",
  "ROS",
  "System Design",
  "Framer Motion",
] as const;