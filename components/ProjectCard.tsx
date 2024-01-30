// 'use client'
import Image from "next/image";
import Link from "next/link";
// import Zoom from 'react-medium-image-zoom'
// import 'react-medium-image-zoom/dist/styles.css'

export interface ProjectProps {
    id: string,
    name: string,
    description: string,
    image: string,
    link: string
}
// export interface UncontrolledProps {
//   // Custom CSS className to add to the zoomed <dialog>.
//   classDialog?: string
// }

export default function ProjectCard({ id, name, description, image, link }: ProjectProps) {
    return (
        <figure className="project" key={id}>
            <Image src={image} width={1200} height={300} alt={name}></Image>
            <figcaption>
                <h3>{name}</h3>
                <p>{description}</p>
                <Link href={link}><button className="btn">Read More</button></Link>
            </figcaption>
        </figure>
    )
}