"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";

export default function LuxuryExperience() {
  const images = [
    "https://wip.tezcommerce.com:3304/admin/module/71/1698823193342.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/71/1699860205128.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/71/1699860145182.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/71/1698823262031.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/71/1698823275644.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/71/1698823299732.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/71/1698823312761.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/71/1698823342855.jpg",
  ];

  return (
    <section className="lux_exp_wrap">
      <div className="container">
        {/* Title */}
        <div className="sec_title_btn">
          <div>
            <h2>Enjoy a Luxury Experience</h2>
            <h3>
              Browse Our Gallery for a Visual Delight of Luxury Experiences
            </h3>
          </div>

          <Link href="https://adda.net.in/gallery" className="more_btn">
            <span>View Full Gallery</span>
          </Link>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000 }}
          loop
          spaceBetween={20}
          slidesPerView={4}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          className="slide_style_one lux_exp_slide">
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <Link href="#" className="exp_item">
                <figure>
                  <Image src={img} alt="Adda Inn" width={400} height={300} />
                </figure>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
