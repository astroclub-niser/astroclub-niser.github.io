import { Metadata } from "next";
import { promises as fs } from 'fs';
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons'
import { AddSocialIcon, TeamProps } from "../../../../components/PropsPage";
const { library, config } = require('@fortawesome/fontawesome-svg-core');
library.add(faEnvelope, faLinkedin, faInstagram,)

// import Modal from "../../../../components/Modal";
// import ModalOpener from "../../../../components/Modal";

export const metadata: Metadata = {
  title: 'Decorated Members | NISER Astronomy Club',
  description: 'We are the Astronomy Club of NISER, Bhubaneswar',
}

function OpenPopup({ text }: { text: string }) {
  alert(text)
}

export default async function Alumni() {
  const teamFile = await fs.readFile(process.cwd() + '/data/alumni.json', 'utf8');
  const teamData = JSON.parse(teamFile);

  // auto sorting does not work
  // teamData.alumni.sort((x, y) => {
  //   if (x.batch != y.batch) {
  //     return x.batch - y.batch
  //   }
  //   return x.name.localeCompare(y.name);
  // });


  return (
    <main id="section-team">
      <h1 className="page-heading">Decorated Members</h1>
      <div className="team-grid">
        {teamData.alumni.map(({ id, name, batch, image, role, email, insta, linkedin, other, caption, dept }: TeamProps) => (

          <figure className="person-card" key={id}>
            <Image src={`/team/${image}`} width={230} height={230} alt={`${name}`} />
            <figcaption>
              <p className="person-name">{name}</p>
              {batch < 2010 &&
                <p className="person-extra">Founder</p>
              }
              {role &&
                <p className="person-role">{role}</p>
              }
              <p className="person-batch">Batch {batch} ({dept})</p>
              <ul className="person-socials">
                <AddSocialIcon link={email} type='email' />
                <AddSocialIcon link={insta} type='insta' />
                <AddSocialIcon link={linkedin} type='linkedin' />
                <AddSocialIcon link={other} type='other' />
                {/*{caption &&
                  <li>
                    <Link href='#' onClick={() => <Modal txt={caption} />} rel="noreferrer" className="mx-sm-2 mx-1">
                      <FontAwesomeIcon icon={faComment} className="" style={{ backgroundColor: '#0000' }} />
                    </Link> 
                    <ModalOpener txt={caption}/>
                  </li>
                } */}
              </ul>
            </figcaption>
            {/* {show && <Modal message={caption}/>} */}
          </figure>

        ))}
      </div>
    </main>
  )
}

// export default async team