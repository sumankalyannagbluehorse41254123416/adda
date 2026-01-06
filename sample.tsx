"use client";

import { submitFormData } from "@/lib/contact";
import { fetchPageData } from "@/lib/page";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface ApiSubsection {
  id: number;
  title: string;
  shortDescription?: string;
}

interface ApiSection {
  id: number;
  title: string;
  shortDescription?: string;
  section_sequence: number;
  subsections: ApiSubsection[];
}

interface Page {
  title: string;
  cover_image_url?: string;
  description?: string;
}

const ContactPage: React.FC = () => {
  const UID = "1ff79d11-fed9-45e9-8a1d-b919c4363653";

  const [pageData, setPageData] = useState<Page | null>(null);
  const [sections, setSections] = useState<ApiSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };
  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      phone: "",
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
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
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

    const isValid = validateForm();
    if (!isValid) return;

    try {
      setIsSubmitting(true);

      await submitFormData(
        {},
        "e6adee7e-5715-4814-9f94-537e460110b4",
        formData
      );

      toast.success("Feedback submitted successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Your message could not be sent. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const loadPage = async () => {
      try {
        const res = await fetchPageData({ uid: UID });

        setPageData(res?.pagedata ?? null);

        const items = res?.pageItemdataWithSubsection ?? [];
        setSections(items as any);
      } catch (error) {
        console.error("Failed to load page data", error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadPage();
  }, []);

  if (loading) {
    return <p className="text-center mt-5">Loading...</p>;
  }

  return (
    <>
      <div className="clearfix"></div>

      <section className="page-banner">
        <div
          className="page-banner-bg bg_cover1"
          style={{
            backgroundImage: pageData?.cover_image_url
              ? `url(${pageData.cover_image_url})`
              : undefined,
          }}>
          <div className="container">
            <div className="banner-content text-center">
              <h2 className="title">{pageData?.title}</h2>
            </div>
          </div>
        </div>
      </section>

      <div className="contact-form">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-title text-center">
              <h3 className="title">{sections[0]?.title}</h3>

              <div
                dangerouslySetInnerHTML={{
                  __html: sections[0]?.shortDescription || "",
                }}
              />
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-form-wrapper">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="single-form">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && (
                        <span className="text-danger">{errors.name}</span>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="single-form">
                      <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <span className="text-danger">{errors.email}</span>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="single-form">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />

                      {errors.phone && (
                        <span className="text-danger">{errors.phone}</span>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="single-form">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />

                      {errors.subject && (
                        <span className="text-danger">{errors.subject}</span>
                      )}
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="single-form">
                      <textarea
                        name="message"
                        placeholder="Write here..."
                        value={formData.message}
                        onChange={handleChange}
                      />
                      {errors.message && (
                        <span className="text-danger">{errors.message}</span>
                      )}
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="single-form text-center">
                      <button
                        type="submit"
                        className="main-btn"
                        disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit now"}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <section className="contact-area">
        <div className="container">
          <div className="row">
            {sections.slice(1).map((item) => (
              <div className="col-md-4" key={item.id}>
                <div className="single-contact-info mt-30">
                  <div className="info-icon">
                    {item.title === "Address" && (
                      <i className="fas fa-map-marker-alt"></i>
                    )}
                    {item.title === "Phone" && <i className="fas fa-phone"></i>}
                    {item.title === "Web" && <i className="fas fa-globe"></i>}
                  </div>

                  <div className="info-content">
                    <h5 className="title">{item.title}</h5>

                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.shortDescription || "",
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
