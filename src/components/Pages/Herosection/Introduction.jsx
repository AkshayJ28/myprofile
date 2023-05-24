import { Button } from "react-bootstrap";
import styled from "styled-components";
import "../../Maincontainer.css";
import "../../../style/color.css";
import { BsArrowRightCircle } from "react-icons/bs";

const Introduction = () => {
  return (
    <MyIntroduction>
      <div className="">
        <div class="container">
          <div class="row align-items-center text-white">
            <div class="col-md-6 intros text-start">
              <h1 class="display-2">
                <span class="display-2--intro">Hey!, I'm Akshay</span>
                <span class="display-2--description lh-base">
                  Motivated DevOps engineer skilled in Cloud Infrastructure,
                  System admin, and Database. Automates workflows and optimizes
                  software devlopment processes to drive growth.
                </span>
              </h1>
              <br />
              <button type="button" class="rounded-pill btn-rounded">
                <a href="#contact">
                  {" "}
                  Get in Touch
                  <span>
                    <BsArrowRightCircle />
                  </span>
                </a>
              </button>
            </div>

            <div class="col-md-6 intros text-end">
              <div class="video-box">
                <img
                  src="header.png"
                  alt="video illutration"
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="wave"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,202.7C960,192,1056,96,1152,74.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </MyIntroduction>
  );
};

const MyIntroduction = styled.div`
  .display-2 {
    font-size: calc(1.575rem + 3.9vw);
    font-weight: 300;
    line-height: 1.2;
  }
  .display-2 {
    margin-bottom: 1rem;
    text-transform: capitalize;
    font-family: "Poppins", sans-serif;
  }
  .display-2--intro {
    display: inline-block;
    font-weight: 700;
    font-family: "Poppins", sans-serif;
    color: white;
  }
  .display-2--description {
    font-size: 1rem;
    display: block;
    margin-top: 1.2rem;
    text-transform: none;
    color: white;
    font-family: "Poppins", sans-serif;
    font-weight: 650;
    text-align: justify;
  }
  .lh-base {
    line-height: 1.5 !important;
  }

  .btn-rounded {
    position: relative;
    padding: 0.8375rem 4.375rem 0.8375rem 1.25rem;
    font-weight: 700;
    margin: 0;
    border: 0.1rem solid rgba(255, 255, 255, 0.6);
    background-color: #fff;
    display: block;
  }
  .rounded-pill {
    border-radius: 50rem !important;
  }
  .btn-rounded span {
    position: absolute;
    background-color: #9926f0;
    width: 2.5rem;
    height: 2.5rem;
    top: 50%;
    right: 5px;
    transform: translateY(-50%);
    border-radius: 50%;
  }
  path {
    color: white;
  }
  .wave {
    margin-top: -40px;
  }
  a {
    color: black;
    text-decoration: none;
  }
  svg {
    margin-top: 10px;
  }
`;

export default Introduction;
