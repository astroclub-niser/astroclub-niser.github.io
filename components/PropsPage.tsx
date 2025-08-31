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
    id:string, eventName:string, eventDate:string, shortDesc:string, images:string, eventLink:string
}

export interface TalkItemProps {
    id:string, title: string, date: string, speaker: string, speaker_desc: string, poster: string, youtubeID: string, abstract: string
}

export interface MagazineProps {
  id: string,
  link: string,
  coverPage: string,
  issue: string,
  releaseMonth: string,
  description: string
}

export function NewSticker({ releaseMonth }: { releaseMonth: string }) {
  // CHECK IF THE MAGAZINE IS RELEASED WITHIN TWO MONTHS
  // FROM THE CURRENT DAY
  // IF SO, ADD A NEW! STICKER 
  let now = Date.now();
  if (now - Date.parse(releaseMonth) < 5270400000) {
    return (
      <div className="new-sticker">
        <span className="sticker"></span>
        <span className="new">NEW!</span>
      </div>
    )
  }
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