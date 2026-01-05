"use client";

import Image from "next/image";

const rooms = [
  {
    name: "Single AC Room",
    desc: "Cozy, tranquil single AC room for a comfortable stay.",
    price: 1200,
    image: "https://wip.tezcommerce.com:3304/admin/module/71/1716276167600.jpg",
    icons: [
      "1701766472957.png",
      "1699872287089.png",
      "1699872320772.png",
      "1699872373126.png",
    ],
  },
  {
    name: "Double AC Room",
    desc: "Spacious, inviting double AC room for a relaxed stay.",
    price: 1900,
    image: "https://wip.tezcommerce.com:3304/admin/module/71/1716276285727.jpg",
    icons: [
      "1701766292210.png",
      "1701766325077.png",
      "1701766353702.png",
      "1701766210749.png",
    ],
  },
  {
    name: "Deluxe AC Room",
    desc: "Luxurious, chic deluxe AC room for an indulgent stay.",
    price: 2400,
    image: "https://wip.tezcommerce.com:3304/admin/module/71/1716276409862.jpg",
    icons: [
      "1701766524505.png",
      "1701766557052.png",
      "1701766595124.png",
      "1701766653703.png",
    ],
  },
  {
    name: "Super Deluxe AC Room",
    desc: "Opulent, spacious super deluxe AC room for a lavish retreat.",
    price: 2800,
    image: "https://wip.tezcommerce.com:3304/admin/module/71/1716276528923.jpg",
    icons: [
      "1701766691143.png",
      "1701766717648.png",
      "1701766740010.png",
      "1701766766930.png",
    ],
  },
  {
    name: "Executive AC Room",
    desc: "Comfort and style for a refined stay.",
    price: 2800,
    image: "https://wip.tezcommerce.com:3304/admin/module/71/1716276576011.jpg",
    icons: [
      "1701767798613.png",
      "1701767858362.png",
      "1701767901841.png",
      "1701767943925.png",
    ],
  },
  {
    name: "Luxury AC Room",
    desc: "A true taste of luxury with spacious comfort.",
    price: 3500,
    image: "https://wip.tezcommerce.com:3304/admin/module/71/1701673151610.jpg",
    icons: [],
  },
  {
    name: "King Room",
    desc: "Regal, spacious King AC room for a royal experience.",
    price: 4500,
    image: "https://wip.tezcommerce.com:3304/admin/module/71/1716276821570.jpg",
    icons: [
      "1701768549849.png",
      "1701768581071.png",
      "1701772016112.png",
      "1701772050507.png",
    ],
  },
  {
    name: "Suite Room",
    desc: "Elegant, lavish suite AC room for a luxurious stay.",
    price: 5500,
    image: "https://wip.tezcommerce.com:3304/admin/module/71/1716276957273.jpg",
    icons: [
      "1701772102314.png",
      "1701772143432.png",
      "1701772176981.png",
      "1701772206598.png",
    ],
  },
];

export default function RoomsPage() {
  return (
    <>
      {/* Banner */}
      <section className="about_banner" id="banner">
        <div className="container">
          <div className="about_banner_inner">
            <h1>Rooms</h1>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Rooms</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section className="room_wrap">
        <div className="container">
          {rooms.map((room, index) => (
            <div className="room_item" key={index}>
              <div className="row">
                <div className="col-lg-9 col-12">
                  <div className="r_left">
                    <Image
                      src={room.image}
                      alt={room.name}
                      width={900}
                      height={500}
                      className="r_image"
                    />

                    <div className="ritem_det">
                      <a href="#" className="rname">
                        {room.name}
                      </a>
                      <p>{room.desc}</p>

                      {room.icons.length > 0 && (
                        <ul>
                          {room.icons.map((icon, i) => (
                            <li key={i}>
                              <img
                                src={`https://wip.tezcommerce.com:3304/admin/module/71/${icon}`}
                                alt=""
                              />
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-12">
                  <div className="ritem_right">
                    <h4>
                      <span>{room.price}</span> PER NIGHT
                    </h4>
                    <a href="tel:+918436008000">
                      Book Now <i className="ri-phone-fill"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="cta_wrap"
        style={{ backgroundImage: "url(assest/images/cta_bg.jpg)" }}>
        <div className="container">
          <div className="cta_inner">
            <p>To book now Contact at</p>
            <h2>8436006000 / 7000 / 8000</h2>
            <a href="tel:+918436008000">
              <i className="ri-phone-fill"></i> Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
