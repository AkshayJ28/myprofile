import SectionHeading from "../../BuildingBlocks/SectionHeading";
import { useEffect } from "react";
import styled from "styled-components";
import "../../Maincontainer.css";
import SectionService from "../../BuildingBlocks/SectionService";
import { useState } from "react";

const Services = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("service.json").then((service) => {
      service.json().then((service) => {
        setData(service);
      });
    });
  }, []);

  return (
    <>
      <SectionHeading title={"Technology"}></SectionHeading>
      <Service className="row p-5 services">
        {data &&
          data.servicecard.map((record, index) => {
            return (
              <div key={index} className="col-md-3 col-lg-3 services-items">
                <SectionService
                  image={record.image}
                  heading={record.heading}
                  description={record.description}
                ></SectionService>
              </div>
            );
          })}
      </Service>
    </>
  );
};
const Service = styled.div`
  .services-items img {
    margin-top: 30px;
    width: 120px;
    margin-bottom: 25px;
    transition: all 0.65s ease-in;
  }
  .services-items .card-body {
    text-align: center;
  }
  .services-items .card {
    position: relative;
    min-height: 230px;
    border: 1px solid #dee2e6;
    overflow: hidden;
    border-radius: 3px;
    margin-top: 20px;
  }
  .tittle {
    font-size: 1.5em;
  }

  .service-description {
    background-color: #fff;
    position: absolute;
    bottom: -100%;
    transition: all 0.65s ease-in;
  }
  .service-section-heading {
    background-color: #fff;
    position: absolute;
    bottom: -100px;
    transform: translate(-50%);
    left: 50%;
    transition: all 0.65s ease-in;
    text-align: center;
  }
  .services-items .card:hover .service-description {
    bottom: 40px;
    padding-right: 20px;
    padding-left: -6px;
    text-align: justify;
}
  }
  .services-items .card:hover .service-section-heading {
    bottom: 140px;
  }

  .services-items:hover img {
    opacity: 0;
    transition: opacity 0.55s ease-in-out;
    -moz-transition: opacity 0.55s ease-in-out;
    -webkit-transition: opacity 0.55s ease-in-out;
  }

  .services-items img:nth-child(2) {
    width: 300px !important;
  }
  .card{
    box-shadow: -1px 3px 21px -12px black;
    border:0px!important;
  }
  .card:hover{
   transform:scale(1.1);
   z-index:2;
  }
`;
export default Services;
