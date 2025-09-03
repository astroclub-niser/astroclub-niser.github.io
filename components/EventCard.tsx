// 'use client'
import Image from "next/image";
import Link from "next/link";

export interface EventProps {
    key: string,
    eventName: string,
    eventDate: string,
    shortDesc: string,
    images: string,
    eventLink: string
}

function ReadMore({ link }: { link: string }) {
    if (link) {
        return (
            <Link href={link}><button className="btn">More Details</button></Link>
        )
    }
}

export default function EventCard({ key, eventName, eventDate, shortDesc, images, eventLink }: EventProps) {
    return (
        <figure className="event" key={key}>
            <div className="event-img">
                <Image src={`/photos/${images[0]}`} width={500} height={500} alt={`${eventName}`} />
            </div>
            <div className="event-content">
                <p className="event-name">{eventName}</p>
                <p className="event-date">{eventDate}</p>
                <p className="event-desc">{shortDesc}</p>
                <ReadMore link={eventLink}></ReadMore>
                </div>
        </figure>
    )
}