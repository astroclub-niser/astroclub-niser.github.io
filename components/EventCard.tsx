// 'use client'
import Image from "next/image";
import Link from "next/link";

export interface EventProps {
    id: string,
    eventName: string,
    eventDate: string,
    shortDesc: string,
    images: string,
    blogEntry: string
}

function ReadMore({ link }: { link: string }) {
    if (link) {
        return (
            <Link href={link}><button className="btn">Register Now</button></Link>
        )
    }
}

export default function EventCard({ id, eventName, eventDate, shortDesc, images, blogEntry }: EventProps) {
    return (
        <figure className="event" id={id}>
            <div className="event-img">
                <Image src={`/photos/${images[0]}`} width={500} height={500} alt={`${eventName}`} />
            </div>
            <div className="event-content">
                <p className="event-name">{eventName}</p>
                <p className="event-date">{eventDate}</p>
                <p className="event-desc">{shortDesc}</p>
                {/* <BlogEntryBtn blogEntry={blogEntry} />   */}
                <ReadMore link={blogEntry}></ReadMore>
                </div>
        </figure>
    )
}