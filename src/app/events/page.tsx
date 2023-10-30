import { Metadata } from "next"
import { promises as fs } from 'fs';
import Image from "next/image";
import { EventProps } from "../../../components/PropsPage";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Events | NISER Astronomy Club',
  description: 'We are the Astronomy Club of NISER, Bhubaneswar',
}

function BlogEntryBtn({ blogEntry }: { blogEntry: string }) {
  if (blogEntry) {
    return (
      <Link href={`/events/${blogEntry}`}>
        <button className="btn">Read More</button>
      </Link>
    )
  }
}

export default async function Events() {
  const eventsFile = await fs.readFile(process.cwd() + '/data/events.json', 'utf8');
  const eventsData = JSON.parse(eventsFile);
  const years = ['23', '21', '19', '18']

  return (
    <main id="section-events">
      <h1 className="page-heading">Events</h1>
      <p className="page-description">An archive of all the events conducted by the NAC, as well as some upcoming ones. Keep an eye out for something new!</p>

      <div className="events-grid">
        {years.map((year) => (
          eventsData['year' + year].map(({ id, eventName, eventDate, shortDesc, images, blogEntry }: EventProps) => (

            <figure className="event" key={id}>
              <Image src={`/posts/${images[0]}`} width={230} height={230} alt={`${eventName}`} />
              <p className="event-name">{eventName}</p>
              <p className="event-date">{eventDate}</p>
              <p className="event-desc">{shortDesc}</p>
              <BlogEntryBtn blogEntry={blogEntry}/>
            </figure>

          ))
        ))}

      </div>

    </main>
  )
}

// export default events
