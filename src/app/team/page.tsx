import { Metadata } from "next";
import { promises as fs } from 'fs';
import Image from "next/image";

import { AddSocialIcon, TeamProps } from '../../../components/PropsPage'

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
        {teamData.present.map(({ id, name, batch, image, role, email, insta, linkedin, other, dept }: TeamProps) => (
          <figure className="person-card" key={id}>
            <Image src={`/team/${image}`} width={230} height={230} alt={`${name}`} />
            <figcaption>
              <p className="person-name">{name}</p>
              <p className="person-batch">Batch {batch} ({dept})</p>
              <p className="person-role">{role}</p>
              <ul className="person-socials" >
                <AddSocialIcon link={email} type='email' />
                <AddSocialIcon link={insta} type='insta' />
                <AddSocialIcon link={linkedin} type='linkedin' />
                <AddSocialIcon link={other} type='other' />
              </ul>
            </figcaption>
          </figure>
        ))}
      </div>

      <h2 className="team-heading">Advisory Committee</h2>
      <h3 className="team-heading-year">2023-24</h3>


      <div className="team-grid">
        {teamData.advisory.map(({ id, name, batch, image, role, email, insta, linkedin, other, dept }: TeamProps) => (
          <figure className="person-card" key={id}>
            <Image src={`/team/${image}`} width={230} height={230} alt={`${name}`} />
            <figcaption>
              <p className="person-name">{name}</p>
              <p className="person-batch">Batch {batch} ({dept})</p>
              <ul className="person-socials">
                <AddSocialIcon link={email} type='email' />
                <AddSocialIcon link={insta} type='insta' />
                <AddSocialIcon link={linkedin} type='linkedin' />
                <AddSocialIcon link={other} type='other' />
              </ul>
            </figcaption>
          </figure>
        ))}
      </div>

    </main>
  )
}

// export default async team