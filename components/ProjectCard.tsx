// 'use client'
import Image from "next/image";
import Link from "next/link";
// import Zoom from 'react-medium-image-zoom'
// import 'react-medium-image-zoom/dist/styles.css'

export interface ProjectProps {
    key: string,
    name: string,
    description: string,
    image: string,
    link: string
}

function ReadMore({ link }: { link: string }) {
    if (link) {
        return (
            <Link href={link}><button className="btn">Read More</button></Link>
        )
    }
}

export default function ProjectCard({ key, name, description, image, link }: ProjectProps) {
    return (
        <figure className="project" key={key}>
            <Image src={image} width={1200} height={300} alt={name}></Image>
            <figcaption>
                <h3>{name}</h3>
                <p>{description}</p>
                <ReadMore link={link}></ReadMore>
            </figcaption>
        </figure>
    )
}