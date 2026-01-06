"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
interface Room {
  title: string;
  price: string;
  image: string;
  guests: string;
  bed: string;
  guestIcon: string;
  bedIcon: string;
}

const rooms: Room[] = [
  {
    title: "Single Room (A.C)",
    price: "₹ 1,200 / night",
    image: "https://wip.tezcommerce.com:3304/admin/module/71/1699858297651.jpg",
    guests: "2 Guests",
    bed: "Single",
    guestIcon:
      "https://wip.tezcommerce.com:3304/admin/module/71/1698821137170.png",
    bedIcon:
      "https://wip.tezcommerce.com:3304/admin/module/71/1699879205178.png",
  },
  {
    title: "Double Room (A.C)",
    price: "₹ 1,900 / night",
    image: "https://wip.tezcommerce.com:3304/admin/module/71/1698821259566.jpg",
    guests: "3 Guests",
    bed: "Double",
    guestIcon:
      "https://wip.tezcommerce.com:3304/admin/module/71/1698821259635.png",
    bedIcon:
      "https://wip.tezcommerce.com:3304/admin/module/71/1699879926206.png",
  },
  {
    title: "Deluxe Room (A.C)",
    price: "₹ 2,400 / night",
    image: "https://wip.tezcommerce.com:3304/admin/module/71/1699858814932.jpg",
    guests: "4 Guests",
    bed: "Double",
    guestIcon:
      "https://wip.tezcommerce.com:3304/admin/module/71/1698821336658.png",
    bedIcon:
      "https://wip.tezcommerce.com:3304/admin/module/71/1699879936576.png",
  },
  {
    title: "Super Deluxe Room (A.C)",
    price: "₹ 2,800 / night",
    image: "https://wip.tezcommerce.com:3304/admin/module/71/1698821443559.jpg",
    guests: "5 Guests",
    bed: "Single",
    guestIcon:
      "https://wip.tezcommerce.com:3304/admin/module/71/1698821443614.png",
    bedIcon:
      "https://wip.tezcommerce.com:3304/admin/module/71/1699879948344.png",
  },
  {
    title: "Executive Room (A.C)",
    price: "₹ 2,800 / night",
    image: "https://wip.tezcommerce.com:3304/admin/module/71/1698754404412.jpg",
    guests: "4 Guests",
    bed: "Double",
    guestIcon:
      "https://wip.tezcommerce.com:3304/admin/module/71/1698754404487.png",
    bedIcon:
      "https://wip.tezcommerce.com:3304/admin/module/71/1699879957824.png",
  },
  {
    title: "Luxury Room (A.C)",
    price: "₹ 3,500 / night",
    image: "https://wip.tezcommerce.com:3304/admin/module/71/1698821537277.jpg",
    guests: "5 Guests",
    bed: "Double",
    guestIcon:
      "https://wip.tezcommerce.com:3304/admin/module/71/1698821537325.png",
    bedIcon:
      "https://wip.tezcommerce.com:3304/admin/module/71/1699879971099.png",
  },
  {
    title: "King Room (A.C)",
    price: "₹ 4,500 / night",
    image: "https://wip.tezcommerce.com:3304/admin/module/71/1698821602542.jpg",
    guests: "4 Guests",
    bed: "Double",
    guestIcon:
      "https://wip.tezcommerce.com:3304/admin/module/71/1698821602601.png",
    bedIcon:
      "https://wip.tezcommerce.com:3304/admin/module/71/1699879981014.png",
  },
  {
    title: "Suite Room (A.C)",
    price: "₹ 5,500 / night",
    image: "https://wip.tezcommerce.com:3304/admin/module/71/1701952836084.jpg",
    guests: "2 Guests",
    bed: "Double",
    guestIcon:
      "https://wip.tezcommerce.com:3304/admin/module/71/1698821704697.png",
    bedIcon:
      "https://wip.tezcommerce.com:3304/admin/module/71/1699879990793.png",
  },
];

export default function BestRooms() {
  return (
    <section className="best_room_wrap">
      <div className="container">
        {/* Title */}
        <div className="sec_title_btn">
          <div>
            <h2>Our Best Rooms</h2>
            <h3>Experience Comfort of Best and Affordable Rooms</h3>
          </div>
          <Link href="https://adda.net.in/room" className="more_btn">
            <span>View All Rooms</span>
          </Link>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000 }}
          loop
          spaceBetween={10}
          slidesPerView={4}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          className="best_room_slide slide_style_one">
          {rooms.map((room, index) => (
            <SwiperSlide key={index}>
              <Link href="#" className="br_item">
                <figure>
                  <Image
                    src={room.image}
                    alt={room.title}
                    width={400}
                    height={300}
                  />
                  <span>{room.price}</span>
                </figure>

                <div className="br_con">
                  <h4>{room.title}</h4>
                  <ul>
                    <li>
                      <Image
                        src={room.guestIcon}
                        alt=""
                        width={20}
                        height={20}
                      />
                      {room.guests}
                    </li>
                    <li>
                      <Image src={room.bedIcon} alt="" width={20} height={20} />
                      {room.bed}
                    </li>
                  </ul>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
