import { Metadata } from "next";
import { promises as fs } from 'fs';
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const { library, config } = require('@fortawesome/fontawesome-svg-core');
library.add(faEnvelope, faLinkedin, faInstagram,)

export const metadata: Metadata = {
  title: 'Decorated Members | NISER Astronomy Club',
  description: 'We are the Astronomy Club of NISER, Bhubaneswar',
}

export default async function Alumni() {
  const teamFile = await fs.readFile(process.cwd() + '/data/team.json', 'utf8');
  const teamData = JSON.parse(teamFile);
  return (
    <main id="section-team">
      <h1 className="page-heading">Decorated Members</h1>
      {/* <h2 className="team-heading">Core Committee 2023</h2> */}
      <p className="page-description" >Come Back later!</p>
      {/* <div className="team-grid">
        {teamData.alumni.map(({ id, name, batch, image, role, email }) => (
          <figure className="person-card">
            <Image src={`/team/${image}`} width={230} height={230} alt={`${name}`} />
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
      </div> */}

    </main>
  )
}

// export default async team