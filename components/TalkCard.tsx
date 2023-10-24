'use client'
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
const { library, config } = require('@fortawesome/fontawesome-svg-core');
library.add(faCaretDown)
import { useState } from 'react';

export interface TalkProps {
    id:string, title: string, date: string, speaker: string, speaker_desc: string, poster: string, youtubeID: string, abstract: string
}

function Preview({ youtubeID, poster }: TalkProps) {
    const hasYoutube = youtubeID.length == 0 ? false : true;
    if (youtubeID) {
        return (
            <iframe src={`https://www.youtube.com/embed/${hasYoutube}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        )
    } else {
        return (
            <Image src={`/talks/${poster}`} width={230} height={230} alt={`${poster}`} />
        )
    }
}

export default function TalkCard({ id, title, date, speaker, speaker_desc, poster, youtubeID, abstract }: TalkProps) {
    const [isShowing, setIsShowing] = useState(false);
    const toggleAbstract = () => {
        setIsShowing(!isShowing);
    }
    // const hasYoutube = youtubeID == "" ? false : true;

    return (
        <figure className="talk" key={id}>
            {/* {if (hasYoutube) { */}
                <iframe src={`https://www.youtube.com/embed/${youtubeID}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            {/* // }} */}
            {/* <Preview youtubeID={youtubeID} poster={poster} /> */}
            {/* <Image src={`/talks/${images[0]}`} width={230} height={230} alt={`${poster}`} /> */}
            <p className="talk-title">{title}</p>
            <p className="talk-date">{date}</p>
            <p className="talk-speaker">{speaker}</p>
            <p className="talk-speaker-desc">{speaker_desc}</p>
            <p className="talk-abstract-btn" onClick={toggleAbstract}>Abstract <FontAwesomeIcon icon={faCaretDown} className="" style={{ backgroundColor: '#0000' }} /></p>
            <p className="talk-abstract" style={{ height: isShowing ? 'auto' : 0 }}>{abstract}</p>
        </figure>
    )
}