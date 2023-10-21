// "use client";
import Image from "next/image"
import Link from "next/link"
// import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
const { library, config } = require('@fortawesome/fontawesome-svg-core');
library.add(faCaretDown)

const Navbar = () => {
  // const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav>

      <div className="logo">
        <Link href="/">
          <Image src="/logos/nac_logo_dark_square_bgremoved.png" width={120} height={120} alt="NAC logo" />
        </Link>
      </div>

      <ul className="xl:flex hidden">

        <li><Link href="/about">About&nbsp;Us</Link></li>
        <li><Link href="/gallery">Gallery</Link></li>
        <li><Link href="/events">Events</Link></li>
        {/* <li> <Link href="/projects">Projects</Link></li> */}
        <li><Link href="/talks">Talks</Link></li>
        <li><Link href="/equipments">Equipment</Link></li>
        <li className="dropdown"><Link href="/team">Team <FontAwesomeIcon icon={faCaretDown} className="" style={{ backgroundColor: '#0000' }} /></Link>
          <div className="dropdown-content">
            <Link href="/team">Present Members</Link>
            <Link href="/team/fic">Faculty Incharges</Link>
            <Link href="/team/alumni">Alumni</Link>
          </div>
        </li>
        <li><Link href="/magazine">Kshitij</Link></li>
        <li><Link href="#contact">Contact&nbsp;Us</Link></li>

      </ul>

    </nav>
  )
}

export default Navbar