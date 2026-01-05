"use client";

import Image from "next/image";
const banquetItems = [
  {
    title: "Club House",
    image: "https://wip.tezcommerce.com:3304/admin/module/71/1699875957137.jpg",
  },
  {
    title: "Pavilion 1",
    image: "https://wip.tezcommerce.com:3304/admin/module/71/1699875910150.jpg",
  },
  {
    title: "Pavilion 2",
    image: "https://wip.tezcommerce.com:3304/admin/module/71/1699254713531.jpg",
  },
  {
    title: "Meeting Room",
    image: "https://wip.tezcommerce.com:3304/admin/module/71/1699254760118.jpg",
  },
];
export default function FullBanner() {
  return (
    <>
      <section className="full_banner_wrap" id="banner">
        <Image
          src="https://wip.tezcommerce.com:3304/admin/module/71/1704185315287.jpg"
          alt="Banquet hall and meeting room setup"
          fill
          priority
          className="bg_img"
          sizes="100vw"
        />

        <div className="container">
          <div className="fb_inner">
            <h1>
              Banquet Hall and <br />
              Meeting Room
            </h1>
            <p>Perfect for celebrations and business gatherings.</p>
          </div>
        </div>
      </section>
      <section className="banq_wrap">
        <div className="container">
          <div className="banq_title">
            <h3>Banquet Halls and Meeting Room</h3>
            <p>
              Explore Adda's budget-friendly banquet halls and meeting rooms,
              perfect for any occasion. Our spaces are designed to cater to your
              needs, ensuring a memorable and affordable event. Experience the
              blend of affordability and quality at Adda, your ideal choice for
              gatherings and meetings in Midnapore.
            </p>
          </div>

          <div className="row">
            {banquetItems.map((item, index) => (
              <div
                className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12"
                key={index}>
                <div className="banq_item">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                  />

                  <span className="shape1"></span>
                  <span className="shape2"></span>
                  <span className="shape3"></span>
                  <span className="shape4"></span>

                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="cta_wrap"
        style={{ backgroundImage: "url(/assest/images/cta_bg.jpg)" }}>
        <div className="container">
          <div className="cta_inner">
            <p>To book now contact at</p>

            <h2>8436003000</h2>

            <a
              href="tel:+918436003000"
              target="_blank"
              rel="noopener noreferrer">
              <i className="ri-phone-fill"></i>
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
