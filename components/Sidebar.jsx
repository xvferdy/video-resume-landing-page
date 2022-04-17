import React from "react";
import Image from "next/image";

function Sidebar({ isOpen, closeSidebar }) {
  const style = isOpen ? "sidebar sidebar--open" : "sidebar sidebar--closed";
  console.log(style);
  return (
    <>
      {isOpen && <div className="backdrop" onClick={closeSidebar} />}

      <nav className={style}>
        {/* <Image src="/assets/icon-menu.SVG" width={15} height={15} alt="Close" /> */}

        <ul>
          <li>
            <a className="btn" href="#" onClick={closeSidebar}>
              Home
            </a>
          </li>
          <li>
            <a className="btn" href="#get-started" onClick={closeSidebar}>
              Get Started
            </a>
          </li>
          <li>
            <a className="btn" href="#about" onClick={closeSidebar}>
              About
            </a>
          </li>
          <li>
            <a className="btn" href="#pricing" onClick={closeSidebar}>
              Pricing
            </a>
          </li>
          <li>
            <a className="btn" href="#testimonials" onClick={closeSidebar}>
              Testimonials
            </a>
          </li>
          <li>
            <a className="btn" href="#contact" onClick={closeSidebar}>
              Contact
            </a>
          </li>
        </ul>

        {/* <button className="sidebar__close-icon" onClick={closeSidebar}>
          <img src="/assets/icon-close.SVG" alt="Close" />
        </button> */}
      </nav>
    </>
  );
}

export default Sidebar;
