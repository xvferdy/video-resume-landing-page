import React from "react";
import Image from "next/image";

import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

function Testimonials() {
  const testimonials = [
    {
      img: "/assets/testimonial.png",
      name: "Linda Jermy",
      occupation: "Commerce Student",
      testimony:
        "“With the traditional resumes I used to apply for jobs and would get only a few calls. But after creating a video resume, I've got 9/10 calls. And I love the simplicity of the video creation process being a non techie.”",
    },
    {
      img: "/assets/testimonial0.PNG",
      name: "Akarin",
      occupation: "Lewd by sister",
      testimony: "“SERVIDORA.”",
    },
    {
      img: "/assets/testimonial3.PNG",
      name: "Hubert Kiwak",
      occupation: "4th grader",
      testimony:
        "“I think this is an amazing discovery, I mean why don't we ever think about this concept? Ha..Ha..Ha... BTW since using Visume I get 2 times more calls than my previous resume.”",
    },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="title">
        <h3>Social</h3>
        <h2>What do our customers say?</h2>
      </div>
      <Swiper
        className="container testimonials__container"
        modules={[Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5700,
          disableOnInteraction: false,
        }}
      >
        {testimonials.map((testimonial, i) => (
          <SwiperSlide key={i}>
            <article key={i} className="testimonial">
              <div className="testimonial__image">
                <Image
                  className="img"
                  src={testimonial.img}
                  width={347}
                  height={347}
                  alt={testimonial.name}
                />
              </div>
              <div className="testimonial__content">
                <p className="testimonial__content-testimony">
                  {testimonial.testimony}
                </p>
                <h4 className="testimonial__content-name">
                  {testimonial.name}
                </h4>
                <small>{testimonial.occupation}</small>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonials;
