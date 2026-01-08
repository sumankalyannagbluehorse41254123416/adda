// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";

// import "swiper/css";

// export default function LuxuryExperience() {
//   const images = [
//     "https://wip.tezcommerce.com:3304/admin/module/71/1698823193342.jpg",
//     "https://wip.tezcommerce.com:3304/admin/module/71/1699860205128.jpg",
//     "https://wip.tezcommerce.com:3304/admin/module/71/1699860145182.jpg",
//     "https://wip.tezcommerce.com:3304/admin/module/71/1698823262031.jpg",
//     "https://wip.tezcommerce.com:3304/admin/module/71/1698823275644.jpg",
//     "https://wip.tezcommerce.com:3304/admin/module/71/1698823299732.jpg",
//     "https://wip.tezcommerce.com:3304/admin/module/71/1698823312761.jpg",
//     "https://wip.tezcommerce.com:3304/admin/module/71/1698823342855.jpg",
//   ];

//   return (
//     <section className="lux_exp_wrap">
//       <div className="container">
//         {/* Title */}
//         <div className="sec_title_btn">
//           <div>
//             <h2>Enjoy a Luxury Experience</h2>
//             <h3>
//               Browse Our Gallery for a Visual Delight of Luxury Experiences
//             </h3>
//           </div>

//           <Link href="https://adda.net.in/gallery" className="more_btn">
//             <span>View Full Gallery</span>
//           </Link>
//         </div>

//         {/* Slider */}
//         <Swiper
//           modules={[Navigation, Autoplay]}
//           navigation
//           autoplay={{ delay: 3000 }}
//           loop
//           spaceBetween={20}
//           slidesPerView={4}
//           breakpoints={{
//             0: { slidesPerView: 1 },
//             576: { slidesPerView: 2 },
//             768: { slidesPerView: 3 },
//             1200: { slidesPerView: 4 },
//           }}
//           className="slide_style_one lux_exp_slide">
//           {images.map((img, index) => (
//             <SwiperSlide key={index}>
//               <Link href="#" className="exp_item">
//                 <figure>
//                   <Image src={img} alt="Adda Inn" width={400} height={300} />
//                 </figure>
//               </Link>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }




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
      {/* 🔹 OUTSIDE CONTAINER ARROWS */}
      <button className="lux-prev room_nav room_prev">
         <svg className="swiper-navigation-icon" width={11} height={20} viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor" /></svg>
      </button>
      <button className="lux-next room_nav room_next">
         <svg className="swiper-navigation-icon" width={11} height={20} viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor" /></svg>
      </button>

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
          navigation={{
            prevEl: ".lux-prev",
            nextEl: ".lux-next",
          }}
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
          className="slide_style_one lux_exp_slide"
        >
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
