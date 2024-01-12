import { Metadata } from "next"
import { promises as fs } from 'fs';
import Image from "next/image";
import { EventProps } from "../../../components/PropsPage";
import Link from "next/link";
// import path from "path";

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

// export async function getPostData({id}:{id:string}) {
//   const postFile = await fs.readFile(process.cwd() + `/posts/${id}.json`, 'utf8');
//   // const fullPath = path.join(postsDirectory, `${id}.md`);
//   const fileContents = fs.readFile(postFile, 'utf8');

//   // Use gray-matter to parse the post metadata section
//   const matterResult = matter(fileContents);

//   // Use remark to convert markdown into HTML string
//   const processedContent = await remark()
//     .use(html)
//     .process(matterResult.content);
//   const contentHtml = processedContent.toString();

//   // Combine the data with the id and contentHtml
//   return {
//     id,
//     contentHtml,
//     ...matterResult.data,
//   };
// }

export default async function Events() {
  const eventsFile = await fs.readFile(process.cwd() + '/data/events.json', 'utf8');
  const eventsData = JSON.parse(eventsFile);
  const years = ['23', '21', '19', '18']
  const eventKeys = Object.keys(eventsData)

  const upcomingEventsData = eventsData[eventKeys[0]]
  const archivedEvents = eventKeys.slice(1)

  return (
    <main id="section-events">
      <h1 className="page-heading">Events</h1>
      <p className="page-description">An archive of all the events conducted by the NAC, as well as some upcoming ones. Keep an eye out for something new!</p>

      {/* <div className="events-grid"> */}
        {archivedEvents.map((year, index) => (

          <div className="events-year" id={year} key={index}>
            <h2 className="events-year-label year-name">20{year.substring(4, 6)}</h2>
            <div className="events-grid">

              {eventsData[year].map(({ id, eventName, eventDate, shortDesc, images, blogEntry }: EventProps) => (

                <figure className="event" key={id}>
                  <div className="event-img">
                    <Image src={`/posts/${images[0]}`} width={500} height={500} alt={`${eventName}`} />
                  </div>
                  <div className="event-content">
                    <p className="event-name">{eventName}</p>
                    <p className="event-date">{eventDate}</p>
                    <p className="event-desc">{shortDesc}</p>
                    {/* <BlogEntryBtn blogEntry={blogEntry} />   */}
                  </div>
                </figure>

              ))}

            </div>
          </div>

        ))}

      {/* </div> */}

    </main>
  )
}



// export default events
