'use client'
import Image from "next/image";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export interface AstroProps {
  object: string,
  description: string,
  img?: string,
}


export default function AstropicCard({ object, description, img = "/kshitij.jpg" }: AstroProps) {
  return (
    <figure className="gallery-item">
      <Zoom>
        <Image src={`/astrophotographs/${img}`} width={600} height={600} alt={`${object}`} />
      </Zoom>
      <figcaption>
        <p className="astropic-object">&nbsp;{object}&nbsp;</p>
        <p className="astropic-description">{description}</p>
      </figcaption>
    </figure>
  )
}