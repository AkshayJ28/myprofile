import { Button } from "react-bootstrap";
import styled from "styled-components";
import "../../Maincontainer.css";
import SectionHeading from "../../BuildingBlocks/SectionHeading";
const Aboutme = () => {
  return (
    <>
      <AboutMe className="row p-5">
        <div
          className="col-12 col-md-4 about-img-holder"
          style={{ borderRadius: "50px" }}
        >
          <img src="man.png" alt="" style={{ borderRadius: "120rem" }} />
        </div>
        <div className="col-12 col-md-8 about-caption ">
          <SectionHeading title={"About Me"} align="left"></SectionHeading>
          <p className="section-description-about">
            My name is Akshay Jain, I am a computer technician with a great
            passion for programming. I am passionate about delivering solutions
            that add to people's lives and at the same time challenge me.
            Improved my skills as a Front-End Developer. I develop websites and
            applications using React, HTML, CSS, and JavaScript. I am familiar
            with developing layouts that are provided to me. I'm always
            improving myself with each project put in my hands. I am a dedicated
            person who pursues his dreams, hardworking and results oriented, I
            always seek to achieve my best version.
          </p>
          <div className="action-button ">
            <Button>
              <a href="AkshayResume.pdf" download className="resume">
                Download Resume
              </a>
            </Button>

            <Button className="letter">
              <a
                href="Akshay Jain_cover_letter.docx"
                download
                className="resume"
              >
                Download Cover Letter
              </a>
            </Button>
          </div>
        </div>
      </AboutMe>
    </>
  );
};
const AboutMe = styled.div`
 .about-img-holder img {
    width: 95%;
    height: 98%;
}

  .section-description-about {
    font-size: 1em;
    font-weight: 100;
    opacity: 1;
    color: #111;
    letter-spacing: 0.6px;
  }
  .about-caption button {
    border-radius: 100px;
    background: transparent;
    color: #695aa6;
  }
  .resume{
    color:color: rgb(105, 90, 166);
    text-decoration:none;
  }
  .letter{
    margin-left:15px;

  }
`;
export default Aboutme;
