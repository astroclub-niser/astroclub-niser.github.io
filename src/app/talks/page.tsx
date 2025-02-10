import { Metadata } from "next"
import { promises as fs } from 'fs';
import TalkCard from "../../../components/TalkCard";
import { TalkItemProps } from "../../../components/PropsPage";


export const metadata: Metadata = {
  title: 'Talks | NISER Astronomy Club',
  description: 'We are the Astronomy Club of NISER, Bhubaneswar',
}

export default async function Talks() {
  // PROCESS DATA FROM TALKS.JSON FILE
  const talksFile = await fs.readFile(process.cwd() + '/data/talks.json', 'utf8');
  const talksData = JSON.parse(talksFile)
  const talkKeys = Object.keys(talksData)
  
  // SPLIT INTO 3 CATEGORIES
  const upcomingTalksData = talksData[talkKeys[0]]
  const facultyTalks = talksData[talkKeys[1]]
  const archivedTalks = talkKeys.slice(2)
  
  // EMPTY MESSAGE IF NO UPCOMING TALKS, ELSE FILL WITH TALK CARD
  let upcomingTalks = ''
  if (Object.keys(upcomingTalksData).length === 0) {
    upcomingTalks = 'There are no scheduled talks for now. Come back later!'
  } else {
    upcomingTalks = upcomingTalksData.map(({ id, title, date, speaker, speaker_desc, poster, youtubeID, abstract }: TalkItemProps) => (
      <TalkCard key={id} title={title} date={date} speaker={speaker} speaker_desc={speaker_desc} poster={poster} youtubeID={youtubeID} abstract={abstract} />
    ))
  }
  
  return (
    <main id="section-talks">
      <h1 className="page-heading">Talks</h1>
      <p className="page-description">An archive of all the talks conducted by the NAC.</p>

      {/* UPCOMING TALKS */}
      <div className="talks-year" id={'upcoming-talks'}>
        <h2 className="talks-year-label team-heading">Upcoming Talks</h2>
        <div className="talks-grid section-description">

          {upcomingTalks}

        </div>
      </div>

      {/* FACULTY TALKS */}
      <div className="talks-year" id={'faculty-talks'}>
        <h2 className="talks-year-label team-heading">Faculty Talks</h2>
        <div className="talks-grid section-description">
          {facultyTalks.map(({ id, title, date, speaker, speaker_desc, poster, youtubeID, abstract }: TalkItemProps) => (
            <TalkCard key={id} title={title} date={date} speaker={speaker} speaker_desc={speaker_desc} poster={poster} youtubeID={youtubeID} abstract={abstract} />
          ))}

        </div>
      </div>

      {/* YEAR WISE ARCHIVED TALKS */}
      {
        archivedTalks.map((year, index) => (

          <div className="talks-year" id={year} key={index}>
            <h2 className="talks-year-label year-name">20{year.substring(4, 6)}</h2>
            <div className="talks-grid">

              {talksData[year].map(({ id, title, date, speaker, speaker_desc, poster, youtubeID, abstract }: TalkItemProps) => (
                <TalkCard key={id} title={title} date={date} speaker={speaker} speaker_desc={speaker_desc} poster={poster} youtubeID={youtubeID} abstract={abstract} />
              ))}

            </div>
          </div>

        ))
      }

    </main >
  )
}