import React from "react";
import "./Contact.css";
import { IoIosCall } from "react-icons/io";
import { IoChatboxEllipses } from "react-icons/io5";
import { MdChatBubble } from "react-icons/md";

const Contact = () => {
  const phoneNumber = "02112314514";

  const handleCallNowClick = () => {
    window.location.href = `tel:+${phoneNumber}`;
  };

  const handleMessageButtonClick = () => {
    window.location.href = `sms:+${phoneNumber}`;
  };

  return (
    <section className="c-wrapper">
      <div className="padding innerWidth flexCenter c-container">
        <div className="flexColStart c-left">
          <h5 className="orangeText">Contact Us</h5>
          <h3 className="primaryText">Easy to contact us</h3>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you.{" "}
          </span>
          <span className="secondaryText">
            We beleive a good blace to live can make your life better.
          </span>
          <div className="flexColStart contactModes">
            {/* first mode */}
            <div className="flexStart row">
              {/* first card */}
              <div className="flexColCenter mode">
                <div className="flexStart detailContainer">
                  <div className="flexCenter icon">
                    <IoIosCall size={25} onClick={handleCallNowClick} />
                  </div>
                  <div className="flexColStart detail">
                    <span>Call</span>
                    <span>021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter">
                  <button className="button" onClick={handleCallNowClick}>
                    Call Now
                  </button>
                </div>
              </div>
              {/*second card  */}
              <div className="flexColCenter mode">
                <div className="flexStart detailContainer">
                  <div className="flexCenter icon">
                    <IoChatboxEllipses size={25} onClick={handleCallNowClick} />
                  </div>
                  <div className="flexColStart detail">
                    <span>Chat</span>
                    <span>021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter">
                  <button className="button" onClick={handleCallNowClick}>
                    Chat Now
                  </button>
                </div>
              </div>
            </div>
            {/* second mode */}
            <div className="flexStart row">
              {/* third card */}
              <div className="flexColCenter mode">
                <div className="flexStart detailContainer">
                  <div className="flexCenter icon">
                    <IoChatboxEllipses size={25} onClick={handleCallNowClick} />
                  </div>
                  <div className="flexColStart detail">
                    <span>Video Call</span>
                    <span>021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter">
                  <button className="button" onClick={handleCallNowClick}>
                    Call Now
                  </button>
                </div>
              </div>
              {/* fourth card */}
              <div className="flexColCenter mode">
                <div className="flexStart detailContainer">
                  <div className="flexCenter icon">
                    <MdChatBubble
                      size={25}
                      onClick={handleMessageButtonClick}
                    />
                  </div>
                  <div className="flexColStart detail">
                    <span>Message</span>
                    <span>021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter">
                  <button className="button" onClick={handleMessageButtonClick}>
                    Message Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="c-left">
        <div className="image-container">
            <img src="images/value.png" alt="Home" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
