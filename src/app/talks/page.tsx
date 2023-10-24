import { Metadata } from "next"
import { promises as fs } from 'fs';
import TalkCard from "../../../components/TalkCard";


export const metadata: Metadata = {
  title: 'Talks | NISER Astronomy Club',
  description: 'We are the Astronomy Club of NISER, Bhubaneswar',
}



export default async function Talks() {
  const talksFile = await fs.readFile(process.cwd() + '/data/talks.json', 'utf8');
  const talksData = JSON.parse(talksFile);
  const years = ['23', '22']
  // const keys = Object.keys(talksData)

  return (
    <main id="section-talks">
      <h1 className="page-heading">Talks</h1>
      <p className="page-description">An archive of all the talks conducted by the NAC.</p>

      {Object.keys(talksData).map((year, index) => (

        <div className="talks-year" key={index}>
          <h2 className="talks-year-label">20{year.substring(4,6)}</h2>
          <div className="talks-grid">

            {talksData[year].map(({ id, title, date, speaker, speaker_desc, poster, youtubeID, abstract }) => (

              <TalkCard key={id} title={title} date={date} speaker={speaker} speaker_desc={speaker_desc} poster={poster} youtubeID={youtubeID} abstract={abstract}/>

            ))}
          </div>
        </div>

      ))}

    </main >
  )
}