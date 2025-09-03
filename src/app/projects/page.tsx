import { Metadata } from "next"
import { promises as fs } from 'fs';
import Image from "next/image"
import Link from "next/link"
import ProjectCard, { ProjectProps } from "../../../components/ProjectCard";

export const metadata: Metadata = {
  title: 'Projects | NISER Astronomy Club',
  description: 'We are the Astronomy Club of NISER, Bhubaneswar',
}

export default async function Projects() {

  const projectsFile = await fs.readFile(process.cwd() + '/data/projects.json', 'utf8');
  const projectsData = JSON.parse(projectsFile)

  return (
    <main id="section-projects">
      <h1 className="page-heading">Experiments</h1>
      <p className="page-description">Its not just pretty pictures. We also do some cool science. Here are some projects we have conducted in the club.</p>
      <div className="projects-grid">

      {projectsData.projects.map(({ key, name, description, image, link }: ProjectProps) => (
        <ProjectCard key={key} name={name}  description={description} image={image} link={link} />
      ))}

      </div>
    </main>
  )
}

// export default Projects