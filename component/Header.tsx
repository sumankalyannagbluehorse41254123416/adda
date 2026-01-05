"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="container">
        <div className="header_inner">
          {/* Logo */}
          <Link className="logo" href="/">
            <Image
              src="https://adda.net.in/assets/img/logo.png"
              alt="Adda Inn"
              width={160}
              height={60}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="main_nav">
            <ul>
              <li className="nav_item">
                <Link className="nav_link" href="/about-us">
                  About Us
                </Link>
              </li>
              <li className="nav_item">
                <Link className="nav_link" href="/room">
                  Rooms
                </Link>
              </li>
              <li className="nav_item">
                <Link className="nav_link" href="/restaurant">
                  Restaurant
                </Link>
              </li>
              <li className="nav_item">
                <Link className="nav_link" href="/banquet">
                  Banquet
                </Link>
              </li>
              <li className="nav_item">
                <Link className="nav_link" href="/gallery">
                  Gallery
                </Link>
              </li>
              <li className="nav_item">
                <Link className="nav_link" href="/contactus">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
          <div className="mobile_nav">
            <button
              className="toggle-menu-button"
              onClick={() => setIsOpen(true)}
              aria-label="Open Menu">
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </button>
            <div className={`mn_wrap ${isOpen ? "open" : ""}`}>
              <button
                className="mn_close"
                onClick={() => setIsOpen(false)}
                aria-label="Close Menu">
                ×
              </button>

              <div className="mn_inner">
                <h3>Menu</h3>
                <ul>
                  <li>
                    <Link href="/" onClick={() => setIsOpen(false)}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us" onClick={() => setIsOpen(false)}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/room" onClick={() => setIsOpen(false)}>
                      Rooms
                    </Link>
                  </li>
                  <li>
                    <Link href="/restaurant" onClick={() => setIsOpen(false)}>
                      Restaurant
                    </Link>
                  </li>
                  <li>
                    <Link href="/banquet" onClick={() => setIsOpen(false)}>
                      Banquet
                    </Link>
                  </li>
                  <li>
                    <Link href="/gallery" onClick={() => setIsOpen(false)}>
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link href="/contactus" onClick={() => setIsOpen(false)}>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
