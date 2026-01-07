// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Cta_wrap from "@/component/Cta_wrap";
// import { fetchPageData } from "@/lib/page";

// const categories = [
//   {
//     key: "Indian",
//     title: "Indian",
//     img: "/assest/images/restaurant/1699266093335.jpg",
//   },
//   {
//     key: "Chinese",
//     title: "Chinese",
//     img: "/assest/images/restaurant/1699266131351.jpg",
//   },
//   {
//     key: "Tandoor",
//     title: "Tandoor",
//     img: "/assest/images/restaurant/1699266150603.jpg",
//   },
//   {
//     key: "Bangla",
//     title: "Bangla",
//     img: "/assest/images/restaurant/1699266093335.jpg",
//   },
// ];

// const menuData = {
//   Indian: [
//     {
//       title: "Veg Fried Rice",
//       price: 199,
//       img: "1699249731115.jpg",
//       desc: "A flavorsome preparation with rice cooked with wide array of fresh vegetables in flavorful sauce.",
//     },
//     {
//       title: "Mix Fried Rice",
//       price: 288,
//       img: "1699249801304.jpg",
//       desc: "A flavorsome preparation with rice cooked with wide array of fresh vegetables in flavorful sauce.",
//     },
//     {
//       title: "Chicken Fried Rice",
//       price: 260,
//       img: "1699249857210.jpg",
//       desc: "A flavorsome preparation with rice cooked with wide array of fresh vegetables in flavorful sauce.",
//     },
//   ],
//   Chinese: [
//     {
//       title: "Veg Fried Rice",
//       price: 199,
//       img: "1699359745470.jpg",
//       desc: "A flavorsome preparation with rice cooked with wide array of fresh vegetables in flavorful sauce.",
//     },
//     {
//       title: "Chicken Fried Rice",
//       price: 260,
//       img: "1699359819744.jpg",
//       desc: "A flavorsome preparation with rice cooked with wide array of fresh vegetables in flavorful sauce.",
//     },
//   ],
//   Tandoor: [
//     {
//       title: "Tandoori Chicken",
//       price: 199,
//       img: "1699360377588.jpg",
//       desc: "A flavorsome preparation with rice cooked with wide array of fresh vegetables in flavorful sauce.",
//     },
//     {
//       title: "Tandoori Naan",
//       price: 260,
//       img: "1699360441879.jpg",
//       desc: "A flavorsome preparation with rice cooked with wide array of fresh vegetables in flavorful sauce.",
//     },
//   ],
//   Bangla: [
//     {
//       title: "Veg Rice",
//       price: 199,
//       img: "1699878158521.jpg",
//       desc: "A flavorsome preparation with rice cooked with wide array of fresh vegetables in flavorful sauce.",
//     },
//     {
//       title: "Fish Rice",
//       price: 288,
//       img: "1699878220501.jpg",
//       desc: "A flavorsome preparation with rice cooked with wide array of fresh vegetables in flavorful sauce.",
//     },
//     {
//       title: "Bengali Thali",
//       price: 300,
//       img: "1701772847982.jpg",
//       desc: "Enjoy a flavorful feast featuring diverse Bengali delicacies.",
//     },
//   ],
// };

// type CategoryKey = keyof typeof menuData;

// export default function MenuPage() {
//   const [activeTab, setActiveTab] = useState<CategoryKey>("Indian");
//   // useEffect(() => {
//   //   const UID = "33b55d9f-33bd-49b5-8120-b495b47c70e8";
//   //   const res = fetchPageData({ uid: UID });
//   //   console.log("res******************", res);
//   // });
//   return (
//     <>
//       {/* Banner */}
//       <section className="full_banner_wrap" id="banner">
//         <Image
//           src="https://wip.tezcommerce.com:3304/admin/module/71/1701935496791.jpg"
//           alt="Banner"
//           fill
//           priority
//           className="bg_img"
//         />
//         <div className="container">
//           <div className="fb_inner">
//             <h2>
//               Welcome to <br /> Adda
//             </h2>
//             <p>Midnapore's favorite dining destination and restaurant!</p>
//           </div>
//         </div>
//       </section>

//       {/* Menu */}
//       <section className="recipy_wrap">
//         <div className="container">
//           <div className="sec_title_btn center_align mb-4">
//             <h2 className="m-0">Our Menu</h2>
//           </div>

//           <ul className="nav rec_cat" role="tablist">
//             {categories.map((cat) => (
//               <li key={cat.key}>
//                 <a
//                   role="tab"
//                   aria-selected={activeTab === cat.key}
//                   className={activeTab === cat.key ? "active" : ""}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     // setActiveTab(cat.key || "Bangla");
//                   }}>
//                   <img src={cat.img} alt={cat.title} />
//                   <h5>{cat.title}</h5>
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//         {/* Content */}
//         <div className="rl_inner">
//           <div className="container">
//             <div className="row">
//               {menuData[activeTab].map((item, index) => (
//                 <div className="col-lg-6 col-md-12 col-12" key={index}>
//                   <div className="rl_item">
//                     <Image
//                       className="r_img"
//                       src={`https://wip.tezcommerce.com:3304/admin/module/71/${item.img}`}
//                       alt={item.title}
//                       width={120}
//                       height={120}
//                     />
//                     <div className="rl_con">
//                       <ul>
//                         <li>{activeTab}</li>
//                         <li>{item.price}</li>
//                       </ul>
//                       <h4>{item.title}</h4>
//                       <p>{item.desc}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* App Download */}
//       <section className="play_app_wrap">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-6 col-12">
//               <div className="pa_con">
//                 <h3>Get the App</h3>
//                 <p>
//                   Order your favorite food online using the Adda App with zero
//                   extra charges.
//                 </p>
//                 <a href="https://play.google.com/store/apps/details?id=com.ther.addarestaurant">
//                   <img src="/assets/img/google_play.png" alt="Google Play" />
//                 </a>
//               </div>
//             </div>
//             <div className="col-lg-6 col-12">
//               <img className="pa_img" src="/assets/img/get_app.png" alt="App" />
//             </div>
//           </div>
//         </div>
//       </section>
//       <Cta_wrap />
//     </>
//   );
// }
"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Cta_wrap from "@/component/Cta_wrap";
import { fetchBlogData } from "@/lib/blog";
import { fetchPageData } from "@/lib/page";
import Link from "next/link";

/* ---------------- TYPES ---------------- */

interface MenuItem {
  title: string;
  price: string;
  desc: string;
  img?: string;
  category: string;
  sequence?: number;
}

interface PageData {
  title: string;
  description?: string;
  cover_image_url?: string;
}

/* ---------------- HELPERS ---------------- */

const stripHtml = (html: string) => html.replace(/<\/?[^>]+(>|$)/g, "");

/* ---------------- CATEGORY IMAGES ---------------- */

const CATEGORY_IMAGES: Record<string, string> = {
  Indian: "/assest/images/restaurant/1699266093335.jpg",
  Chinese: "/assest/images/restaurant/1699266131351.jpg",
  Tandoor: "/assest/images/restaurant/1699266150603.jpg",
  Bangla: "/assest/images/restaurant/1699266093335.jpg",
};

export default function MenuPage() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [activeTab, setActiveTab] = useState<string>("");
  const [pageData, setPageData] = useState<PageData | null>(null);

  /* -------- FETCH MENU -------- */
  useEffect(() => {
    const loadMenu = async () => {
      try {
        const res = await fetchBlogData();

        const items: MenuItem[] = res.userPostdata.map((post) => ({
          title: post.title,
          price: post.tag,
          desc: stripHtml(post.excerpt || ""),
          img: post.featured_image_url || undefined,
          category: post.author_name,
          sequence: post.sequence as number | undefined,
        }));

        setMenuItems(items);

        if (items.length) {
          setActiveTab(items[0].category);
        }
      } catch (error) {
        console.error("Menu fetch error:", error);
      }
    };

    loadMenu();
  }, []);

  /* -------- FETCH PAGE (BANNER) -------- */
  useEffect(() => {
    const UID = "33b55d9f-33bd-49b5-8120-b495b47c70e8";

    const loadPage = async () => {
      try {
        const res = await fetchPageData({ uid: UID });

        setPageData({
          title: res.pagedata.title,
          description: stripHtml(res.pagedata.description || ""),
          cover_image_url: res.pagedata.cover_image_url,
        });
      } catch (error) {
        console.error("Page fetch error:", error);
      }
    };

    loadPage();
  }, []);

  /* -------- GROUP MENU -------- */
  const groupedMenu = useMemo(() => {
    const group: Record<string, MenuItem[]> = {};

    menuItems.forEach((item) => {
      if (!group[item.category]) {
        group[item.category] = [];
      }
      group[item.category].push(item);
    });

    Object.keys(group).forEach((key) => {
      group[key].sort((a, b) => (a.sequence ?? 0) - (b.sequence ?? 0));
    });

    return group;
  }, [menuItems]);

  const categories = useMemo(() => {
    return Object.keys(groupedMenu).map((key) => ({
      key,
      title: key,
      img: CATEGORY_IMAGES[key] || "/assest/images/restaurant/default.jpg",
    }));
  }, [groupedMenu]);

  return (
    <>
      <section className="full_banner_wrap" id="banner">
        {pageData?.cover_image_url && (
          <Image
            src={pageData.cover_image_url}
            alt={pageData.title}
            fill
            priority
            className="bg_img"
          />
        )}

        <div className="container">
          <div className="fb_inner">
            <h2>
              {pageData?.title?.split(" ").slice(0, 2).join(" ")}
              <br />
              {pageData?.title?.split(" ").slice(2).join(" ")}
            </h2>
            <p>{pageData?.description}</p>
          </div>
        </div>
      </section>
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
                    setActiveTab(cat.key);
                  }}>
                  <img src={cat.img} alt={cat.title} />
                  <h5>{cat.title}</h5>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="rl_inner">
          <div className="container">
            <div className="row">
              {groupedMenu[activeTab]?.map((item, index) => (
                <div className="col-lg-6 col-md-12 col-12" key={index}>
                  <div className="rl_item">
                    {item.img && (
                      <Image
                        className="r_img"
                        src={item.img}
                        alt={item.title}
                        width={120}
                        height={120}
                      />
                    )}
                    <div className="rl_con">
                      <ul>
                        <li>{item.category}</li>
                        <li>₹ {item.price}</li>
                      </ul>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}

              {!groupedMenu[activeTab]?.length && (
                <p className="text-center">No items available</p>
              )}
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
                <Link href="https://play.google.com/store/apps/details?id=com.ther.addarestaurant">
                  <img
                    src="/assest/images/restaurant/google_play.png"
                    alt="Google Play"
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <img
                className="pa_img"
                src="/assest/images/restaurant/get_app.png"
                alt="App"
              />
            </div>
          </div>
        </div>
      </section>

      <Cta_wrap />
    </>
  );
}
