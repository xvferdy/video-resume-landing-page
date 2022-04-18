import React from "react";
import Link from "next/link";
import Image from "next/image";

function About() {
  return (
    <section id="about" className="about">
      <div className="title">
        <h3>We’re on a mission</h3>
        <h2>About Visume</h2>
      </div>
      <div className="container about__container">
        {/* CONTENT */}
        <div className="about__content">
          <p className="sub-title">
            Trusted by people around <span>38 countries</span>
          </p>
          <p>
            With the Gen Z going the video way, the future rectruitement is
            going to be through video resumes. It saves the HR people a ton of
            time in screening profiles. And it makes it more human to present
            themseleves than plain texts for the employees.
          </p>
          <p>
            With 20+ years on the video production industry, you’re on the right
            hands.
          </p>
          <Link href="#get-started" passHref>
            <a className="btn btn--primary">Get Started</a>
          </Link>
          <Link href="#get-started" passHref>
            <a className="btn btn--icon">
              <Image
                className="icon"
                src="/assets/play-circle.png"
                width={24}
                height={24}
                alt="Icon"
              />{" "}
              Watch Demo
            </a>
          </Link>
        </div>

        {/* USER */}
        <div className="about__user">
          {/* USER IMG */}
          <div className="about__user-image">
            <Image
              src="/assets/about-bg.png"
              width={424}
              height={560}
              alt="Icon"
            />

            {/* USER IMG - REVIEW */}
            <div className="review">
              <Image
                src="/assets/about-avatar.png"
                width={64}
                height={64}
                alt="User"
              />
              <h4>Danny Mambo</h4>
              <small>Founder of Visume</small>
              <small>
                “If you can touch someone's life by contributing to their
                success, you're god.”
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
