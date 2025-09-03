import { Metadata } from "next"
import { promises as fs } from 'fs';
import Image from "next/image";
import { EventProps } from "../../../components/PropsPage";
import Link from "next/link";
import EventCard from "../../../components/EventCard";
// import path from "path";

export const metadata: Metadata = {
  title: 'Events | NISER Astronomy Club',
  description: 'We are the Astronomy Club of NISER, Bhubaneswar',
}

// function BlogEntryBtn({ eventLink }: { eventLink: string }) {
//   if (eventLink) {
//     return (
//       <Link href={`/events/${eventLink}`}>
//         <button className="btn">Read More</button>
//       </Link>
//     )
//   }
// }

export default async function Events() {
  const eventsFile = await fs.readFile(process.cwd() + '/data/events.json', 'utf8');
  const eventsData = JSON.parse(eventsFile);
  const eventKeys = Object.keys(eventsData)

  const upcomingEventsData = eventsData[eventKeys[0]]
  const archivedEvents = eventKeys.slice(1)

  // let upcomingEvents = ''
  if (Object.keys(upcomingEventsData).length === 0) {
    console.log('No new events.')
    // upcomingEvents = 'There are no new events scheduled for now. Come back later!'
  } else {
    <div className="events-year">
      <h2 className="events-year-label year-name">Coming Up!</h2>
      <div className="events-grid">

        {
          upcomingEventsData.map(({ id, eventName, eventDate, shortDesc, images, eventLink }: EventProps) => (
            <EventCard key={id} eventDate={eventDate} eventName={eventName} shortDesc={shortDesc} images={images} eventLink={eventLink} />
          ))
        }

      </div>
    </div>


    // upcomingEvents = upcomingEventsData.map(({ id, eventName, eventDate, shortDesc, images, eventLink }: EventProps) => (
    //   <EventCard key={id} eventDate={eventDate} eventName={eventName} shortDesc={shortDesc} images={images} eventLink={eventLink} />
    // ))
  }


  return (
    <main id="section-events">
      <h1 className="page-heading">Events</h1>
      <p className="page-description">An archive of all the events conducted by the NAC, as well as some upcoming ones. Keep an eye out for something new!</p>

      {/* <div className="events-grid"> */}

      {upcomingEventsData &&
        <div className="events-year" key={0}>
          <h2 className="events-year-label year-name">Coming Up!</h2>
          <div className="events-grid">

            {
              upcomingEventsData.map(({ id, eventName, eventDate, shortDesc, images, eventLink }: EventProps) => (
                <EventCard key={id} eventDate={eventDate} eventName={eventName} shortDesc={shortDesc} images={images} eventLink={eventLink} />
              ))
            }

          </div>
        </div>
      }

      {archivedEvents.map((year, index) => (

        <div className="events-year" id={year} key={index}>
          <h2 className="events-year-label year-name">20{year.substring(4, 6)}</h2>
          <div className="events-grid">

            {eventsData[year].map(({ id, eventName, eventDate, shortDesc, images, eventLink }: EventProps) => (

              <EventCard key={id} eventName={eventName} eventDate={eventDate} shortDesc={shortDesc} images={images} eventLink={eventLink}></EventCard>

            ))}

          </div>
        </div>

      ))}

      {/* </div> */}

    </main>
  )
}

// export default events