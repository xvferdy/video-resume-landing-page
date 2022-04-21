import React from "react";

function Nav({ toggleSidebar }) {
  return (
    <nav className="nav">
      <div className="container nav__container">
        {/* HAMBURGER */}
        <button className="nav__hamburger-icon" onClick={toggleSidebar}>
          <img src="/assets/icon-menu.SVG" alt="Menu" />
        </button>

        {/* LOGO */}
        <a className="nav__logo" href="#">
          <img src="/assets/youtube.png" alt="logo" />
          <span href="#">Visume</span>
        </a>

        {/* LIST */}
        <ul className="nav__list">
          <li>
            <a href="#get-started">Get Started</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
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
