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
              href="https://calendar.google.com/calendar/embed?src=paurushartwani09%40gmail.com&ctz=Asia%2FKolkata"
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
              href="https://calendar.google.com/calendar/embed?src=paurushartwani09%40gmail.com&ctz=Asia%2FKolkata"
            >
              <img src="linkedin.svg" />
            </a>
            &nbsp;
            <a
              className="socials"
              target={"_blank"}
              title="Instagram"
              href="https://www.instagram.com/paurush_artwani09/"
            >
              <img src="instagram.svg" />
            </a>
            &nbsp;
            <a
              className="socials"
              target={"_blank"}
              title="Facebook"
              href="https://www.facebook.com/people/Paurush-Artwani/pfbid0Q6zvzkYCdbzufnuktnkkKWm6Qt2M9euCX2yNpqA4MikDcQWhkWgBPMNNpJFTXtRRl/"
            >
              <img src="facebook.svg" />
            </a>
            &nbsp;
            <a
              className="socials"
              target={"_blank"}
              title="Twitter"
              href="https://www.facebook.com/people/Paurush-Artwani/pfbid0Q6zvzkYCdbzufnuktnkkKWm6Qt2M9euCX2yNpqA4MikDcQWhkWgBPMNNpJFTXtRRl/"
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
