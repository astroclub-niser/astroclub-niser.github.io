import Image from 'next/image'
import Link from 'next/link'
import { promises as fs } from 'fs';
import AstropicCard from '../../components/AstropicCard';
// import React from "react";

export default async function Home() {
  const picsFile = await fs.readFile(process.cwd() + '/data/astropics.json', 'utf8');
  const picsData = JSON.parse(picsFile).astrophotographs.slice(0, 6);

  return (
    <main>

      <div id="hero" className='section-home'>
        {/* <Image src={'/bg.jpg'} alt='hero' width={1920} height={1080}></Image> */}
        <h1>NISER Astronomy Club</h1>
        <p>Credit: Hubble?</p>
      </div>

      <div id="hello" className='section-home'>
        <p>Hello space enthusiasts! Welcome to the official page of NISER Astronomy Club (NAC). This club aims to create and motivate the interest of students towards the wonders of the sky. This page presents a platform for students who want to know the key events and activities happening in the fields of astronomy at NISER, the equipment we use to study the sky, and some of the beautiful moments of the sky captured by our beloved members. Not to forget about the auspicious magazine of NISER Astronomy Club, KSHITIJ, which takes you to the dive into the ocean of space.</p>
        <p>We are a group of undergraduate members of the NISER Astronomy Club working in the footsteps of the club founder, late Debasish Jena, working towards inspiring students to do research in Space and Astronomy and unravel the mysteries of the universe.</p>
        <p>Explore the page and get the latest updates of astronomical events at NISER (such as mega-events, talks, observation sessions, astrophotography tutorials, etc.) that happened in the past and will commence in the future.</p>
      </div>
      <div id="home-gallery" className='section-home'>
        <h2>Gallery</h2>
        <p>Some of the beautiful moments of the sky captured by our beloved members.</p>
        <div className="gallery-grid">
          {picsData.map(({ id, object, image, description }) => (
            <AstropicCard object={object} description={description} img={image} key={id}/>
          ))}
        </div>
        <button className='btn'><Link href="/gallery">See More</Link></button>
      </div>

      <div id="newsletter" className='section-home'>
        <Image src={'/event_horizon.jpg'} alt='event horizon' width={300} height={500}></Image>
        <div className="newsletter-content">
          <h2>Event Horizon</h2>
          <h3>The Monthly NAC Newsletter</h3>
          <p>The Astronomy Club Monthly Newsletter will be your ultimate passport to explore the furthest reaches of space, right from the comfort of your inbox!</p>
          <p>It will provide a curated collection of astronomical insights, celestial highlights, and educational resources that will ignite your passion for the mysteries of space. Whether you are a seasoned astronomer or simply fascinated by the cosmos, our newsletter is designed to cater to all levels of knowledge and enthusiasm.</p>
          <button className='btn'><a href=''>Read Latest</a></button>
          <button className='btn'><a href=''>View All</a></button>
        </div>
      </div>

      <div id="whats-new" className='section-home'>
        <h2>What&apos;s New</h2>

      </div>

      <div id="magazine" className='section-home'>
        <div className="magazine-content">
          <h2>Kshitij</h2>
          <h3>The bi-annual, in-house magazine encompassing all fields of astronomy.</h3>
          <p>Through Kshitij, the innate passion of our club members towards astronomy is accounted through academic articles, puzzles and details of various activities the club has undertaken.
            The foremost aim of this magazine is to inspire the NISER fraternity and all its readers, towards the beauty we Astronomy enthusiasts derive from the night sky while imagining the depth of the space through our small eyes.</p>
          <button className='btn'><Link href="/magazine">Know More</Link></button>
          <button className='btn'><a href=''>Contribute</a></button>
        </div>
        <div className="magazine-previews">
          <figure>
            <a href="" target="_blank">
              <Image src={'/kshitij/Kshitij_May_2020.jpg'} alt='event horizon' width={200} height={460}></Image>
              <figcaption>Kshitij 1.0<br /><span>Dec 2020</span></figcaption>
            </a>
          </figure>
          <figure>
            <a href="" target="_blank">
              <Image src={'/kshitij/Kshitij_Dec_2020.jpg'} alt='event horizon' width={200} height={460}></Image>
              <figcaption>Kshitij 1.0<br /><span>Dec 2020</span></figcaption>
            </a>
          </figure>
          <figure>
            <a href="" target="_blank">
              <Image src={'/kshitij/Kshitij_Dec_2021.jpg'} alt='event horizon' width={200} height={460}></Image>
              <figcaption>Kshitij 1.0<br /><span>Dec 2020</span></figcaption>
            </a>
          </figure>
          <figure>
            <a href="https://drive.google.com/file/d/1kaqLiAXlc42GCPFabkorGOYLHxq18ROZ/view" title='Read this edition' target="_blank">
              <Image src={'/kshitij/Kshitij_Dec_2022.jpg'} alt='event horizon' width={200} height={460}></Image>
              <figcaption>Kshitij 1.0<br /><span>Dec 2020</span></figcaption>
            </a>
          </figure>
        </div>
      </div>
    </main>
  )
}
