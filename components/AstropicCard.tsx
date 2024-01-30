'use client'
import Image from "next/image";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export interface AstroProps {
  id: string,
  object: string,
  description: string,
  photographer: string,
  image?: string,
}
export interface UncontrolledProps {
  // Custom CSS className to add to the zoomed <dialog>.
  classDialog?: string
}

export default function AstropicCard({ id, object, description, photographer, image }: AstroProps) {
  const credit = photographer != '' ? `Credit: ${photographer}` : ''

  return (
    <figure className="gallery-item" key={id}>
      <Zoom classDialog="astropic-zoom">
        <Image src={`/astrophotographs/${image}`} width={1200} height={1200} alt={`${object}`}/>
      </Zoom>
      <figcaption>
        <p className="astropic-object">&nbsp;{object}&nbsp;</p>
        <p className="astropic-description">{description} <span id="astropic-credit">{credit}</span></p>
      </figcaption>
    </figure>
  )
}