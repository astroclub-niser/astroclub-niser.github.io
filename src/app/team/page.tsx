import { Metadata } from "next";
import { promises as fs } from 'fs';
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const { library, config } = require('@fortawesome/fontawesome-svg-core');
library.add(faEnvelope, faLinkedin, faInstagram)

import { TeamProps } from '../../../components/PropsPage'

export const metadata: Metadata = {
  title: 'The Team | NISER Astronomy Club',
  description: 'We are the Astronomy Club of NISER, Bhubaneswar',
}

export default async function Team() {
  const teamFile = await fs.readFile(process.cwd() + '/data/team.json', 'utf8');
  const teamData = JSON.parse(teamFile);
  return (
    <main id="section-team">
      <h1 className="page-heading">Meet Our Team</h1>
      
      <h2 className="team-heading">Core Committee</h2>
      <h3 className="team-heading-year">2023-24</h3>

      <div className="team-grid">
        {teamData.present.map(({ id, name, batch, image, role, email }: TeamProps) => (
          <figure className="person-card" key={id}>
            <Image src={`/team/${image}`} width={230} height={230} alt={`${name}`}/>
            <figcaption>
              <p className="person-name">{name}</p>
              <p className="person-batch">Batch {batch}</p>
              <p className="person-role">{role}</p>
              <ul className="person-socials">
                <li>
                  <a href={`mailto:${email}`} target="_blank" rel="noreferrer" className="mx-sm-2 mx-1">
                    <FontAwesomeIcon icon={faEnvelope} className="" style={{ backgroundColor: '#0000' }} />
                  </a>
                </li>
              </ul>
            </figcaption>
          </figure>
        ))}
      </div>

      <h2 className="team-heading">Advisory Committee</h2>
      <h3 className="team-heading-year">2023-24</h3>


      <div className="team-grid">
        {teamData.advisory.map(({ id, name, batch, image, role, email }: TeamProps) => (
          <figure className="person-card" key={id}>
            <Image src={`/team/${image}`} width={230} height={230} alt={`${name}`}/>
            <figcaption>
              <p className="person-name">{name}</p>
              <p className="person-batch">Batch {batch}</p>
              {/* <p className="person-role">{role}</p> */}
              <ul className="person-socials">
                <li>
                  <a href={`mailto:${email}`} target="_blank" rel="noreferrer" className="mx-sm-2 mx-1">
                    <FontAwesomeIcon icon={faEnvelope} className="" style={{ backgroundColor: '#0000' }} />
                  </a>
                </li>
              </ul>
            </figcaption>
          </figure>
        ))}
      </div>

    </main>
  )
}

// export default async team