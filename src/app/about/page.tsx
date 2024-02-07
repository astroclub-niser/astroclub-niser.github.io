import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: 'About Us | NISER Astronomy Club',
  description: 'We are the Astronomy Club of NISER, Bhubaneswar',
}

const About = () => {
  return (
    <main id="section-about">
      <div className="about-item about-beginning">
        <div className="content">
          <h2>The Beginning</h2>
          <p>Ajit Srivastav (Prof, IOP), Subhasish Basak (Prof, NISER), Himanshu Raj, Ved Prakash Roy and Swagat Saurav Mishra formed the club in 2008. The NISER campus did not even exist yet!</p>
          <p>Beautiful clear skies and a community of astronomy enthusiasts are in itself sufficient to justify our club, the NISER Astronomy Club (NAC). We are a community of enthusiasts who, simply put, want to experience and share the knowledge of astronomy as far and wide as possible. </p>
        </div>
        <div className="image-container">
          <Image src={'/photos/obs-1.jpg'} height={400} width={600} alt='observation session'></Image>
        </div>
      </div>
      <div className="about-item about-now">
        <div className="image-container">
          <Image src={'/photos/11inch-trails.jpg'} width={500} height={500} alt='11 inch time lapse image'></Image>
        </div>
        <div className="content">
          <h2>What We Do</h2>
          <p>NAC is a goal we accomplish by organizing many activities ranging from telescope observation sessions to outreach programs for school and college students. Armed with an inventory of observation equipment consisting of one 11-inch Celestron Alt-Azimuth Mount reflecting type with a wedge, an 8-inch Skywatcher Equatorial Mount reflecting type, a 6-inch Celestron Alt-Azimuth Mount refracting type, and ten 6-inch Equatorial Mount reflecting type telescopes, ably aided by binoculars, modern filters, self-guided scopes, and one CMOS camera; NAC has carried out a plentitude of activities like night-sky observation sessions involving astrophotography and university level experiments in astrophysics for its members.</p>
          <p>We have trained over 50 students in handling telescopes over the course of years. We also organize student talks, followed by discussions where students interact and learn from each other. These discussions and sessions are what hold NAC together.</p>
          <p>We are proud to have assisted in the Observation Test at the 10th International Olympiad in Astronomy and Astrophysics (IOAA). It is only natural that we collaborate with other Astronomy clubs and even other clubs of our institute, like the Arts Club or Literary Club, to promote a healthy learning environment and approach astronomy in many possible ways.</p>
          <p>All this is possible only because of our dedicated club members and our beloved FICs, who have been there for us throughout. We also owe a lot to the SPS and SEPS departments in NISER for assisting us whenever we asked.</p>
          {/* <p style={{color: '#888'}}>Logo Credits: Danush Shekar (B17)</p> */}
        </div>
      </div>
    </main>
  )
}

export default About