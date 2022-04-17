import React from "react";
import Image from "next/image";

function Nav() {
  return (
    <nav className="nav">
      <div className="container nav__container">
        {/* LOGO */}
        <div className="nav__logo">
          {/* <Image src="/assets/youtube.png" width={33} height={33} alt="logo" /> */}
          <h3>Visume</h3>
        </div>
        {/* LIST */}
        <ul className="nav__list">
          <li>Get Started</li>
          <li>About</li>
          <li>Pricing</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </ul>
        {/* CTA */}
        <div className="nav__cta">
          <a href="#" className="btn">
            Sign in
          </a>
          <a href="#" className="btn btn--primary">
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
