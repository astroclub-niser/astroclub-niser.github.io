import { Metadata } from "next"
import Image from "next/image"
import { promises as fs } from 'fs';
import { MagazineProps } from "../../../components/PropsPage";
import { NewSticker } from "../../../components/PropsPage";

export const metadata: Metadata = {
  title: 'Kshitij Magazine | NISER Astronomy Club',
  description: 'We are the Astronomy Club of NISER, Bhubaneswar',
}

export default async function Kshitij() {
  // EXTRACT ALL DATA FROM THE JSON FILE
  const magazineFile = await fs.readFile(process.cwd() + '/data/magazines.json', 'utf8');
  const magazineData = JSON.parse(magazineFile)

  return (
    <main id="section-magazine">
      <h1 className="page-heading">Kshitij</h1>
      <p className="page-description">NAC&apos;s own in-house magazine encompassing all fields of astronomy.</p>
      <button className="btn"><a target="_blank" href="https://drive.google.com/drive/folders/1hcU2Xz8NAgw1I8iF3Qn2BBAy-U1SBdVc">Read all</a></button>
      {/* <button className="btn"><a href="#">Want to Contribute?</a></button> */}

      {/* LOOP THROUGH EACH ISSUE AND ADD THEM TO THE GRID */}
      <div className="magazine-grid">

        {magazineData.magazines.map(({ id, link, coverPage, issue, releaseMonth, description }: MagazineProps) => (

          <div className="magazine" key={id}>
            <a target="_blank" href={link}>
              <Image src={coverPage} width={320} height={300} alt={issue}></Image>
            </a><p className="magazine-issue">{issue}</p>
            <p className="magazine-release">{releaseMonth}</p>
            <p className="magazine-desc">{description}</p>

            <NewSticker releaseMonth={releaseMonth}></NewSticker>

          </div>
        ))}

      </div>
    </main>
  )
}

// export default Kshitij