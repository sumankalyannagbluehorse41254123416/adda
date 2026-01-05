"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    msg: "",
  });

  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.msg) {
      return;
    }
    console.log("Form Data:", form);
    setSuccessMsg("Your message has been sent successfully!");
    setForm({ name: "", email: "", subject: "", msg: "" });
  };

  return (
    <>
      <section className="about_banner">
        <div className="container">
          <div className="about_banner_inner">
            <h1>Contact Us</h1>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact_wrap">
        <div className="container">
          <div className="row">
            {/* Form */}
            <div className="col-lg-8 col-12">
              <form className="con_form" onSubmit={handleSubmit}>
                <h3>Write a Message</h3>
                <p>
                  Feel free to share your queries, we're here to listen and
                  assist you promptly.
                </p>

                <div className="fieldrow">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="fieldrow">
                  <label>Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="fieldrow">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="fieldrow">
                  <label>Message</label>
                  <textarea
                    name="msg"
                    value={form.msg}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit">Submit Your Message</button>

                {successMsg && (
                  <div className="text-success text-center mt-3">
                    {successMsg}
                  </div>
                )}
              </form>
            </div>

            {/* Map + Info */}
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
          </div>
        </div>
      </section>
    </>
  );
}
