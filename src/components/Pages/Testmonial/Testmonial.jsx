import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import "../../Maincontainer.css";
import SectionHeading from "../../BuildingBlocks/SectionHeading";

const Testmonial = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("project.json").then((project) => {
      project.json().then((project) => {
        setData(project);
      });
    });
  }, []);
  return (
    <>
      <SectionHeading title={"Projects"}></SectionHeading>

      <Testimonial className="row testmonial-section">
        {data &&
          data.projects.map((record) => {
            return (
              <div className="col-md-6 ">
                <div className="testimonial-card">
                  <div className="testimonial-card-body">
                    <h6 className="testimonial-card-title text-center">
                      {record.projectname}
                    </h6>
                    <p className="testimonial-card-subtitle">
                      {record.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </Testimonial>
    </>
  );
};
const Testimonial = styled.div`
  .testimonial-card-img-holder {
    min-width: 45px;
    max-width: 45px;
    z-index: 999;
  }
  .testimonial-card-body {
    text-align: left;
    border: 1px solid #dee2e6;
    background: #fff;
    padding: 20px;
    border-radius: 0;
    min-height: 250px;
  }
  .testimonial-card-img {
    background: #fff;
    padding: 4px;
    width: 90px;
    height: 90px;
    border-radius: 50%;
  }
  .testimonial-card {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }
`;
export default Testmonial;
