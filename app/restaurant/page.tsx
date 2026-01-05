"use client";

import { useState } from "react";
import Image from "next/image";

const categories = [
  { key: "Indian", title: "Indian", img: "1699266093335.jpg" },
  { key: "Chinese", title: "Chinese", img: "1699266131351.jpg" },
  { key: "Tandoor", title: "Tandoor", img: "1699266150603.jpg" },
  { key: "Bangla", title: "Bangla", img: "1699872528482.jpg" },
];

const menuData = {
  Indian: [
    {
      title: "Veg Fried Rice",
      price: 199,
      img: "1699249731115.jpg",
      desc: "A flavorsome preparation with rice cooked with wide array of fresh vegetables in flavorful sauce.",
    },
    {
      title: "Mix Fried Rice",
      price: 288,
      img: "1699249801304.jpg",
      desc: "A flavorsome preparation with rice cooked with wide array of fresh vegetables in flavorful sauce.",
    },
    {
      title: "Chicken Fried Rice",
      price: 260,
      img: "1699249857210.jpg",
      desc: "A flavorsome preparation with rice cooked with wide array of fresh vegetables in flavorful sauce.",
    },
  ],
  Chinese: [
    {
      title: "Veg Fried Rice",
      price: 199,
      img: "1699359745470.jpg",
      desc: "A flavorsome preparation with rice cooked with wide array of fresh vegetables in flavorful sauce.",
    },
    {
      title: "Chicken Fried Rice",
      price: 260,
      img: "1699359819744.jpg",
      desc: "A flavorsome preparation with rice cooked with wide array of fresh vegetables in flavorful sauce.",
    },
  ],
  Tandoor: [
    {
      title: "Tandoori Chicken",
      price: 199,
      img: "1699360377588.jpg",
      desc: "A flavorsome preparation with rice cooked with wide array of fresh vegetables in flavorful sauce.",
    },
    {
      title: "Tandoori Naan",
      price: 260,
      img: "1699360441879.jpg",
      desc: "A flavorsome preparation with rice cooked with wide array of fresh vegetables in flavorful sauce.",
    },
  ],
  Bangla: [
    {
      title: "Veg Rice",
      price: 199,
      img: "1699878158521.jpg",
      desc: "A flavorsome preparation with rice cooked with wide array of fresh vegetables in flavorful sauce.",
    },
    {
      title: "Fish Rice",
      price: 288,
      img: "1699878220501.jpg",
      desc: "A flavorsome preparation with rice cooked with wide array of fresh vegetables in flavorful sauce.",
    },
    {
      title: "Bengali Thali",
      price: 300,
      img: "1701772847982.jpg",
      desc: "Enjoy a flavorful feast featuring diverse Bengali delicacies.",
    },
  ],
};

type CategoryKey = keyof typeof menuData;

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState<CategoryKey>("Indian");

  return (
    <>
      {/* Banner */}
      <section className="full_banner_wrap" id="banner">
        <Image
          src="https://wip.tezcommerce.com:3304/admin/module/71/1701935496791.jpg"
          alt="Banner"
          fill
          priority
          className="bg_img"
        />
        <div className="container">
          <div className="fb_inner">
            <h2>
              Welcome to <br /> Adda
            </h2>
            <p>Midnapore's favorite dining destination and restaurant!</p>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="recipy_wrap">
        <div className="container">
          <div className="sec_title_btn center_align mb-4">
            <h2 className="m-0">Our Menu</h2>
          </div>

          <ul className="nav rec_cat" role="tablist">
            {categories.map((cat) => (
              <li key={cat.key}>
                <a
                  role="tab"
                  aria-selected={activeTab === cat.key}
                  className={activeTab === cat.key ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    // setActiveTab(cat.key || "Bangla");
                  }}>
                  <img src={cat.img} alt={cat.title} />
                  <h5>{cat.title}</h5>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Content */}
        <div className="rl_inner">
          <div className="container">
            <div className="row">
              {menuData[activeTab].map((item, index) => (
                <div className="col-lg-6 col-md-12 col-12" key={index}>
                  <div className="rl_item">
                    <Image
                      className="r_img"
                      src={`https://wip.tezcommerce.com:3304/admin/module/71/${item.img}`}
                      alt={item.title}
                      width={120}
                      height={120}
                    />
                    <div className="rl_con">
                      <ul>
                        <li>{activeTab}</li>
                        <li>{item.price}</li>
                      </ul>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* App Download */}
      <section className="play_app_wrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="pa_con">
                <h3>Get the App</h3>
                <p>
                  Order your favorite food online using the Adda App with zero
                  extra charges.
                </p>
                <a href="https://play.google.com/store/apps/details?id=com.ther.addarestaurant">
                  <img src="/assets/img/google_play.png" alt="Google Play" />
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <img className="pa_img" src="/assets/img/get_app.png" alt="App" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="cta_wrap"
        style={{ backgroundImage: "url(/assets/img/cta_bg.jpg)" }}>
        <div className="container">
          <div className="cta_inner">
            <p>To book now Contact at</p>
            <h2>8436001000</h2>
            <a href="tel:+918436001000">
              <i className="ri-phone-fill"></i> Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
