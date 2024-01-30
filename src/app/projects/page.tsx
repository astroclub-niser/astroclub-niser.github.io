import { Metadata } from "next"
import { promises as fs } from 'fs';
import Image from "next/image"
import Link from "next/link"
import ProjectCard from "../../../components/ProjectCard";

export const metadata: Metadata = {
  title: 'Projects | NISER Astronomy Club',
  description: 'We are the Astronomy Club of NISER, Bhubaneswar',
}

export default async function Projects() {

  const projectsFile = await fs.readFile(process.cwd() + '/data/projects.json', 'utf8');
  const projectsData = JSON.parse(projectsFile)

  return (
    <main id="section-projects">
      <h1 className="page-heading">Projects</h1>
      <p className="page-description">Its not just pretty pictures. We also do some cool science. Here are some projects we have conducted in the club.</p>
      <div className="projects-grid">

      {projectsData.projects.map(({ id, name, description, image, link }: ProjectProps) => (
        <ProjectCard key={id} name={name}  description={description} image={image} link={link} />
      ))}

        {/* <figure className="project">
          <Image src={'/jupiter_and_moons.png'} width={1200} height={300} alt="jupiter"></Image>
          <figcaption>
            <h3>The Ballet of the Medicean Stars</h3>
            <p>Our aim here was to find out the time-period of 4 bright moons of Jupiter (IO, Callisto, Ganymede, and Europa) on pure experimental background i.e., without using any theoretical knowledge. Further we also used the data to find the mass of Jupiter using some basic literature on the topic.</p>
            <Link href={`/projects/jupiters-moons`}><button className="btn">
              Read More
            </button></Link>
          </figcaption>
        </figure> */}
      </div>
    </main>
  )
}

// export default Projects