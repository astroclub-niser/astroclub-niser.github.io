'use client'
import Image from 'next/image'
import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const Gallery = ({ id, object, image, description }) => {

  return (
    <figure className="gallery-item">
      <Zoom>
        <Image src={`/astrophotographs/${image}`} width={600} height={600} alt={`${object}`} />
      </Zoom>
      <figcaption>
        <p className="astropic-object">&nbsp;{object}&nbsp;</p>
        <p className="astropic-description">{description}</p>
      </figcaption>
    </figure>
  )
}

export default Gallery