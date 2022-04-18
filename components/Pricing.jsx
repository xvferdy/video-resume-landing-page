import React from "react";
import Image from "next/image";

function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: 12,
      benefits: [
        "20 themes",
        "60 music files",
        "80 audio effects",
        "8 language support",
        "Email Support",
      ],
      promo: false,
    },
    {
      name: "All Rounder",
      price: 12,
      benefits: [
        "150 themes",
        "320 music files",
        "500 audio effects",
        "80+ language support",
        "24/7 Support",
      ],
      promo: true,
    },
    {
      name: "Super Hero",
      price:
        "Get in touch with us to discuss on your requirements and pricing.",
      benefits: [
        "Everything From All Rounder",
        "24/7 Priority Support",
        "And many more..",
      ],
      promo: false,
    },
  ];

  return (
    <section id="pricing" className="pricing">
      <div className="title">
        <h3>Pricing</h3>
        <h2>How much to pay?</h2>
      </div>
      <div className="container pricing__container">
        <p>You can choose the most app pricing option for your needs.</p>
        <div className="pricing__classes-container">
          {plans.map((plan, i) => (
            <article
              className={
                !plan.promo
                  ? "pricing__plan"
                  : "pricing__plan pricing__plan--promo"
              }
            >
              {/* HEADER */}
              <div className="pricing-header">
                <h4 className="pricing__plan-name">{plan.name}</h4>
                {typeof plan.price === "number" ? (
                  <div>
                    <h3 className="pricing__plan-price">$ {plan.price}</h3>
                    <p className="pricing__plan-info">per project</p>
                  </div>
                ) : (
                  <p className="pricing__plan-info">{plan.price}</p>
                )}
              </div>

              <hr className="divider" />

              {/* LIST */}
              <ul>
                {plan.benefits.map((benefit) => (
                  <li className="pricing__plan-list">
                    <Image
                      className="list-icon"
                      src="/assets/check-circle2.png"
                      width={24}
                      height={24}
                      alt="Icon"
                    />
                    <p className="pricing__plan-benefit">{benefit}</p>
                  </li>
                ))}
              </ul>
              <a
                className={
                  !plan.promo
                    ? "btn btn--plan"
                    : "btn btn--plan btn--plan-promo"
                }
                href="#"
              >
                Get Started
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
