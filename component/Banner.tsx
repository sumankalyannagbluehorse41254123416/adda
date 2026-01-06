// import { fetchBanner } from "@/lib/banner";
// import Image from "next/image";
// interface BannerData {
//   id: number;
//   title: string;
//   description: string;
//   desktopImage: string;
//   collection?: string;
//   status: string;
//   type: string;
// }
// export default async function Banner() {
//   const UID = "e0805c28-4a5e-4b07-af80-cb323e20b3b6";
//   const res = await fetchBanner({ uid: UID });
//   const data = res?.singlebannerData as BannerData;
//   // console.log("Data ****** ", data);
//   return (
//     <section className="banner_wrap" id="banner">
//       <div className="container">
//         <div className="banner_inner">
//           <figure>
//             <Image
//               src="https://wip.tezcommerce.com:3304/admin/module/71/1701865552931.jpg"
//               alt="Adda Inn"
//               width={1600}
//               height={800}
//               priority
//               className="banner_img"
//             />
//           </figure>

//           <div className="banner_con">
//             <h1>{data?.title || "No Title"}</h1>
//             <p>
//               Book the best place to stay, starting from ₹800 per night, and
//               enjoy a luxury boutique hotel experience.
//             </p>

//             <form className="hb_form">
//               <input
//                 type="text"
//                 name="datefilter"
//                 placeholder="Check In - Check Out"
//               />
//               <input type="number" placeholder="No of Guest" />
//               <button type="submit">Check Availability</button>
//             </form>
//           </div>

//           {/* Mobile Form */}
//           <form className="hb_form hbm_form">
//             <input
//               type="text"
//               name="datefilter"
//               placeholder="Check In - Check Out"
//             />
//             <input type="number" placeholder="No of Guest" />
//             <button type="submit">Check Availability</button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

import { fetchBanner } from "@/lib/banner";
import Image from "next/image";

export default async function Banner() {
  const UID = "e0805c28-4a5e-4b07-af80-cb323e20b3b6";
  const res = await fetchBanner({ uid: UID });

  const banner = res?.singlebannerData[0] as any;
  // const banner = banners?.[0];

  return (
    <section className="banner_wrap" id="banner">
      <div className="container">
        <div className="banner_inner">
          <figure>
            <Image
              src={banner?.desktopImage || "/images/noFoundimages.jpeg"}
              alt={banner?.title || "Banner Image"}
              width={1600}
              height={800}
              priority
              className="banner_img"
            />
          </figure>

          <div className="banner_con">
            <h1>{banner?.title || "asdds"}</h1>

            <div
              dangerouslySetInnerHTML={{
                __html: banner?.description || "",
              }}
            />

            <form className="hb_form">
              <input
                type="text"
                name="datefilter"
                placeholder="Check In - Check Out"
              />
              <input type="number" placeholder="No of Guest" />
              <button type="submit">Check Availability</button>
            </form>
          </div>

          {/* Mobile Form */}
          <form className="hb_form hbm_form">
            <input
              type="text"
              name="datefilter"
              placeholder="Check In - Check Out"
            />
            <input type="number" placeholder="No of Guest" />
            <button type="submit">Check Availability</button>
          </form>
        </div>
      </div>
    </section>
  );
}
