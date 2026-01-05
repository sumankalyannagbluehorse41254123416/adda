"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

interface Testimonial {
  name: string;
  image: string;
  rating: number;
  message: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Akash Mahapatra",
    image: "https://wip.tezcommerce.com:3304/admin/module/71/1698823903574.png",
    rating: 5,
    message: "Nice place atmosphere is so nice",
  },
  {
    name: "JS Basu",
    image: "https://wip.tezcommerce.com:3304/admin/module/71/1699623656204.png",
    rating: 4,
    message:
      "Excellent hotel. Excellent food and lodging. Each and every staff is polite, professional, and helpful.",
  },
  {
    name: "Ananya Mandal",
    image: "https://wip.tezcommerce.com:3304/admin/module/71/1699623693842.png",
    rating: 5,
    message:
      "The atmosphere was quite good. The quality and quantity of the food were good.",
  },
  {
    name: "Sushanta Palit",
    image: "https://wip.tezcommerce.com:3304/admin/module/71/1699623779832.png",
    rating: 5,
    message: "Rooms are clean, staff behavior is excellent.",
  },
  {
    name: "Anirvid Sarkar",
    image: "https://wip.tezcommerce.com:3304/admin/module/71/1699859193271.png",
    rating: 4,
    message: "The rooms are really nicely done and maintained.",
  },
];

export default function GuestTestimonials() {
  return (
    <section className="guest_wrap">
      <div className="container">
        <div className="sec_title_btn">
          <div>
            <h2>Words from Our Happy Guests</h2>
            <h3>Insightful Feedback on Our Hotel and Restaurant Services</h3>
          </div>
        </div>

        <div className="guest_inner">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={3}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}>
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="guest_item">
                  <div className="gi_inner">
                    <figure>
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                      />
                      <h4>{item.name}</h4>
                    </figure>

                    <ul>
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <li key={i}>
                          <i className="fa fa-star"></i>
                        </li>
                      ))}
                    </ul>

                    <p className="gi_para">{item.message}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
