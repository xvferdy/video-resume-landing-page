import React from "react";
import Image from "next/image";

function GetStarted() {
  return (
    <section id="get-started" className="get-started">
      <div className="title">
        <h3>Simple steps to glory</h3>
        <h2>How to get started?</h2>
      </div>
      <div className="container get-started__container">
        {/* USER */}
        <div className="get-started__user">
          {/* USER IMG */}
          <div className="get-started__user-image">
            <Image
              src="/assets/started-bg.png"
              width={424}
              height={507}
              alt="User"
            />
            {/* USER IMG - SIGNUP */}
            <div className="signup">
              <div className="signup-image">
                <Image
                  src="/assets/check-circle.png"
                  width={24}
                  height={24}
                  alt="Check"
                />
              </div>
              <h4>The best decision</h4>
              <small>June 2021 - 128 signups</small>
            </div>
            {/* USER IMG - REVIEW */}
            <div className="review">
              <Image
                src="/assets/started-avatar.png"
                width={64}
                height={64}
                alt="Review"
              />
              <h4>Michael Yen</h4>
              <small>Content Writer</small>
              <div className="star">
                <p className="star-num">5.0</p>
                {[...Array(5)].map((e, i) => (
                  <Image
                    src="/assets/star.png"
                    width={16}
                    height={16}
                    alt="Star"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="get-started__content"></div>
      </div>
    </section>
  );
}

export default GetStarted;
