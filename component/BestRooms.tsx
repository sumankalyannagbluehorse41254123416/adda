// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// interface Room {
//   title: string;
//   price: string;
//   image: string;
//   guests: string;
//   bed: string;
//   guestIcon: string;
//   bedIcon: string;
// }

// const rooms: Room[] = [
//   {
//     title: "Single Room (A.C)",
//     price: "₹ 1,200 / night",
//     image: "https://wip.tezcommerce.com:3304/admin/module/71/1699858297651.jpg",
//     guests: "2 Guests",
//     bed: "Single",
//     guestIcon:
//       "https://wip.tezcommerce.com:3304/admin/module/71/1698821137170.png",
//     bedIcon:
//       "https://wip.tezcommerce.com:3304/admin/module/71/1699879205178.png",
//   },
//   {
//     title: "Double Room (A.C)",
//     price: "₹ 1,900 / night",
//     image: "https://wip.tezcommerce.com:3304/admin/module/71/1698821259566.jpg",
//     guests: "3 Guests",
//     bed: "Double",
//     guestIcon:
//       "https://wip.tezcommerce.com:3304/admin/module/71/1698821259635.png",
//     bedIcon:
//       "https://wip.tezcommerce.com:3304/admin/module/71/1699879926206.png",
//   },
//   {
//     title: "Deluxe Room (A.C)",
//     price: "₹ 2,400 / night",
//     image: "https://wip.tezcommerce.com:3304/admin/module/71/1699858814932.jpg",
//     guests: "4 Guests",
//     bed: "Double",
//     guestIcon:
//       "https://wip.tezcommerce.com:3304/admin/module/71/1698821336658.png",
//     bedIcon:
//       "https://wip.tezcommerce.com:3304/admin/module/71/1699879936576.png",
//   },
//   {
//     title: "Super Deluxe Room (A.C)",
//     price: "₹ 2,800 / night",
//     image: "https://wip.tezcommerce.com:3304/admin/module/71/1698821443559.jpg",
//     guests: "5 Guests",
//     bed: "Single",
//     guestIcon:
//       "https://wip.tezcommerce.com:3304/admin/module/71/1698821443614.png",
//     bedIcon:
//       "https://wip.tezcommerce.com:3304/admin/module/71/1699879948344.png",
//   },
//   {
//     title: "Executive Room (A.C)",
//     price: "₹ 2,800 / night",
//     image: "https://wip.tezcommerce.com:3304/admin/module/71/1698754404412.jpg",
//     guests: "4 Guests",
//     bed: "Double",
//     guestIcon:
//       "https://wip.tezcommerce.com:3304/admin/module/71/1698754404487.png",
//     bedIcon:
//       "https://wip.tezcommerce.com:3304/admin/module/71/1699879957824.png",
//   },
//   {
//     title: "Luxury Room (A.C)",
//     price: "₹ 3,500 / night",
//     image: "https://wip.tezcommerce.com:3304/admin/module/71/1698821537277.jpg",
//     guests: "5 Guests",
//     bed: "Double",
//     guestIcon:
//       "https://wip.tezcommerce.com:3304/admin/module/71/1698821537325.png",
//     bedIcon:
//       "https://wip.tezcommerce.com:3304/admin/module/71/1699879971099.png",
//   },
//   {
//     title: "King Room (A.C)",
//     price: "₹ 4,500 / night",
//     image: "https://wip.tezcommerce.com:3304/admin/module/71/1698821602542.jpg",
//     guests: "4 Guests",
//     bed: "Double",
//     guestIcon:
//       "https://wip.tezcommerce.com:3304/admin/module/71/1698821602601.png",
//     bedIcon:
//       "https://wip.tezcommerce.com:3304/admin/module/71/1699879981014.png",
//   },
//   {
//     title: "Suite Room (A.C)",
//     price: "₹ 5,500 / night",
//     image: "https://wip.tezcommerce.com:3304/admin/module/71/1701952836084.jpg",
//     guests: "2 Guests",
//     bed: "Double",
//     guestIcon:
//       "https://wip.tezcommerce.com:3304/admin/module/71/1698821704697.png",
//     bedIcon:
//       "https://wip.tezcommerce.com:3304/admin/module/71/1699879990793.png",
//   },
// ];

// export default function BestRooms() {
//   return (
//     <section className="best_room_wrap">
//       <div className="container">
//         {/* Title */}
//         <div className="sec_title_btn">
//           <div>
//             <h2>Our Best Rooms</h2>
//             <h3>Experience Comfort of Best and Affordable Rooms</h3>
//           </div>
//           <Link href="https://adda.net.in/room" className="more_btn">
//             <span>View All Rooms</span>
//           </Link>
//         </div>

//         {/* Slider */}
//         <Swiper
//           modules={[Navigation, Autoplay]}
//           navigation
//           autoplay={{ delay: 3000 }}
//           loop
//           spaceBetween={10}
//           slidesPerView={4}
//           breakpoints={{
//             0: { slidesPerView: 1 },
//             576: { slidesPerView: 2 },
//             768: { slidesPerView: 3 },
//             1200: { slidesPerView: 4 },
//           }}
//           className="best_room_slide slide_style_one">
//           {rooms.map((room, index) => (
//             <SwiperSlide key={index}>
//               <Link href="#" className="br_item">
//                 <figure>
//                   <Image
//                     src={room.image}
//                     alt={room.title}
//                     width={400}
//                     height={300}
//                   />
//                   <span>{room.price}</span>
//                 </figure>

//                 <div className="br_con">
//                   <h4>{room.title}</h4>
//                   <ul>
//                     <li>
//                       <Image
//                         src={room.guestIcon}
//                         alt=""
//                         width={20}
//                         height={20}
//                       />
//                       {room.guests}
//                     </li>
//                     <li>
//                       <Image src={room.bedIcon} alt="" width={20} height={20} />
//                       {room.bed}
//                     </li>
//                   </ul>
//                 </div>
//               </Link>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }
// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// import { fetchPageData, Section } from "@/lib/page";

// /* ---------------- TYPES ---------------- */

// interface RoomUI {
//   title: string;
//   price: string;
//   image: string;
//   guests: string;
//   bed: string;
//   guestIcon: string;
//   bedIcon: string;
// }

// /* ---------------- HELPERS ---------------- */

// const stripHtml = (html = "") => html.replace(/<\/?[^>]+(>|$)/g, "");

// /* ---------------- STATIC ICONS ---------------- */

// const GUEST_ICON =
//   "https://wip.tezcommerce.com:3304/admin/module/71/1698821137170.png";
// const BED_ICON =
//   "https://wip.tezcommerce.com:3304/admin/module/71/1699879205178.png";

// /* ---------------- COMPONENT ---------------- */

// export default function BestRooms() {
//   const [title, setTitle] = useState("");
//   const [subtitle, setSubtitle] = useState("");
//   const [rooms, setRooms] = useState<RoomUI[]>([]);

//   useEffect(() => {
//     const loadRooms = async () => {
//       try {
//         // 👇 UID from API (our-best-rooms page)
//         const res = await fetchPageData({
//           uid: "our-best-rooms",
//         });

//         /* Page title & subtitle */
//         setTitle(res.pagedata.title);
//         setSubtitle(stripHtml(res.pagedata.description || ""));

//         /* Rooms mapping */
//         const mappedRooms: RoomUI[] = res.pageItemdataWithSubsection
//           .sort((a, b) => a.section_sequence - b.section_sequence)
//           .map((section: Section) => {
//             const subsection = section.subsections?.[0];

//             return {
//               title: section.title,
//               price: stripHtml(section.shortDescription || ""),
//               image: section.image || "",
//               guests: subsection?.title || "",
//               bed: stripHtml(subsection?.description || ""),
//               guestIcon: GUEST_ICON,
//               bedIcon: BED_ICON,
//             };
//           });

//         setRooms(mappedRooms);
//       } catch (error) {
//         console.error("Best Rooms Fetch Error:", error);
//       }
//     };

//     loadRooms();
//   }, []);

//   return (
//     <section className="best_room_wrap">
//       <div className="container">
//         {/* Title */}
//         <div className="sec_title_btn">
//           <div>
//             <h2>{title}</h2>
//             <h3>{subtitle}</h3>
//           </div>

//           <Link href="/room" className="more_btn">
//             <span>View All Rooms</span>
//           </Link>
//         </div>

//         {/* Slider */}
//         <Swiper
//           modules={[Navigation, Autoplay]}
//           navigation
//           autoplay={{ delay: 3000 }}
//           loop
//           spaceBetween={10}
//           slidesPerView={4}
//           breakpoints={{
//             0: { slidesPerView: 1 },
//             576: { slidesPerView: 2 },
//             768: { slidesPerView: 3 },
//             1200: { slidesPerView: 4 },
//           }}
//           className="best_room_slide slide_style_one">
//           {rooms.map((room, index) => (
//             <SwiperSlide key={index}>
//               <Link href="#" className="br_item">
//                 <figure>
//                   <Image
//                     src={room.image}
//                     alt={room.title}
//                     width={400}
//                     height={300}
//                   />
//                   <span>{room.price}</span>
//                 </figure>

//                 <div className="br_con">
//                   <h4>{room.title}</h4>
//                   <ul>
//                     <li>
//                       <Image
//                         src={room.guestIcon}
//                         alt=""
//                         width={20}
//                         height={20}
//                       />
//                       {room.guests}
//                     </li>
//                     <li>
//                       <Image src={room.bedIcon} alt="" width={20} height={20} />
//                       {room.bed}
//                     </li>
//                   </ul>
//                 </div>
//               </Link>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }



"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { fetchPageData, Section } from "@/lib/page";

/* ---------------- TYPES ---------------- */

interface RoomUI {
  title: string;
  price: string;
  image: string;
  guests: string;
  bed: string;
  guestIcon: string;
  bedIcon: string;
}

/* ---------------- HELPERS ---------------- */

const stripHtml = (html = "") => html.replace(/<\/?[^>]+(>|$)/g, "");

/* ---------------- STATIC ICONS ---------------- */

const GUEST_ICON =
  "https://wip.tezcommerce.com:3304/admin/module/71/1698821137170.png";
const BED_ICON =
  "https://wip.tezcommerce.com:3304/admin/module/71/1699879205178.png";

/* ---------------- COMPONENT ---------------- */

export default function BestRooms() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [rooms, setRooms] = useState<RoomUI[]>([]);

  /* Swiper navigation refs */
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loadRooms = async () => {
      try {
        const res = await fetchPageData({
          uid: "our-best-rooms",
        });

        setTitle(res.pagedata.title);
        setSubtitle(stripHtml(res.pagedata.description || ""));

        const mappedRooms: RoomUI[] = res.pageItemdataWithSubsection
          .sort((a, b) => a.section_sequence - b.section_sequence)
          .map((section: Section) => {
            const subsection = section.subsections?.[0];

            return {
              title: section.title,
              price: stripHtml(section.shortDescription || ""),
              image: section.image || "",
              guests: subsection?.title || "",
              bed: stripHtml(subsection?.description || ""),
              guestIcon: GUEST_ICON,
              bedIcon: BED_ICON,
            };
          });

        setRooms(mappedRooms);
      } catch (error) {
        console.error("Best Rooms Fetch Error:", error);
      }
    };

    loadRooms();
  }, []);

  return (
    <section className="best_room_wrap" style={{ position: "relative" }}>
      {/* ===== OUTSIDE CONTAINER ARROWS (JS CONTROLLED) ===== */}
      <div ref={prevRef} className="room_nav room_prev">
        <svg className="swiper-navigation-icon" width={11} height={20} viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor" /></svg>
      </div>
      <div ref={nextRef} className="room_nav room_next">
        <svg className="swiper-navigation-icon" width={11} height={20} viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor" /></svg>

      </div>

      <div className="container">
        {/* Title */}
        <div className="sec_title_btn">
          <div>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
          </div>

          <Link href="/room" className="more_btn">
            <span>View All Rooms</span>
          </Link>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 3000 }}
          loop
          spaceBetween={10}
          slidesPerView={4}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // Attach navigation refs before init
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          className="best_room_slide slide_style_one"
        >
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
                      <Image
                        src={room.bedIcon}
                        alt=""
                        width={20}
                        height={20}
                      />
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
