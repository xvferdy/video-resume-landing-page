import React from "react";

function Sidebar({ isOpen, closeSidebar }) {
  const style = isOpen ? "sidebar sidebar--open" : "sidebar sidebar--closed";
  return (
    <>
      {isOpen && <div className="backdrop" onClick={closeSidebar} />}

      <nav className={style}>
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
      </nav>
    </>
  );
}

export default Sidebar;
