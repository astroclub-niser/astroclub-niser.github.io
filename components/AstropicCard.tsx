'use client'
import Image from "next/image";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export interface AstroProps {
  id: string,
  object: string,
  description: string,
  image?: string,
}
export interface UncontrolledProps {
  // Custom CSS className to add to the zoomed <dialog>.
  classDialog?: string
}

export default function AstropicCard({ id, object, description, image }: AstroProps) {
  return (
    <figure className="gallery-item" key={id}>
      <Zoom classDialog="astropic-zoom">
        <Image src={`/astrophotographs/${image}`} width={800} height={800} alt={`${object}`}/>
      </Zoom>
      <figcaption>
        <p className="astropic-object">{object}</p>
        <p className="astropic-description">{description}</p>
      </figcaption>
    </figure>
  )
}