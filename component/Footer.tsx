import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row main_row">
          {/* Column 1 */}
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="f_widget">
              <Link className="f_logo" href="/">
                <Image
                  src="https://adda.net.in/assets/img/logo.png"
                  alt="Adda Inn"
                  width={160}
                  height={60}
                />
              </Link>

              <ul className="f_contact">
                <li>
                  <span>Address:</span> Judges Court Rd, Keranitola, Midnapore,
                  West Bengal 721101
                </li>
                <li>
                  <span>Phone:</span>{" "}
                  <a href="tel:8436008000">+91 8436008000</a>
                </li>
                <li>
                  <span>Email:</span>{" "}
                  <a href="mailto:info@addainn.com">info@addainn.com</a>
                </li>
                <li>
                  <span>Website:</span>{" "}
                  <a
                    href="https://adda.net.in/"
                    target="_blank"
                    rel="noopener noreferrer">
                    adda.net.in
                  </a>
                </li>
              </ul>

              <ul className="f_social">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61552328916761"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="ri-facebook-fill"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/adda_inn/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="ri-instagram-fill"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ri-twitter-fill"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ri-youtube-fill"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ri-whatsapp-fill"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="f_widget">
              <h3>Useful Links</h3>
              <ul className="f_link">
                <li>
                  <Link href="/about-us">About Us</Link>
                </li>
                <li>
                  <Link href="/banquet">Banquet</Link>
                </li>
                <li>
                  <Link href="/restaurant">Restaurant</Link>
                </li>
                <li>
                  <Link href="/room">Rooms</Link>
                </li>
                <li>
                  <Link href="/location">Location</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="f_widget">
              <h3>Support</h3>
              <ul className="f_link">
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <Link href="/contactus">Contact Us</Link>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Safety Information</a>
                </li>
                <li>
                  <a href="#">Covid-19 Measures</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4 */}
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="f_widget">
              <h3>Latest News</h3>
              <ul className="f_link">
                <li>
                  <Link href="/blog-details/jhargram-palace-heritage">
                    Jhargram Palace Heritage
                  </Link>
                </li>
                <li>
                  <Link href="/blog-details/gangani-garbetha-hidden-jewel">
                    Gangani: Garbetha&apos;s Hidden Jewel
                  </Link>
                </li>
                <li>
                  <Link href="/blog-details/exploring-the-enchanting-terracotta-temples">
                    Exploring the Enchanting Terracotta Temples
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Payment Cards */}
        <ul className="cards_list">
          <li>We accept</li>
          {["visa", "rupay", "mastercard", "paypal"].map((card) => (
            <li key={card}>
              <Image
                src={`https://adda.net.in/assets/img/${card}.png`}
                alt={card}
                width={60}
                height={40}
              />
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <div className="copyright">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <p className="copy_text">
                © 2023 Add Inn. | Powered by{" "}
                <a
                  href="https://bluehorse.in/"
                  target="_blank"
                  rel="noopener noreferrer">
                  BlueHorse Software
                </a>
              </p>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Terms & Condition</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
