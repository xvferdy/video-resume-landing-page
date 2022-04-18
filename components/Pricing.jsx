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
        <div className="pricing__classes">
          {plans.map((plan, i) => (
            <article>
              <h4>{plan.name}</h4>
              {typeof plan.price === "number" ? (
                <>
                  <h3>$ {plan.price}</h3>
                  <p>per project</p>
                </>
              ) : (
                <p>{plan.price}</p>
              )}
              <hr className="divider" />

              <ul>
                {plan.benefits.map((benefit) => (
                  <li>
                    <Image
                      src="/assets/check-circle2.png"
                      width={24}
                      height={24}
                      alt="Icon"
                    />
                    <p>{benefit}</p>
                  </li>
                ))}
              </ul>
              <a className="btn btn--plan btn--plan-best" href="#">
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
