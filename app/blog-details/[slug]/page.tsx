// "use client";

// import BestPlacesRecentPost from "@/component/BestPlacesRecentPost";
// import Image from "next/image";
// import Link from "next/link";

// export default function BlogDetails() {
//   return (
//     <section className="blogWrapper">
//       <div className="container">
//         <div className="blog_inner">
//           {/* MAIN BLOG */}
//           <article className="mainBlog">
//             <Image
//               src="https://wip.tezcommerce.com:3304/admin/iUdyog/blog/71/1704180479992.jpg"
//               alt="Jhargram Palace Heritage"
//               width={1200}
//               height={600}
//               className="w-full h-auto"
//               priority
//             />

//             <div className="editor_box">
//               <h1>Jhargram Palace Heritage</h1>
//             </div>

//             <div className="editor_box">
//               <p>
//                 <em>
//                   "Jhargram Palace Heritage: A Regal Sojourn in the Heart of
//                   Jhargram"
//                 </em>
//               </p>

//               <p>
//                 Step into the regal past of Jhargram as we unravel the grandeur
//                 and history encapsulated within the Jhargram Palace Heritage.
//                 This iconic tourist attraction stands as a testament to
//                 architectural brilliance and cultural richness.
//               </p>

//               <h3>Jhargram Palace Heritage - An Architectural Marvel</h3>
//               <p>
//                 Delve into the architectural splendor of Jhargram Palace
//                 Heritage, a palatial marvel that echoes the opulence of a bygone
//                 era.
//               </p>

//               <h3>Unveiling the History of Jhargram Palace</h3>
//               <p>
//                 Discover the captivating history that unfolds within the walls
//                 of Jhargram Palace. Each corridor echoes tales of the past.
//               </p>

//               <h3>Things to Do at Jhargram Palace Heritage</h3>
//               <p>
//                 From guided tours to cultural events, explore experiences that
//                 make this palace a dynamic tourist attraction.
//               </p>

//               <h3>Nearby Places to Explore</h3>
//               <p>
//                 Discover Deer Park, Kanak Durga Temple, and lush landscapes that
//                 surround Jhargram Palace Heritage.
//               </p>

//               <h3>How to Reach Jhargram Palace Heritage</h3>
//               <p>
//                 Whether traveling by road or rail, reaching Jhargram Palace
//                 Heritage is seamless and convenient.
//               </p>

//               <strong>Conclusion</strong>
//               <p>
//                 Jhargram Palace Heritage offers a perfect blend of history,
//                 architecture, and culture—making it a must-visit destination.
//               </p>
//             </div>
//           </article>
//           <BestPlacesRecentPost />
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import BestPlacesRecentPost from "@/component/BestPlacesRecentPost";
import { fetchPageData } from "@/lib/page";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// export default async function BlogDetails({ params }: PageProps) {
export default async function BlogDetails({ params }: PageProps) {
  const { slug } = await params;

  // const UID = "0c385fd9-349c-487c-9d70-4785d15164e7";
  const data = await fetchPageData({
    // uid: slug,
    uid: slug,
  });

  const { pagedata, pageItemdataWithSubsection } = data;

  return (
    <section className="blogWrapper">
      <div className="container">
        <div className="blog_inner">
          <article className="mainBlog">
            {pagedata.cover_image_url && (
              <Image
                src={pagedata.cover_image_url}
                alt={pagedata.title}
                width={1200}
                height={600}
                className="w-full h-auto"
                priority
              />
            )}

            <div className="editor_box">
              <h1>{pagedata.title}</h1>
            </div>

            {pagedata.description && (
              <div
                className="editor_box"
                dangerouslySetInnerHTML={{
                  __html: pagedata.description,
                }}
              />
            )}

            {pageItemdataWithSubsection
              .sort((a, b) => a.section_sequence - b.section_sequence)
              .map((section) => (
                <div key={section.id} className="editor_box">
                  {section.subsections?.map((sub) => (
                    <div key={sub.id}>
                      <h3>{sub.title}</h3>

                      {sub.description && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: sub.description,
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              ))}
            <strong>{pageItemdataWithSubsection[1]?.title}</strong>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  pageItemdataWithSubsection[1]?.shortDescription ||
                  "No description",
              }}
            />
          </article>

          <BestPlacesRecentPost />
        </div>
      </div>
    </section>
  );
}
