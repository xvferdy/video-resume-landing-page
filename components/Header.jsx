import React from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header id="header" className="header">
      <div className="container header__container">
        {/* LEFT */}
        <div className="header__content">
          <h3>Stand out of the crowd</h3>
          <h1>Create the Next Gen Video Resume</h1>
          <p>
            Get hired quickly by giving your resume the video look it deserves.
          </p>
          <div className="header__content-cta">
            <Link href="#get-started" passHref>
              <a className="btn btn--primary">Get Started</a>
            </Link>
            <Link href="#get-started" passHref>
              <a className="btn">
                <Image src="/assets/play-circle.png" width={24} height={24} />{" "}
                Watch Demo
              </a>
            </Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className="header__video">
          <Image
            src="/assets/header-goup.png"
            width={749}
            height={553}
            alt="Video Player"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
