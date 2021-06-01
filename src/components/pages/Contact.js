import React from "react";

const Contact = () => {
  return (
    <div className="parallax">
      <div data-aos="zoom-in-up" data-aos-once="true" className="git-form">
        <>
          <div className="git-head-div text-center mx-auto">
            <h1 id="Contact" className="git-head">
              Get in Touch{" "}
            </h1>
          </div>
        </>
        <div className="container">
          <div className="git-cont row">
            <div className="col-12 col-sm-6 half">
              <form
                action={
                  "https://formspree.io/f/xyylenjy"
                    ? "https://formspree.io/f/xyylenjy"
                    : "https://formspree.io"
                }
                method={"https://formspree.io/f/xyylenjy" ? "POST" : "GET"}
              >
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your name"
                  required
                ></input>
                <input
                  type="mail"
                  id="mailid"
                  name="Email"
                  placeholder="Email Address"
                  required
                ></input>
                <input
                  type="text"
                  id="sub"
                  name="Subject"
                  placeholder="Subject"
                  required
                ></input>
                <textarea
                  id="msg"
                  name="message"
                  placeholder="Message"
                  required
                ></textarea>
                <button style={{ cursor: "pointer" }} type="submit">
                  <label style={{ cursor: "pointer" }} id="not-dark">
                    Send Message
                  </label>
                </button>
              </form>
            </div>
            <div className="col-12 col-sm-6 half">
              <p className="lead">
                {" "}
                Interested on working together? Fill out the form with some info
                about your project and I will get back to you as soon as I can.
                Please allow a couple of days for me to respond.
              </p>
              <div className="d-flex justify-content-center align-items-center flex-column">
                <div className="inline-block">
                  <a
                    title="Visit Linkedin profile"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/thalha-muksith/"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    title="Visit Github profile"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/thalhaMuk"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p id="not-dark" className="Copy">
        2021 © Copyright <strong>Thalha Muksith</strong>. All Rights Reserved
      </p>
    </div>
  );
};

export default Contact;
