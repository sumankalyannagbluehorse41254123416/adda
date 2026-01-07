import Image from "next/image";
import Link from "next/link";
import React from "react";
interface RecentPost {
  title: string;
  slug: string;
  image: string;
}
const recentPosts: RecentPost[] = [
  {
    title: "Jhargram Palace Heritage",
    slug: "jhargram-palace-heritage-41",
    image:
      "https://wip.tezcommerce.com:3304/admin/iUdyog/blog/71/1704180479992.jpg",
  },
  {
    title:
      "Gangani: Garbetha's Hidden Jewel - A Tranquil Retreat and Tourist Attraction",
    slug: "gangani:-garbetha's-hidden-jewel---a-tranquil-retreat-and-tourist-attraction",
    image:
      "https://wip.tezcommerce.com:3304/admin/iUdyog/blog/71/1704180237621.jpg",
  },
  {
    title: "Exploring the Enchanting Terracotta Temples",
    slug: "exploring-the-enchanting-terracotta-temples",
    image:
      "https://wip.tezcommerce.com:3304/admin/iUdyog/blog/71/1700216426706.jpg",
  },
];
const BestPlacesRecentPost = () => {
  return (
    <aside>
      <div className="sidebar-widget latest-news">
        <div className="sidebar-title">
          <h3>Recent Posts</h3>
        </div>

        <div className="widget-content">
          {recentPosts.map((post, index) => (
            <article className="post" key={index}>
              <figure className="thumb">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={120}
                  height={80}
                />
              </figure>

              <h5>
                <Link
                  href={`/blog-details/${post.slug}`}
                  className="overlay-link">
                  {post.title}
                </Link>
              </h5>
            </article>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default BestPlacesRecentPost;
