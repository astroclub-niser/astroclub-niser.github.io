'use client'
import Image from "next/image";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export interface AstroProps {
  object: string,
  description: string,
  img?: string,
}
export interface UncontrolledProps {
  // Custom CSS className to add to the zoomed <dialog>.
  classDialog?: string
}

export default function AstropicCard({ object, description, img }: AstroProps) {
  return (
    <figure className="gallery-item">
      <Zoom classDialog="astropic-zoom">
        <Image src={`/astrophotographs/${img}`} width={1200} height={1200} alt={`${object}`}/>
      </Zoom>
      <figcaption>
        <p className="astropic-object">&nbsp;{object}&nbsp;</p>
        <p className="astropic-description">{description}</p>
      </figcaption>
    </figure>
  )
}