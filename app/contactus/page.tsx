"use client";

import ContactMap from "@/component/ContactMap";
import { submitFormData } from "@/lib/contact";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validateForm()) return;

    try {
      setIsSubmitting(true);

      await submitFormData(
        {},
        "d7e1dbb2-b461-4e68-9ce3-fae73396e979",
        formData
      );

      toast.success("Submitted Your Message");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
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

      <section className="contact_wrap">
        <div className="container">
          <div className="row">
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
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <span className="text-danger">{errors.name}</span>
                  )}
                </div>

                <div className="fieldrow">
                  <label>Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <span className="text-danger">{errors.email}</span>
                  )}
                </div>

                <div className="fieldrow">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && (
                    <span className="text-danger">{errors.subject}</span>
                  )}
                </div>

                <div className="fieldrow">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <span className="text-danger">{errors.message}</span>
                  )}
                </div>

                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Your Message"}
                </button>

                {/* {successMessage && (
                  <div className="text-success text-center mt-3">
                    {successMessage}
                  </div>
                )} */}
              </form>
            </div>

            <ContactMap />
          </div>
        </div>
      </section>
    </>
  );
}
