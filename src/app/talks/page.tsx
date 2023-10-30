import { Metadata } from "next"
import { promises as fs } from 'fs';
import TalkCard from "../../../components/TalkCard";
import { TalkItemProps } from "../../../components/PropsPage";


export const metadata: Metadata = {
  title: 'Talks | NISER Astronomy Club',
  description: 'We are the Astronomy Club of NISER, Bhubaneswar',
}



export default async function Talks() {
  const talksFile = await fs.readFile(process.cwd() + '/data/talks.json', 'utf8');
  const talksData = JSON.parse(talksFile)
  const talkKeys = Object.keys(talksData)

  const upcomingTalks = talksData[talkKeys[0]]
  const archivedTalks = talkKeys.slice(1)

  return (
    <main id="section-talks">
      <h1 className="page-heading">Talks</h1>
      <p className="page-description">An archive of all the talks conducted by the NAC.</p>

      <div className="talks-year" id={'upcoming-talks'}>
        <h2 className="talks-year-label">Upcoming Talks</h2>
        <div className="talks-grid">

          {upcomingTalks.map(({ id, title, date, speaker, speaker_desc, poster, youtubeID, abstract }: TalkItemProps) => (
            <TalkCard key={id} title={title} date={date} speaker={speaker} speaker_desc={speaker_desc} poster={poster} youtubeID={youtubeID} abstract={abstract} />
          ))}

        </div>
      </div>

      {archivedTalks.map((year, index) => (

        <div className="talks-year" id={year} key={index}>
          <h2 className="talks-year-label">20{year.substring(4, 6)}</h2>
          <div className="talks-grid">

            {talksData[year].map(({ id, title, date, speaker, speaker_desc, poster, youtubeID, abstract }: TalkItemProps) => (
              <TalkCard key={id} title={title} date={date} speaker={speaker} speaker_desc={speaker_desc} poster={poster} youtubeID={youtubeID} abstract={abstract} />
            ))}
    
          </div>
        </div>

      ))}

    </main >
  )
}