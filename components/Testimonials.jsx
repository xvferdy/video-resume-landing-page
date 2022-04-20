import React from "react";
import Image from "next/image";

import { Navigation, Scrollbar, A11y, Autoplay } from "swiper";
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
        "“With the traditional resumes I used to apply for jobs and would get only a few calls. But after creating a video resume, I’ve got 9/10 calls. And I love the simplicity of the video creation process being a non techie.”",
    },
    {
      img: "/assets/testimonial.png",
      name: "Linda Jermy",
      occupation: "Commerce Student",
      testimony:
        "“With the traditional resumes I used to apply for jobs and would get only a few calls. But after creating a video resume, I’ve got 9/10 calls. And I love the simplicity of the video creation process being a non techie.”",
    },
    {
      img: "/assets/testimonial.png",
      name: "Linda Jermy",
      occupation: "Commerce Student",
      testimony:
        "“With the traditional resumes I used to apply for jobs and would get only a few calls. But after creating a video resume, I’ve got 9/10 calls. And I love the simplicity of the video creation process being a non techie.”",
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
        modules={[Autoplay, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        // navigation={true}
      >
        {testimonials.map((testimonial, i) => (
          <SwiperSlide key={i}>
            <article className="testimonial">
              <div className="testimonial__image">
                <Image
                  className="img"
                  src={testimonial.img}
                  width={331}
                  height={331}
                  alt={testimonial.name}
                  // layout="responsive"
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
