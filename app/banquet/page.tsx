import { fetchPageData } from "@/lib/page";
import Image from "next/image";
// const banquetItems = [
//   {
//     title: "Club House",
//     image: "https://wip.tezcommerce.com:3304/admin/module/71/1699875957137.jpg",
//   },
//   {
//     title: "Pavilion 1",
//     image: "https://wip.tezcommerce.com:3304/admin/module/71/1699875910150.jpg",
//   },
//   {
//     title: "Pavilion 2",
//     image: "https://wip.tezcommerce.com:3304/admin/module/71/1699254713531.jpg",
//   },
//   {
//     title: "Meeting Room",
//     image: "https://wip.tezcommerce.com:3304/admin/module/71/1699254760118.jpg",
//   },
// ];
export default async function FullBanner() {
  const UID = "2852b9ee-0765-4c58-8b8a-5a8923948a61";
  const res = await fetchPageData({ uid: UID });
  // console.log("res++++++", res);
  const data = res?.pagedata;
  const section = res?.pageItemdataWithSubsection[0];
  const subsections = section?.subsections;
  return (
    <>
      <section className="full_banner_wrap" id="banner">
        <Image
          src={data?.cover_image_url || "/images/noFoundimages.jpeg"}
          alt="Banquet hall and meeting room setup"
          fill
          priority
          className="bg_img"
          sizes="100vw"
        />

        <div className="container">
          <div className="fb_inner">
            <h1>{data?.title || "No Title"}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: data?.description || "No description",
              }}
            />
          </div>
        </div>
      </section>
      <section className="banq_wrap">
        <div className="container">
          <div className="banq_title">
            <h3>{section?.title || "No Title"}</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: section?.shortDescription || "No Description",
              }}
            />
          </div>

          <div className="row">
            {Array.isArray(subsections) &&
              subsections.map((item, index) => (
                <div
                  className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12"
                  key={index}>
                  <div className="banq_item">
                    <Image
                      src={item?.image || "/images/noFoundimages.jpeg"}
                      alt={item?.title || "No Title"}
                      width={400}
                      height={300}
                    />

                    <span className="shape1"></span>
                    <span className="shape2"></span>
                    <span className="shape3"></span>
                    <span className="shape4"></span>

                    <h3>{item?.title}</h3>
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
