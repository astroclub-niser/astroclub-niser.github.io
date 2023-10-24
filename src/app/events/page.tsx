import { Metadata } from "next"
import { promises as fs } from 'fs';
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Events | NISER Astronomy Club',
  description: 'We are the Astronomy Club of NISER, Bhubaneswar',
}

const years = ['21']

export default async function Events() {
  const eventsFile = await fs.readFile(process.cwd() + '/data/events.json', 'utf8');
  const eventsData = JSON.parse(eventsFile);
  // let ys = 'year21';
  // const years = ['year21']

  return (
    <main id="section-events">
      <h1 className="page-heading">Events</h1>
      <p className="page-description">An archive of all the events conducted by the NAC, as well as some upcoming ones. Keep an eye out for something new!</p>

      <div className="events-grid">
        {years.map((year) => (
          eventsData['year' + year].map(({ id, eventName, eventDate, shortDesc, images, blogEntry }) => (

            <figure className="event" key={id}>
              <Image src={`/posts/${images[0]}`} width={230} height={230} alt={`${eventName}`} />
              <p className="event-name">{eventName}</p>
              <p className="event-date">{eventDate}</p>
              <p className="event-desc">{shortDesc}</p>
            </figure>

          ))
        ))}

      </div>

    </main>
  )
}

// export default events