// import { fetchPageData } from "@/lib/page";
// import Image from "next/image";
// import Link from "next/link";

// export default async function AboutPage() {
//   const UID = "fbb72dd1-d596-42eb-b70d-58a1c9add47c";
//   const res = await fetchPageData({ uid: UID });
//   const data = res?.pageItemdataWithSubsection;
//   const sunsection = res?.pageItemdataWithSubsection

//   console.log("res++++++", data);

//   return (
//     <>
//       {/* About Banner */}
//       <section className="about_banner">
//         <div className="container">
//           <div className="about_banner_inner">
//             <h1>About Us</h1>
//             <ul>
//               <li>
//                 <Link href="/">Home</Link>
//               </li>
//               <li>About Us</li>
//             </ul>
//           </div>
//         </div>
//       </section>
//       <section className="about_wrap about_hotel">
//         <div className="container">
//           <div className="row">
//             {/* Left Content */}
//             <div className="col-lg-8 col-md-12 col-sm-12 col-12">
//               <h2>Adda Inn</h2>
//               <h3>The Boutique Hotel</h3>
//               <p>
//                 Adda Inn, a top-rated hotel and restaurant in Midnapore, is the
//                 best place to stay and dine. Conveniently located near Medinipur
//                 Railway Station, it offers a delightful experience for travelers
//                 seeking great food and comfortable accommodations in the heart
//                 of the city.
//                 <br />
//                 <br />
//                 Adda Inn, located in Midnapore, offers a wide array of
//                 facilities to enhance your stay. From well-appointed rooms to a
//                 multi-cuisine restaurant, spacious banquet halls for events, and
//                 a dedicated staff committed to your comfort, we ensure a
//                 memorable experience. Discover the cultural richness of
//                 Midnapore with its vibrant history, festive celebrations, and
//                 renowned educational institutions. As a destination for both
//                 travelers and explorers, it's an ideal choice to enjoy a
//                 comfortable and culturally enriching stay.
//               </p>
//             </div>

//             {/* Right Card */}
//             <div className="col-lg-4 col-md-12 col-sm-12 col-12">
//               <div className="brand-info">
//                 <div className="inner">
//                   <div className="content">
//                     <Image
//                       src="https://wip.tezcommerce.com:3304/admin/module/71/1701864221021.jpg"
//                       alt="Adda Inn"
//                       width={100}
//                       height={100}
//                     />

//                     <div className="stars">
//                       <div>
//                         <i className="fa fa-star"></i>
//                         <i className="fa fa-star"></i>
//                         <i className="fa fa-star"></i>
//                         <i className="fa fa-star"></i>
//                         <i className="fa fa-star"></i>
//                       </div>
//                     </div>

//                     <h5 className="title">Luxury &amp; Affordable Hotel</h5>

//                     <div className="desc">
//                       <p>
//                         Experience luxury and affordability combined at our
//                         hotel.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* End Right Card */}
//           </div>
//         </div>
//       </section>
//       <section className="Features_wrap">
//         <div className="container">
//           <div className="sec_title_btn mb-3">
//             <div>
//               <h2 className="m-0">Features</h2>
//             </div>
//           </div>

//           <div className="row">
//             <div className="col-lg-3 col-md-6 col-sm-6 col-6">
//               <div className="Features_box">
//                 <Image
//                   src="https://wip.tezcommerce.com:3304/admin/module/71/1698830557569.png"
//                   alt="Adda Inn"
//                   width={80}
//                   height={80}
//                 />
//                 <h3 className="count">22</h3>
//                 <p>Rooms</p>
//               </div>
//             </div>

//             <div className="col-lg-3 col-md-6 col-sm-6 col-6">
//               <div className="Features_box">
//                 <Image
//                   src="https://wip.tezcommerce.com:3304/admin/module/71/1698830599553.png"
//                   alt="Adda Inn"
//                   width={80}
//                   height={80}
//                 />
//                 <h3 className="count">1</h3>
//                 <p>Restaurant</p>
//               </div>
//             </div>

//             <div className="col-lg-3 col-md-6 col-sm-6 col-6">
//               <div className="Features_box">
//                 <Image
//                   src="https://wip.tezcommerce.com:3304/admin/module/71/1698830630236.png"
//                   alt="Adda Inn"
//                   width={80}
//                   height={80}
//                 />
//                 <h3 className="count">3</h3>
//                 <p>Staff</p>
//               </div>
//             </div>

//             <div className="col-lg-3 col-md-6 col-sm-6 col-6">
//               <div className="Features_box">
//                 <Image
//                   src="https://wip.tezcommerce.com:3304/admin/module/71/1699340349348.png"
//                   alt="Adda Inn"
//                   width={80}
//                   height={80}
//                 />
//                 <h3 className="count">1</h3>
//                 <p>Meeting Room</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       (
//       <section className="staff_wrap staff_setion">
//         <div className="container">
//           <div className="sec_title_btn staff_sec_box">
//             <div>
//               <h3>Our Celebrity Guests</h3>
//             </div>
//           </div>

//           <div className="row">
//             <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
//               <div className="staff_item">
//                 <figure>
//                   <Image
//                     src="https://wip.tezcommerce.com:3304/admin/module/71/1699874065798.jpg"
//                     alt="Adda Inn"
//                     width={300}
//                     height={350}
//                   />
//                   <span>testing-singer</span>
//                 </figure>
//                 <div className="staff_det">
//                   <h3>testing</h3>
//                   <p>
//                     Lorem Ipsum which looks many web sites pass websites is
//                     therefore always.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
//               <div className="staff_item">
//                 <figure>
//                   <Image
//                     src="https://wip.tezcommerce.com:3304/admin/module/71/1698831115661.jpg"
//                     alt="Adda Inn"
//                     width={300}
//                     height={350}
//                   />
//                   <span>Receptionist</span>
//                 </figure>
//                 <div className="staff_det">
//                   <h3>Henry Garrett</h3>
//                   <p>
//                     Lorem Ipsum which looks many web sites pass websites is
//                     therefore always.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
//               <div className="staff_item">
//                 <figure>
//                   <Image
//                     src="https://wip.tezcommerce.com:3304/admin/module/71/1698831197357.jpg"
//                     alt="Adda Inn"
//                     width={300}
//                     height={350}
//                   />
//                   <span>Chef</span>
//                 </figure>
//                 <div className="staff_det">
//                   <h3>Tommy Alexander</h3>
//                   <p>
//                     Lorem Ipsum which looks many web sites pass websites is
//                     therefore always.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
//               <div className="staff_item">
//                 <figure>
//                   <Image
//                     src="https://wip.tezcommerce.com:3304/admin/module/71/1698831274234.jpg"
//                     alt="Adda Inn"
//                     width={300}
//                     height={350}
//                   />
//                   <span>Hotel Manager</span>
//                 </figure>
//                 <div className="staff_det">
//                   <h3>Penny Soto</h3>
//                   <p>
//                     Lorem Ipsum which looks many web sites pass websites is
//                     therefore always.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
import { fetchPageData } from "@/lib/page";
import Image from "next/image";
import Link from "next/link";

interface SubSection {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
}

interface PageSection {
  id: number;
  title: string;
  shortDescription: string;
  image: string;
  section_sequence: number;
  subsections: SubSection[];
}

interface PageData {
  title: string;
  description: string;
}

export default async function AboutPage() {
  const UID = "fbb72dd1-d596-42eb-b70d-58a1c9add47c";
  const res = await fetchPageData({ uid: UID });

  const page = res?.pagedata;

  const sections: PageSection[] =
    res?.pageItemdataWithSubsection?.map((s: any) => ({
      id: s.id,
      title: s.title,
      shortDescription: s.shortDescription ?? "",
      image: s.image ?? "",
      section_sequence: s.section_sequence ?? s.sequence ?? 0,
      subsections:
        s.subsections?.map((sub: any) => ({
          id: sub.id,
          title: sub.title,
          description: sub.description ?? "",
          image: sub.image ?? "",
          slug: sub.slug,
        })) ?? [],
    })) ?? [];

  const brandSection = sections.find((s) => s.section_sequence === 1);
  const featuresSection = sections.find((s) => s.section_sequence === 2);
  const guestSection = sections.find((s) => s.section_sequence === 3);

  return (
    <>
      <section className="about_banner">
        <div className="container">
          <div className="about_banner_inner">
            <h1>About Us</h1>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="about_wrap about_hotel">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <h2>{page?.title}</h2>
              <h3>The Boutique Hotel</h3>

              <div
                dangerouslySetInnerHTML={{
                  __html: page?.description ?? "",
                }}
              />
            </div>

            {brandSection && (
              <div className="col-lg-4 col-md-12">
                <div className="brand-info">
                  <div className="inner">
                    <div className="content">
                      <Image
                        src={brandSection.image}
                        alt={brandSection.title}
                        width={120}
                        height={120}
                      />

                      <div className="stars">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="fa fa-star"></i>
                        ))}
                      </div>

                      <h5 className="title">{brandSection.title}</h5>

                      <div
                        className="desc"
                        dangerouslySetInnerHTML={{
                          __html: brandSection.shortDescription,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {featuresSection && (
        <section className="Features_wrap">
          <div className="container">
            <div className="sec_title_btn mb-3">
              <h2 className="m-0">{featuresSection.title}</h2>
            </div>

            <div className="row">
              {featuresSection.subsections.map((item) => (
                <div key={item.id} className="col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="Features_box">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={80}
                      height={80}
                    />
                    <h3 className="count">{item.title}</h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.description,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= Celebrity Guests ================= */}
      {guestSection && (
        <section className="staff_wrap staff_setion">
          <div className="container">
            <div className="sec_title_btn staff_sec_box">
              <h3>{guestSection.title}</h3>
            </div>

            <div className="row">
              {guestSection.subsections.map((guest) => (
                <div
                  key={guest.id}
                  className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="staff_item">
                    <figure>
                      <Image
                        src={guest.image}
                        alt={guest.title}
                        width={300}
                        height={350}
                      />
                      {/* <span>{guest.slug}</span> */}
                      <span
                        dangerouslySetInnerHTML={{
                          __html: guest.description,
                        }}
                      />
                    </figure>

                    <div className="staff_det">
                      <h3>{guest.title}</h3>
                      {/* <div
                        dangerouslySetInnerHTML={{
                          __html: guest.description,
                        }}
                      /> */}
                      Lorem Ipsum which looks many web sites pass websites is
                      therefore always
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
