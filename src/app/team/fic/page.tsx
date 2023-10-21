import { Metadata } from "next";
import { promises as fs } from 'fs';
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const { library, config } = require('@fortawesome/fontawesome-svg-core');
library.add(faEnvelope, faLinkedin, faInstagram,)

export const metadata: Metadata = {
  title: 'FICs | NISER Astronomy Club',
  description: 'We are the Astronomy Club of NISER, Bhubaneswar',
}

export default async function Team() {
  const teamFile = await fs.readFile(process.cwd() + '/data/team.json', 'utf8');
  const teamData = JSON.parse(teamFile);
  return (
    <main id="section-team">
      <h1 className="page-heading">Meet Our Team</h1>
      <h2 className="team-heading">Faculty Incharges</h2>

      <div className="team-grid">
        {teamData.fics.map(({ id, name, image, designation, school}) => (
          <figure className="person-card">
            <Image src={`/team/${image}`} width={230} height={230} alt={`${name}`} />
            <figcaption>
              <p className="person-name">{name}</p>
              <p className="person-role">{designation}</p>
              <p className="person-batch">{school}</p>
            </figcaption>
          </figure>
        ))}
      </div>

    </main>
  )
}

// export default async team