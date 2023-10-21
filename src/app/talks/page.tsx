import { Metadata } from "next"
import { promises as fs } from 'fs';
import TalkCard from "../../../components/TalkCard";


export const metadata: Metadata = {
  title: 'Talks | NISER Astronomy Club',
  description: 'We are the Astronomy Club of NISER, Bhubaneswar',
}

const years = ['23', '22']


export default async function Talks() {
  const talksFile = await fs.readFile(process.cwd() + '/data/talks.json', 'utf8');
  const talksData = JSON.parse(talksFile);

  return (
    <main id="section-talks">
      <h1 className="page-heading">Talks</h1>
      <p className="page-description">An archive of all the talks conducted by the NAC.</p>

      {years.map((year) => (

        <div className="talks-year">
          <h2 className="talks-year-label">20{year}</h2>
          <div className="talks-grid">

            {talksData['year' + year].map(({ id, title, date, speaker, speaker_desc, youtubeID, abstract }) => (

              <TalkCard title={title} date={date} speaker={speaker} speaker_desc={speaker_desc} youtubeID={youtubeID} abstract={abstract}/>

            ))}
          </div>
        </div>

      ))}

    </main >
  )
}