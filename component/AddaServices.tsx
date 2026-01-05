"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/thumbs";

export default function AddaServices() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <section className="stay_wrap">
      <div className="container">
        <div className="sec_title_btn">
          <div>
            <h2>Adda Services</h2>
            <h3>
              Explore Our Top Banquet and Restaurant Services at Midnapore
            </h3>
          </div>
        </div>

        <div className="stay_inner">
          <div className="left_stay">
            {/* BIG SLIDER */}
            <Swiper
              id="service_big"
              modules={[Thumbs, Autoplay]}
              thumbs={{ swiper: thumbsSwiper }}
              autoplay={{ delay: 3000 }}
              loop
              className="owl-carousel">
              <SwiperSlide>
                <figure className="stay_item">
                  <Image
                    src="https://wip.tezcommerce.com:3304/admin/module/71/1699858967363.jpg"
                    alt="Adda Inn"
                    width={820}
                    height={500}
                  />
                  <span>Restaurant</span>
                </figure>
              </SwiperSlide>

              <SwiperSlide>
                <figure className="stay_item">
                  <Image
                    src="https://wip.tezcommerce.com:3304/admin/module/71/1699858672612.jpg"
                    alt="Adda Inn"
                    width={820}
                    height={500}
                  />
                  <span>Banquet</span>
                </figure>
              </SwiperSlide>
            </Swiper>

            {/* THUMB SLIDER */}
            <Swiper
              id="service_thumbs"
              onSwiper={setThumbsSwiper}
              slidesPerView={2}
              watchSlidesProgress
              className="owl-carousel">
              <SwiperSlide>
                <div className="stay_thumb">
                  <Image
                    src="https://wip.tezcommerce.com:3304/admin/module/71/1698822652192.png"
                    alt="Adda Inn"
                    width={60}
                    height={60}
                  />
                  <div className="details">
                    <h4>Banquet</h4>
                    <p>
                      Versatile banquet spaces for your special celebrations.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="stay_thumb">
                  <Image
                    src="https://wip.tezcommerce.com:3304/admin/module/71/1699858590404.png"
                    alt="Adda Inn"
                    width={60}
                    height={60}
                  />
                  <div className="details">
                    <h4>Restaurant</h4>
                    <p>Fine dining and warm ambiance await you.</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* FACILITIES */}
          <ul className="stay_fac">
            <li>
              <Image
                src="https://wip.tezcommerce.com:3304/admin/module/71/1698822690633.png"
                alt="Adda Inn"
                width={40}
                height={40}
              />
              <p>Elevator</p>
            </li>
            <li>
              <Image
                src="https://wip.tezcommerce.com:3304/admin/module/71/1698822729459.png"
                alt="Adda Inn"
                width={40}
                height={40}
              />
              <p>Meeting room</p>
            </li>
            <li>
              <Image
                src="https://wip.tezcommerce.com:3304/admin/module/71/1698822785934.png"
                alt="Adda Inn"
                width={40}
                height={40}
              />
              <p>Parking</p>
            </li>
            <li>
              <Image
                src="https://wip.tezcommerce.com:3304/admin/module/71/1698822822034.png"
                alt="Adda Inn"
                width={40}
                height={40}
              />
              <p>Fine Dining</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
