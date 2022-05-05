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
              <a className="btn btn--icon">
                <img
                  className="icon"
                  src="/assets/play-circle.png"
                  width={24}
                  height={24}
                  alt="icon"
                />{" "}
                Watch Demo
              </a>
            </Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className="header__video">
          <Image
            src="/assets/group-7.png"
            width={749}
            height={553}
            alt="Video Player"
          />

          <div className="img-float">
            <Image
              src="/assets/group-1.png"
              width={231}
              height={59}
              alt="Photography"
            />
          </div>
          <div className="img-float">
            <Image
              src="/assets/group-2.png"
              width={301}
              height={43}
              alt="Email"
            />
          </div>
          <div className="img-float">
            <Image
              src="/assets/group-3.png"
              width={239}
              height={60}
              alt="Person"
            />
          </div>
          <div className="img-float">
            <Image
              src="/assets/group-4.png"
              width={244}
              height={67}
              alt="Content"
            />
          </div>
          <div className="img-float">
            <Image
              src="/assets/group-5.png"
              width={251}
              height={57}
              alt="Experience"
            />
          </div>
        </div>
      </div>
      <div className="header__brands">
        <Image src="/assets/brands.png" width={915} height={129} alt="Brands" />
      </div>
    </header>
  );
}

export default Header;
