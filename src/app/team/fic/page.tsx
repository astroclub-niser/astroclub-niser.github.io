import { Metadata } from "next";
import { promises as fs } from 'fs';
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons'
const { library, config } = require('@fortawesome/fontawesome-svg-core');
library.add(faEnvelope, faLinkedin, faInstagram,)

import { FICProps } from "../../../../components/PropsPage";

export const metadata: Metadata = {
  title: 'FICs | NISER Astronomy Club',
  description: 'We are the Astronomy Club of NISER, Bhubaneswar',
}

export default async function FICs() {
  const teamFile = await fs.readFile(process.cwd() + '/data/team.json', 'utf8');
  const teamData = JSON.parse(teamFile);
  return (
    <main id="section-team">
      <h1 className="page-heading">Meet Our Team</h1>
      <h2 className="team-heading">Faculty Incharges</h2>

      <div className="team-grid">
        {teamData.fics.map(({ id, name, image, designation, school, email, website}: FICProps) => (
          <figure className="person-card" key={id}>
            <Image src={`/team/${image}`} width={230} height={230} alt={`${name}`}/>
            <figcaption>
              <p className="person-name">{name}</p>
              <p className="person-role">{designation}</p>
              <p className="person-batch">{school}</p>
              <ul className="person-socials">
                <li>
                  <a href={`mailto:${email}`} target="_blank" rel="noreferrer" className="mx-sm-2 mx-1">
                    <FontAwesomeIcon icon={faEnvelope} className="" style={{ backgroundColor: '#0000' }} />
                  </a>
                </li>
                {website &&
                  <li>
                    <a href={website} target="_blank" rel="noreferrer" className="mx-sm-2 mx-1">
                      <FontAwesomeIcon icon={faLink} className="" style={{ backgroundColor: '#0000' }} />
                    </a>
                  </li>
                }
              </ul>
            </figcaption>
          </figure>
        ))}
      </div>

    </main>
  )
}

// export default async team
