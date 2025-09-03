import Image from 'next/image'
import Link from 'next/link'
import { promises as fs } from 'fs';
import AstropicCard, { AstroProps } from '../../components/AstropicCard';
import { a } from '../../components/AllLinks'
import EventCard, { EventProps } from '../../components/EventCard';
import { MagazineProps, NewSticker } from '../../components/PropsPage';

export default async function Home() {
  const picsFile = await fs.readFile(process.cwd() + '/data/astropics.json', 'utf8');
  const picsData = JSON.parse(picsFile).astrophotographs.slice(0, 6);

  const eventsFile = await fs.readFile(process.cwd() + '/data/events.json', 'utf8');
  const eventsData = JSON.parse(eventsFile)
  const newEventsData = eventsData[Object.keys(eventsData)[0]]

  let upcomingEvents = ''
  if (Object.keys(newEventsData).length === 0) {
    upcomingEvents = 'There are no new events scheduled for now. Come back later!'
  } else {
    upcomingEvents = newEventsData.map(({ key, eventName, eventDate, shortDesc, images, eventLink }: EventProps) => (
      <EventCard key={key} eventDate={eventDate} eventName={eventName} shortDesc={shortDesc} images={images} eventLink={eventLink} />
    ))
  }

  const magazineFile = await fs.readFile(process.cwd() + '/data/magazines.json', 'utf8');
  const magazineData = JSON.parse(magazineFile)

  return (
    <main>

      {/* TOP LANDING PAGE */}
      <div id="hero" className='section-home'>
        <h1>NISER<br />Astronomy<br />Club</h1>
        <p>Andromeda Galaxy<br />Credit: Adesh Thawale</p>
      </div>

      {/* BRIEF DESCRIPTION */}
      <div id="hello" className='section-home'>
        <p>Hello space enthusiasts! Welcome to the official page of NISER Astronomy Club (NAC). This club aims to create and motivate the interest of students towards the wonders of the sky. This page presents a platform for students who want to know the key events and activities happening in the fields of astronomy at NISER, the equipment we use to study the sky, and some of the beautiful moments of the sky captured by our beloved members. Not to forget about the auspicious magazine of NISER Astronomy Club, KSHITIJ, which takes you to the dive into the ocean of space.</p>
        <p>We are a group of undergraduate members of the NISER Astronomy Club working in the footsteps of the club founder, late Debasish Jena, working towards inspiring students to do research in Space and Astronomy and unravel the mysteries of the universe.</p>
        <p>Explore the page and get the latest updates of astronomical events at NISER (such as mega-events, talks, observation sessions, astrophotography tutorials, etc.) that happened in the past and will commence in the future.</p>
      </div>

      {/* ANY UPCOMING/NEW EVENTS */}
      <div id="whats-new" className='section-home'>
        <h2>What&apos;s New</h2>
        <div className="whats-new-grid">

          {upcomingEvents}

        </div>
      </div>

      {/* SHOW RECENT ASTROPHOTOGRAPHS */}
      <div id="home-gallery" className='section-home'>
        <h2>Gallery</h2>
        <p className='page-description'>Some of the beautiful moments of the sky captured by our beloved members.</p>
        <div className="gallery-grid">
          {picsData.map(({ id, object, image, photographer, description }: AstroProps) => (
            <AstropicCard photographer={photographer} id={id} object={object} description={description} image={image} key={id} />
          ))}
        </div>
        <button className='btn'><Link href="/gallery">See More</Link></button>
      </div>

      {/* NEWSLETTER SECTION */}
      <div id="newsletter" className='section-home'>
        <Image src={'/event_horizon.jpg'} alt='event horizon' width={300} height={500}></Image>
        <div className="newsletter-content">
          <h2>Event Horizon</h2>
          <h3>The Monthly NAC Newsletter</h3>
          <p>The Astronomy Club Monthly Newsletter will be your ultimate passport to explore the furthest reaches of space, right from the comfort of your inbox!</p>
          <p>It will provide a curated collection of astronomical insights, celestial highlights, and educational resources that will ignite your passion for the mysteries of space. Whether you are a seasoned astronomer or simply fascinated by the cosmos, our newsletter is designed to cater to all levels of knowledge and enthusiasm.</p>
          {/* <button className='btn'><a target='_blank' href='https://drive.google.com/file/d/1tN4aYEysrj8TeM97y28Z6If_-Ir8flR6/view?usp=sharing'>Read Latest</a></button> */}
          <button className='btn'><a target='_blank' href='https://drive.google.com/drive/u/2/folders/1ObmIzxPWnGn2fG4HpaiMYrB3sjlxtvAl'>View All</a></button>
          <p className="credits">Image credit: Getty Images</p>
        </div>
      </div>

      {/* ṂAGAZINE SECTION */}
      <div id="magazine" className='section-home'>
        <div className="magazine-content">
          <h2>Kshitij</h2>
          <h3>Our in-house magazine encompassing all fields of astronomy.</h3>
          <p>Through Kshitij, the innate passion of our club members towards astronomy is accounted through academic articles, puzzles and details of various activities the club has undertaken. Not just limited to the NISER fraternity, we have had astronomy enthusiasts everywhere, including IISERs to contribute to the magazine.
            <br />The foremost aim of this magazine is to inspire all its readers, towards the beauty we Astronomy enthusiasts derive from the night sky while imagining the depth of the space through our small eyes.</p>
          {/* <button className='btn'><a href=''>Contribute</a></button> */}
        </div>
        <div className="magazine-previews">

          {/* SHOW THE LAST 4 ISSUES, CHANGE THE SLICE VALUE TO DETERMINE WHAT GETS DISPLAYED */}
          {magazineData.magazines.slice(0,6).map(({ id, link, coverPage, issue, releaseMonth, description }: MagazineProps) => (

            <figure key={id}>
                <a href={link} target="_blank">
                  <Image src={coverPage} alt={issue} width={200} height={460}></Image>
                  <figcaption>{issue}<br /><span>{releaseMonth}</span></figcaption>
                  <NewSticker releaseMonth={releaseMonth}></NewSticker>
                </a>
              </figure>
          ))}

          <button className='btn'><Link href="/magazine">View all editions</Link></button>

        </div>
      </div>
    </main>
  )
}
