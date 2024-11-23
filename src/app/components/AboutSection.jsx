"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
<ul className="list-disc pl-2">
  <li>Backend Development</li>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>PostgreSQL</li>
  <li>Sequelize</li>
  <li>JavaScript</li>
  <li>React</li>
  <li>Git</li>
  <li>GraphQL</li>
  <li>SQL</li>
  <li>Python</li>
  <li>Machine Learning</li>
  <li>Data Analytics</li>
  <li>DevOps</li>
  <li>Cloud Technologies (Google Cloud, Microsoft Azure)</li>
  <li>Agile Methodologies</li>
  <li>Data Management</li>
</ul>

    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Institute Technology of Sumatera</li>
        <li>Harapan Mandiri International High School</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul>
  <li>MySkill: Array & Struck</li>
  <li>MySkill: Backend Development Introduction</li>
  <li>MySkill: Backend Development Introduction 2</li>
  <li>Dicoding Indonesia: Belajar Dasar Pemrograman JavaScript</li>
  <li>MySkill: Buffer Select Mutex</li>
  <li>MySkill: Context Goroutine Channel</li>
  <li>MySkill: Defer Panic Error</li>
  <li>MySkill: Function on Golang</li>
  <li>MySkill: Golang, Variable, Constant, Data Type</li>
  <li>MySkill: JSON Assert Interface</li>
  <li>MySkill: Operator, Conditional, & Looping</li>
  <li>Google: Digital Transformation with Google Cloud</li>
  <li>Google: Exploring Data Transformation with Google Cloud</li>
  <li>Google: Gemini for Data Scientists and Analysts</li>
  <li>Google: Innovating with Google Cloud Artificial Intelligence</li>
  <li>Google: Introduction to Data Analytics in Google Cloud</li>
  <li>Google: Introduction to Data Analytics on Google Cloud</li>
  <li>Google: Introduction to Large Language Models</li>
  <li>Google: Introduction to Responsible AI</li>
  <li>Google: Modernize Infrastructure and Applications with Google Cloud</li>
</ul>

    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Reyhan Capri Moraga is an accomplished student and aspiring backend developer with a passion for cloud computing and DevOps. Currently, Reyhan is studying at Institut Teknologi Sumatera (Itera), where he is actively involved in backend development, cloud technologies, and DevOps. He participated in an international entrepreneurship competition with an app called Slayan, designed to connect students with freelance opportunities and career exploration. His commitment to continuous learning and improvement has led him to explore new knowledge in backend programming, data management, and emerging technologies in cloud computing and DevOps. Reyhan aspires to build a career in backend development and cloud computing, aiming to maximize available resources for technological advancement. His goal is to leverage his expertise to contribute to innovative cloud solutions and DevOps practices.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
