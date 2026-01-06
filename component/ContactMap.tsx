import React from "react";

const ContactMap = () => {
  return (
    <div className="col-lg-4 col-12">
      <div className="con_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2955.6758489293506!2d87.31385824855337!3d22.419994051625714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d5b45ecaeeb11%3A0xc8b9703704134727!2z4KaGZGRhIElubg!5e0!3m2!1sen!2sin!4v1699180239487!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <ul className="con_info">
        <li>
          <i className="ri-map-pin-2-line"></i>
          Judges Court Rd, Keranitola, Midnapore, West Bengal 721101
        </li>
        <li>
          <i className="ri-phone-fill"></i>
          <a href="tel:+918436008000">8436008000</a>
        </li>
        <li>
          <i className="ri-mail-line"></i>
          <a href="mailto:info@adda.net.in">info@adda.net.in</a>
        </li>
        <li>
          <i className="ri-earth-line"></i>
          <a href="https://adda.net.in/" target="_blank">
            adda.net.in
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactMap;
