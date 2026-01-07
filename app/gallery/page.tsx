// "use client";

// import { useState } from "react";

// const tabs = ["All", "Restaurants", "Room", "Banquet"];

// export default function Gallery() {
//   const [activeTab, setActiveTab] = useState("All");

//   return (
//     <>
//       {/* Banner */}
//       <section className="about_banner" id="banner">
//         <div className="container">
//           <div className="about_banner_inner">
//             <h1>Gallery</h1>
//             <ul>
//               <li>
//                 <a href="https://adda.net.in">Home</a>
//               </li>
//               <li>Gallery</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* Gallery */}
//       <section className="gallery_wrap">
//         <div className="container">
//           <div className="g_inner">
//             {/* Tabs */}
//             <ul className="nav g_filter" role="tablist">
//               {tabs.map((tab) => (
//                 <li key={tab} role="presentation">
//                   <button
//                     type="button"
//                     className={activeTab === tab ? "active" : ""}
//                     onClick={() => setActiveTab(tab)}>
//                     {tab}
//                   </button>
//                 </li>
//               ))}
//             </ul>

//             {/* All */}
//             {activeTab === "All" && (
//               <div className="tabcontent">
//                 <div className="row">
//                   <GalleryItem
//                     img="https://wip.tezcommerce.com:3304/admin/module/71/1699421692119.jpg"
//                     label="Hotel"
//                   />
//                   <GalleryItem
//                     img="https://wip.tezcommerce.com:3304/admin/module/71/1699352585348.jpg"
//                     label="Restaurants"
//                   />
//                   <GalleryItem
//                     img="https://wip.tezcommerce.com:3304/admin/module/71/1699354383645.jpg"
//                     label="Rooms"
//                   />
//                   <GalleryItem
//                     img="https://wip.tezcommerce.com:3304/admin/module/71/1698834267028.jpg"
//                     label="Banquet"
//                   />
//                 </div>
//               </div>
//             )}

//             {/* Restaurants */}
//             {activeTab === "Restaurants" && (
//               <div className="tabcontent">
//                 <div className="row">
//                   <GalleryItem
//                     img="https://wip.tezcommerce.com:3304/admin/module/71/1699352585348.jpg"
//                     label="Restaurants"
//                   />
//                 </div>
//               </div>
//             )}

//             {/* Room */}
//             {activeTab === "Room" && (
//               <div className="tabcontent">
//                 <div className="row">
//                   <GalleryItem
//                     img="https://wip.tezcommerce.com:3304/admin/module/71/1699354383645.jpg"
//                     label="Rooms"
//                   />
//                 </div>
//               </div>
//             )}

//             {/* Banquet */}
//             {activeTab === "Banquet" && (
//               <div className="tabcontent">
//                 <div className="row">
//                   <GalleryItem
//                     img="https://wip.tezcommerce.com:3304/admin/module/71/1698834267028.jpg"
//                     label="Banquet"
//                   />
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// /* Reusable Item */
// function GalleryItem({ img, label }: { img: string; label: string }) {
//   return (
//     <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
//       <a data-lightbox="example-1" href={img} className="exp_item g_item">
//         <figure>
//           <img src={img} alt="Adda Inn" />
//           <figcaption>
//             <div className="exp_con">
//               {label}
//               <span></span>
//             </div>
//           </figcaption>
//         </figure>
//       </a>
//     </div>
//   );
// }

// **************************************************************************
"use client";

import { useEffect, useMemo, useState } from "react";
import { fetchPageData, Section } from "@/lib/page";
import Lightbox from "@/component/Lightbox";

const PAGE_UID = "b98b0e57-5335-4bec-8a5e-0c984d23d889";

export default function Gallery() {
  const [loading, setLoading] = useState(true);
  const [sections, setSections] = useState<Section[]>([]);
  const [activeTab, setActiveTab] = useState<string>("All");

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetchPageData({ uid: PAGE_UID });
        setSections(res.pageItemdataWithSubsection || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const tabs = useMemo(() => {
    const uniqueTitles = Array.from(
      new Set(sections.map((item) => item.title))
    );
    // return ["All", "sumn", ...uniqueTitles];
    return ["All", "Restaurants", "Rooms", "Banquet"];
  }, [sections]);
  const filteredItems =
    activeTab === "All"
      ? sections
      : sections.filter((item) => item.title === activeTab);

  const images = filteredItems
    .map((item) => item.image)
    .filter(Boolean) as string[];

  if (loading) return null;

  return (
    <>
      {/* Banner */}
      <section className="about_banner" id="banner">
        <div className="container">
          <div className="about_banner_inner">
            <h1>Gallery</h1>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Gallery</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery_wrap">
        <div className="container">
          <div className="g_inner">
            {/* Tabs */}
            <ul className="nav g_filter" role="tablist">
              {tabs.map((tab) => (
                <li key={tab} role="presentation">
                  <button
                    type="button"
                    className={activeTab === tab ? "active" : ""}
                    onClick={() => setActiveTab(tab)}>
                    {tab}
                  </button>
                </li>
              ))}
            </ul>

            {/* Content */}
            <div className="tabcontent">
              <div className="row">
                {filteredItems.map((item, index) => (
                  <GalleryItem
                    key={item.id}
                    img={item.image || ""}
                    label={item.title}
                    onClick={() => {
                      setCurrentIndex(index);
                      setLightboxOpen(true);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {lightboxOpen && (
        <Lightbox
          images={images}
          index={currentIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={() =>
            setCurrentIndex((i) => (i - 1 + images.length) % images.length)
          }
          onNext={() => setCurrentIndex((i) => (i + 1) % images.length)}
        />
      )}
    </>
  );
}

function GalleryItem({
  img,
  label,
  onClick,
}: {
  img: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
      <div className="exp_item g_item" onClick={onClick}>
        <figure>
          <img src={img} alt={label} />
          <figcaption>
            <div className="exp_con">
              {label}
              <span></span>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
