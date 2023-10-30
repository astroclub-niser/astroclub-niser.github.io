"use client";
import Image from "next/image"
import Link from "next/link"
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons'
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(globalThis.window.innerWidth < 1120)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const toggleNav = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  useEffect(() => {
    globalThis.window.addEventListener("resize", () => {
      const ismobile = globalThis.window.innerWidth < 900;
      if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
  }, [isMobile]);

  return (
    <nav className={`${isMobile ? "mobile" : "desktop"} ${isMobileOpen ? 'mobile-open': null}`}>

      <FontAwesomeIcon onClick={toggleNav} icon={faXmark} className="nav-triggers" id="nav-close" style={{ backgroundColor: '#0000' }} />

      <div className="logo">
        <Link href="/">
          <Image src="/logos/nac_logo_dark_square_bgremoved.png" width={120} height={120} alt="NAC logo" />
        </Link>
      </div>

      <ul className="xl:flex hidden">

        <li><Link onClick={toggleNav} href="/about">About&nbsp;Us</Link></li>
        <li><Link onClick={toggleNav} href="/gallery">Gallery</Link></li>
        <li><Link onClick={toggleNav} href="/events">Events</Link></li>
        <li className="dropdown"><Link onClick={toggleNav} href="/talks">Talks <FontAwesomeIcon icon={faCaretDown} className="" style={{ backgroundColor: '#0000' }} /></Link>
          <div className="dropdown-content">
            <Link onClick={toggleNav} href="/talks#upcoming">Upcoming</Link>
            <Link onClick={toggleNav} href="/talks#year23">2023</Link>
            <Link onClick={toggleNav} href="/talks#year22">2022</Link>
          </div>
        </li>
        <li><Link onClick={toggleNav} href="/projects">Projects</Link></li>
        <li><Link onClick={toggleNav} href="/equipments">Equipment</Link></li>
        <li className="dropdown"><Link onClick={toggleNav} href="/team">Team <FontAwesomeIcon icon={faCaretDown} className="" style={{ backgroundColor: '#0000' }} /></Link>
          <div className="dropdown-content">
            <Link onClick={toggleNav} href="/team">Present Members</Link>
            <Link onClick={toggleNav} href="/team/fic">Faculty Incharges</Link>
            <Link onClick={toggleNav} href="/team/alumni">Alumni</Link>
          </div>
        </li>
        <li><Link onClick={toggleNav} href="/magazine">Kshitij</Link></li>
        <li><Link onClick={toggleNav} href="#contact">Contact&nbsp;Us</Link></li>

      </ul>

      <FontAwesomeIcon onClick={toggleNav} icon={faBarsStaggered} className="nav-triggers" id="nav-open" style={{ backgroundColor: '#0000' }} />

    </nav>
  )
}

export default Navbar
