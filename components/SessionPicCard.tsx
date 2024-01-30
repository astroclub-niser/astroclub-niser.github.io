'use client'
import Image from "next/image";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export interface SessionProps {
  id: string,
  description: string,
  image?: string,
}
export interface UncontrolledProps {
  // Custom CSS className to add to the zoomed <dialog>.
  classDialog?: string
}

export default function AstropicCard({ id, description, image }: SessionProps) {
  return (
    <figure className="gallery-item" key={id}>
      <Zoom classDialog="astropic-zoom">
        <Image src={`/photos/${image}`} width={1200} height={1200} alt={`${image}`}/>
      </Zoom>
      <figcaption>
        {/* <p className="astropic-object">&nbsp;{object}&nbsp;</p> */}
        <p className="astropic-description">{description}</p>
      </figcaption>
    </figure>
  )
}