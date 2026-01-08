// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import Image from "next/image";
// import Link from "next/link";

// import "swiper/css";
// import "swiper/css/navigation";

// interface Place {
//   title: string;
//   description: string;
//   image: string;
//   link: string;
// }

// const places: Place[] = [
//   {
//     title: "Jhargram Palace Heritage",
//     description: "Step into the regal past of Jhargram as we unravel...",
//     image:
//       "https://wip.tezcommerce.com:3304/admin/iUdyog/blog/71/1704180479992.jpg",
//     link: "https://adda.net.in/blog-details/jhargram-palace-heritage",
//   },
//   {
//     title:
//       "Gangani: Garbetha's Hidden Jewel - A Tranquil Retreat and Tourist Attraction",
//     description: "Nestled in the heart of Garbetha, Gangani emerges...",
//     image:
//       "https://wip.tezcommerce.com:3304/admin/iUdyog/blog/71/1704180237621.jpg",
//     link: "https://adda.net.in/blog-details/gangani:-garbetha's-hidden-jewel---a-tranquil-retreat-and-tourist-attraction",
//   },
//   {
//     title: "Exploring the Enchanting Terracotta Temples",
//     description: "A Journey through Pathra, Paschim Midnapore’s hidden...",
//     image:
//       "https://wip.tezcommerce.com:3304/admin/iUdyog/blog/71/1700216426706.jpg",
//     link: "https://adda.net.in/blog-details/exploring-the-enchanting-terracotta-temples",
//   },
//   {
//     title:
//       "Exploring the Divine Beauty of Karnagarh Debi Mahamaya Temple in Midnapore",
//     description: "Introduction Nestled amidst the serene landscapes...",
//     image:
//       "https://wip.tezcommerce.com:3304/admin/iUdyog/blog/71/1700215627743.jpg",
//     link: "https://adda.net.in/blog-details/exploring-the-divine-beauty-of-karnagarh-debi-mahamaya-temple-in-midnapore",
//   },
//   {
//     title: "Siddheshwari Kali Mandir in Midnapore: A Spiritual Oasis",
//     description: "Siddheshwari Kali Mandir in Midnapore: A Spiritual...",
//     image:
//       "https://wip.tezcommerce.com:3304/admin/iUdyog/blog/71/1700215775301.jpg",
//     link: "https://adda.net.in/blog-details/exploring-the-tranquil-beauty-of-gopegarh-ecopark",
//   },
// ];

// export default function BestPlaces() {
//   return (
//     <section className="best_place_wrap">
//       <div className="container">
//         <div className="sec_title_btn">
//           <div>
//             <h2>The best places to visit</h2>
//             <h3>
//               Archeological and Astonishing places are to be expolerd by you.
//             </h3>
//           </div>
//         </div>

//         <Swiper
//           modules={[Navigation, Autoplay]}
//           className="slide_style_one best_place_slide"
//           spaceBetween={24}
//           slidesPerView={2}
//           navigation
//           autoplay={{ delay: 4000 }}
//           breakpoints={{
//             0: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//           }}>
//           {places.map((place, index) => (
//             <SwiperSlide key={index}>
//               <Link href={place.link} className="exp_item">
//                 <figure>
//                   <Image
//                     src={place.image}
//                     alt={place.title}
//                     width={600}
//                     height={400}
//                   />
//                   <figcaption></figcaption>
//                 </figure>

//                 <div className="exp_det">
//                   <h3>{place.title}</h3>
//                   <p>{place.description}</p>
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

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";

import { fetchPageData, Section } from "@/lib/page"; // adjust path if needed

export default function BestPlaces() {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [places, setPlaces] = useState<Section[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetchPageData({
          uid: "the-best-places-to-visit",
        });

        setTitle(res.pagedata.title);
        setDescription(res.pagedata.description || "");

        setPlaces(
          [...res.pageItemdataWithSubsection].sort(
            (a, b) => a.section_sequence - b.section_sequence
          )
        );
      } catch (error) {
        console.error("Best Places Error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading || places.length === 0) return null;

  return (
    <section className="best_place_wrap">
      {/* External arrows */}
      <button className="best-place-prev room_nav room_prev">
         <svg className="swiper-navigation-icon" width={11} height={20} viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor" /></svg>
      </button>
      <button className="best-place-next room_nav room_next">
         <svg className="swiper-navigation-icon" width={11} height={20} viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor" /></svg>
      </button>

      <div className="container">
        {/* TITLE */}
        <div className="sec_title_btn">
          <div>
            <h2>{title}</h2>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </div>

        {/* SLIDER */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={2}
          autoplay={{ delay: 4000 }}
          navigation={{
            prevEl: ".best-place-prev",
            nextEl: ".best-place-next",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}>
          {places.map((place) => (
            <SwiperSlide key={place.id}>
              <Link href={`/blog-details/${place.slug}`} className="exp_item">
                <figure>
                  {place.image && (
                    <Image
                      src={place.image}
                      alt={place.title}
                      width={600}
                      height={400}
                    />
                  )}
                  <figcaption></figcaption>
                </figure>

                <div className="exp_det">
                  <h3>{place.title}</h3>
                  {place.shortDescription && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: place.shortDescription,
                      }}
                    />
                  )}
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
