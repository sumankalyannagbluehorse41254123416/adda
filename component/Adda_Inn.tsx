import { fetchPageData } from "@/lib/page";
import Image from "next/image";
interface PageData {
  title: string;
  cover_image_url: string;
  description: string;
}
export default async function About() {
  const UID = "bce33728-d1bd-453e-babd-85e2cc2aeb9c";
  const res = await fetchPageData({ uid: UID });
  // console.log("res******", res);
  const data = res?.pagedata as PageData;
  return (
    <section className="about_wrap">
      <div className="container">
        <div className="row">
          {/* Left Content */}
          <div className="col-lg-7 col-md-12 col-sm-12 col-12">
            <h2>{res.pagedata?.title || "NO Title"}</h2>
            <h3>The Boutique Hotel</h3>
            <span
              dangerouslySetInnerHTML={{
                __html: data?.description,
              }}
            />
          </div>

          {/* Right Image */}
          <div className="col-lg-5 col-md-12 col-sm-12 col-12">
            <figure>
              <Image
                src={data?.cover_image_url || "/images/noFoundimages.jpeg"}
                alt="Adda Inn"
                width={500}
                height={600}
                className="img-fluid"
              />
              <span></span>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
