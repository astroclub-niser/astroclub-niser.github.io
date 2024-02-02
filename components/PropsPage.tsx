import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons'
const { library, config } = require('@fortawesome/fontawesome-svg-core');
library.add(faEnvelope, faLinkedin, faInstagram)

export interface TeamProps {
    id:string, name:string, batch:number, image:string, role:string, email:string, insta:string, linkedin:string, caption:string, other:string, dept:string
}

export interface FICProps {
    id:string, name:string, image:string, designation:string, school:string, email: string, website: string
}

export interface EventProps {
    id:string, eventName:string, eventDate:string, shortDesc:string, images:string, blogEntry:string
}

export interface TalkItemProps {
    id:string, title: string, date: string, speaker: string, speaker_desc: string, poster: string, youtubeID: string, abstract: string
}

export function AddSocialIcon({ link, type }: { link: string, type: string }) {
    if (link) {
      if (type == 'insta') {
        return (
          <li>
            <a href={`https://www.instagram.com/${link}/`} target="_blank" rel="noreferrer" className="mx-sm-2 mx-1">
              <FontAwesomeIcon icon={faInstagram} className="" style={{ backgroundColor: '#0000' }} />
            </a>
          </li>
        )
      } else if (type == 'email') {
        return (
          <li>
            <a href={`mailto:${link}`} target="_blank" rel="noreferrer" className="mx-sm-2 mx-1">
              <FontAwesomeIcon icon={faEnvelope} className="" style={{ backgroundColor: '#0000' }} />
            </a>
          </li>
        )
      } else if (type == 'linkedin') {
        return (
          <li>
            <a href={`http://www.linkedin.com/in/${link}`} target="_blank" rel="noreferrer" className="mx-sm-2 mx-1">
              <FontAwesomeIcon icon={faLinkedin} className="" style={{ backgroundColor: '#0000' }} />
            </a>
          </li>
        )
      } else if (type == 'other') {
        return (
          <li>
            <a href={`${link}`} target="_blank" rel="noreferrer" className="mx-sm-2 mx-1">
              <FontAwesomeIcon icon={faLink} className="" style={{ backgroundColor: '#0000' }} />
            </a>
          </li>
        )
      }
    }
  }