import {
  BsFacebook,
  BsLinkedin,
  BsInstagram,
  BsFillEnvelopeFill,
  BsCalendarDayFill,
} from "react-icons/bs";

import styled from "styled-components";

const Copyright = () => {
  return (
    <>
      <Footer id="contact" className="footer row p-4">
        <div className="col-md-12 text-center social-links">
          <div className="social-media-links">
            <a
              className="socials"
              target={"_blank"}
              title="Mail Me"
              href="mailto:akshayjain2807@gmail.com"
            >
              <img src="gmail.svg" />
            </a>
            &nbsp;
            <a
              className="socials"
              target={"_blank"}
              title="Phone"
              href="tel:+91-8619642465"
            >
              <img src="phone.png" className="dialer" />
            </a>
            &nbsp;
            <a
              className="socials"
              target={"_blank"}
              title="Linkdin"
              href="https://www.linkedin.com/in/akshay-jain-126970119/"
            >
              <img src="linkedin.svg" />
            </a>
            &nbsp;
            <a
              className="socials"
              target={"_blank"}
              title="Instagram"
              href="https://www.instagram.com/iamakki28/"
            >
              <img src="instagram.svg" />
            </a>
            &nbsp;
            <a
              className="socials"
              target={"_blank"}
              title="Facebook"
              href="https://www.facebook.com/iamakki28/"
            >
              <img src="facebook.svg" />
            </a>
            &nbsp;
            <a
              className="socials"
              target={"_blank"}
              title="Twitter"
              href="https://twitter.com/AkshayJ2807?t=7H0ZJ_3lyIMs7zWsxB8jRw&s=09"
            >
              <img src="twitter.svg" />
            </a>
            &nbsp;
          </div>
        </div>
        <div className="col-md-12 text-center copyright-text">
          <p className="mb-0 text-center  ">Copyright © Akshay Jain</p>
        </div>
      </Footer>
    </>
  );
};
const Footer = styled.div`
  svg {
    font-size: 30px;
    color: #004b91;
  }
  .socials {
    position: relative;
    display: inline-block;
    width: 90px;
    height: 90px;
    text-align: center;

    padding: 15px;
    transition: 0.6s;

    margin-right: 50px;
    margin-left: 50px;
  }
  .socials img {
    height: 100%;
    width: 100%;
  }
  .socials:hover {
    transform: translate(0, -10px);
  }
  .social-media-links {
    margin-top: -40px;
  }
  .dialer {
    width: 120% !important;
    height: 120% !important;
  }
  .copyright-text {
    margin-top: 50px;
  }
`;
export default Copyright;
