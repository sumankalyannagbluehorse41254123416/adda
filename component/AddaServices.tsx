// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Thumbs, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/thumbs";

// export default function AddaServices() {
//   const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

//   return (
//     <section className="stay_wrap">
//       <div className="container">
//         <div className="sec_title_btn">
//           <div>
//             <h2>Adda Services</h2>
//             <h3>
//               Explore Our Top Banquet and Restaurant Services at Midnapore
//             </h3>
//           </div>
//         </div>

//         <div className="stay_inner">
//           <div className="left_stay">
//             {/* BIG SLIDER */}
//             <Swiper
//               id="service_big"
//               modules={[Thumbs, Autoplay]}
//               thumbs={{ swiper: thumbsSwiper }}
//               autoplay={{ delay: 3000 }}
//               loop
//               className="owl-carousel">
//               <SwiperSlide>
//                 <figure className="stay_item">
//                   <Image
//                     src="/assest/images/addaService/1699352917223.jpg"
//                     alt="Adda Inn"
//                     width={820}
//                     height={500}
//                   />
//                   <span>Restaurant</span>
//                 </figure>
//               </SwiperSlide>

//               <SwiperSlide>
//                 <figure className="stay_item">
//                   <Image
//                     src="/assest/images/addaService/1699355277004.jpg"
//                     alt="Adda Inn"
//                     width={820}
//                     height={500}
//                   />
//                   <span>Banquet</span>
//                 </figure>
//               </SwiperSlide>
//             </Swiper>

//             {/* THUMB SLIDER */}
//             <Swiper
//               id="service_thumbs"
//               onSwiper={setThumbsSwiper}
//               slidesPerView={2}
//               watchSlidesProgress
//               className="owl-carousel">
//               <SwiperSlide>
//                 <div className="stay_thumb">
//                   <Image
//                     src="https://wip.tezcommerce.com:3304/admin/module/71/1698822652192.png"
//                     alt="Adda Inn"
//                     width={60}
//                     height={60}
//                   />
//                   <div className="details">
//                     <h4>Banquet</h4>
//                     <p>
//                       Versatile banquet spaces for your special celebrations.
//                     </p>
//                   </div>
//                 </div>
//               </SwiperSlide>

//               <SwiperSlide>
//                 <div className="stay_thumb">
//                   <Image
//                     src="https://wip.tezcommerce.com:3304/admin/module/71/1699858590404.png"
//                     alt="Adda Inn"
//                     width={60}
//                     height={60}
//                   />
//                   <div className="details">
//                     <h4>Restaurant</h4>
//                     <p>Fine dining and warm ambiance await you.</p>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             </Swiper>
//           </div>

//           {/* FACILITIES */}
//           <ul className="stay_fac">
//             <li>
//               <Image
//                 src="https://wip.tezcommerce.com:3304/admin/module/71/1698822690633.png"
//                 alt="Adda Inn"
//                 width={40}
//                 height={40}
//               />
//               <p>Elevator</p>
//             </li>
//             <li>
//               <Image
//                 src="https://wip.tezcommerce.com:3304/admin/module/71/1698822729459.png"
//                 alt="Adda Inn"
//                 width={40}
//                 height={40}
//               />
//               <p>Meeting room</p>
//             </li>
//             <li>
//               <Image
//                 src="https://wip.tezcommerce.com:3304/admin/module/71/1698822785934.png"
//                 alt="Adda Inn"
//                 width={40}
//                 height={40}
//               />
//               <p>Parking</p>
//             </li>
//             <li>
//               <Image
//                 src="https://wip.tezcommerce.com:3304/admin/module/71/1698822822034.png"
//                 alt="Adda Inn"
//                 width={40}
//                 height={40}
//               />
//               <p>Fine Dining</p>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/thumbs";

import { fetchPageData, Section } from "@/lib/page"; // adjust path if needed

export default function AddaServices() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [pageTitle, setPageTitle] = useState("");
  const [pageDesc, setPageDesc] = useState("");
  const [sections, setSections] = useState<Section[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetchPageData({
          uid: "adda-services",
        });

        setPageTitle(res.pagedata.title);
        setPageDesc(res.pagedata.description || "");
        setSections(
          [...res.pageItemdataWithSubsection].sort(
            (a, b) => a.section_sequence - b.section_sequence
          )
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return null;

  /** Restaurant subsections = facilities */
  const facilities =
    sections.find((item) => item.title === "Restaurant")?.subsections || [];

  return (
    <section className="stay_wrap">
      <div className="container">
        <div className="sec_title_btn">
          <div>
            <h2>{pageTitle}</h2>
            <div dangerouslySetInnerHTML={{ __html: pageDesc }} />
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
                    src="/assest/images/addaService/1699352917223.jpg"
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
                    src="/assest/images/addaService/1699355277004.jpg"
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
              watchSlidesProgress>
              {sections.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="stay_thumb">
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={60}
                        height={60}
                      />
                    )}
                    <div className="details">
                      <h4>{item.title}</h4>
                      {item.shortDescription && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.shortDescription,
                          }}
                        />
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* FACILITIES */}
          {facilities.length > 0 && (
            <ul className="stay_fac">
              {facilities
                .sort(
                  (a: any, b: any) =>
                    a.subsection_sequence - b.subsection_sequence
                )
                .map((fac) => (
                  <li key={fac.id}>
                    {fac.image && (
                      <Image
                        src={fac.image}
                        alt={fac.title}
                        width={40}
                        height={40}
                      />
                    )}
                    <p>{fac.title}</p>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
