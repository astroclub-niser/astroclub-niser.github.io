// 'use client'
// import { Metadata } from "next"
import { promises as fs } from 'fs';

import AstropicCard, { AstroProps } from "../../../components/AstropicCard";

export default async function Gallery () {
  const picsFile = await fs.readFile(process.cwd() + '/data/astropics.json', 'utf8');
  const picsData = JSON.parse(picsFile);

  return (
    <main id="section-gallery">
      <h1 className="page-heading">Astrophotographs</h1>
      <p className="page-description">A collection of all the beautiful moments of the sky captured by our beloved members. Click to enlarge.</p>

      <h2 id="astro-pics"></h2>
      <h2 id="other-pics"></h2>

      <div className="gallery-grid">
        {picsData.astrophotographs.map(({ id, object, image, description, photographer }: AstroProps) => (
            <AstropicCard id={id} photographer={photographer} object={object} description={description} image={image} key={id}/>
          ))}
      </div>
    </main>
  )
}

// export default gallery