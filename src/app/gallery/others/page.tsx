// 'use client'
// import { Metadata } from "next"
import { promises as fs } from 'fs';
// import Image from "next/image";

// import AstropicCard, { AstroProps } from "../../../../components/AstropicCard";
import SessionPicCard, { SessionProps } from "../../../../components/SessionPicCard";

export default async function Gallery () {
  const picsFile = await fs.readFile(process.cwd() + '/data/gallery.json', 'utf8');
  const picsData = JSON.parse(picsFile);

  return (
    <main id="section-gallery">
      <h1 className="page-heading">Gallery</h1>
      <p className="page-description"></p>

      {/* <div className="gallery-grid">
        {picsData.astrophotographs.map(({ id, object, image, description, photographer }: AstroProps) => (
            <AstropicCard id={id} photographer={photographer} object={object} description={description} image={image} key={id}/>
          ))}
      </div> */}

      <div className="gallery-grid">
        {picsData.gallery.map(({ id, image, description }: SessionProps) => (
            <SessionPicCard id={id} description={description} image={image} key={id}/>
          ))}
      </div>

    </main>
  )
}


// export default gallery