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
            This is Akshay Jain, Experienced DevOps Engineer with a passion for
            automating and streamlining processes to enhance software
            development and deployment. With three years of hands-on experience,
            I have a solid understanding of the DevOps methodology and its core
            principles. My expertise lies in designing, implementing, and
            managing infrastructure as code, continuous integration and
            continuous deployment (CI/CD) pipelines, and cloud-based solutions.
            <br />
            Throughout my career, I have successfully collaborated with
            cross-functional teams to ensure smooth integration of development
            and operations. I have a strong foundation in scripting languages
            such as Bash, Shell and Python, allowing me to automate repetitive
            tasks and improve overall efficiency. Additionally, I have extensive
            experience working with configuration management tools like Ansible
            and containerization technologies like Docker and Kubernetes.
            <br />I thrive in fast-paced environments where I can utilize my
            problem-solving skills to identify and resolve issues quickly. I am
            adept at monitoring and optimizing system performance, ensuring high
            availability and scalability. Moreover, I am well-versed in
            implementing security best practices and ensuring compliance with
            industry standards.
            <br />
            As a DevOps Engineer, I am committed to continuous learning and
            staying up to date with the latest tools and technologies in the
            field. I am driven by a desire to drive innovation and enable
            seamless software delivery through efficient infrastructure
            management and automation. I enjoy collaborating with diverse teams,
            sharing knowledge, and fostering a culture of continuous
            improvement.
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
  width: 100%;
    height: 70%;
    margin-top: 6rem;
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
