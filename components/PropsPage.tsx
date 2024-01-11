export interface TeamProps {
    id:string, name:string, batch:string, image:string, role:string, email:string
}

export interface FICProps {
    id:string, name:string, image:string, designation:string, school:string
}

export interface EventProps {
    id:string, eventName:string, eventDate:string, shortDesc:string, images:string, blogEntry:string
}

export interface TalkItemProps {
    id:string, title: string, date: string, speaker: string, speaker_desc: string, poster: string, youtubeID: string, abstract: string
}