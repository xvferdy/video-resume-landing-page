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
              <div className="signup-text">
                <h4>The best decision</h4>
                <small>June 2021 - 128 signups</small>
              </div>
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

        {/* CONTENT */}
        <div className="get-started__content">
          {[...Array(4)].map((e, i) => (
            <article className="get-started__content-card">
              <div className="card-image">
                <Image
                  src="/assets/stack.png"
                  width={24}
                  height={24}
                  alt="Icon"
                />
              </div>

              <div className="card-num">01</div>
              <h4>Create an account</h4>
              <small>
                You need to create an account. You can do this by clicking on
                the Sign up button above.
              </small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
