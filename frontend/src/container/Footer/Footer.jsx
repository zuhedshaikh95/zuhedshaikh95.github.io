import { useState } from "react";
import {motion} from "framer-motion";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Footer.scss";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const Footer = () => {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmit, setIsSubmit] = useState(true);
  const [isLoading, setLoading] = useState(false);

  const { name, email, phone, message } = formData;

  const handleChangeInput = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      phone: phone,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      isSubmit(false);
    });
  };

  return (
    <>
      <h2 id="contacts" className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:zuhed95@gmail.com" className="p-text">
            zuhed95@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="mailto: +91 7796291997" className="p-text">
            +91 77962 91997
          </a>
        </div>
      </div>

      {isSubmit ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Full Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="tel"
              placeholder="Phone"
              name="phone"
              value={phone}
              onChange={handleChangeInput}
            />
          </div>

          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            ></textarea>
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <motion.h2 
          className="head-text"
          whileInView={{y: [200, 0], opacity: [0, 1]}}
          transition={{duration: 0.7}}
          >Thank You for getting in touch!</motion.h2>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "footer",
  "app_whitebg"
);
