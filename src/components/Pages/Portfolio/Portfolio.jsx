import { useState } from "react";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import SectionHeading from "../../BuildingBlocks/SectionHeading";

const Portfolio = () => {
  const [data, setData] = useState();
  const [expData, setExpData] = useState();
  useEffect(() => {
    fetch("experience.json").then((experience) => {
      experience.json().then((experience) => {
        setExpData(experience);
      });
    });

    fetch("education.json").then((education) => {
      education.json().then((education) => {
        setData(education);
      });
    });
  }, []);
  return (
    <>
      <Education className="row portfolio p-5">
        <div className="col-md-6">
          <SectionHeading title={"Education"}></SectionHeading>
          {data &&
            data.education.map((record) => {
              return (
                <card key={record.id} className="col-md-9 portfolio-card">
                  <Card>
                    <Card.Body className="text-center">
                      <img src={record.schoolimage} className="school-logo" />
                      <h3 className="tittle text-center py-3">
                        {record.stream}
                      </h3>
                      <h6 className="tittle text-center">
                        {record.institutionname}
                        <br />({record.year})
                      </h6>
                    </Card.Body>
                  </Card>
                </card>
              );
            })}
        </div>

        <div className="col-md-6">
          <SectionHeading title={"Experience"}></SectionHeading>
          {expData &&
            expData.experience.map((record) => {
              return (
                <card key={record.id} className="col-md-9 portfolio-card">
                  <Card>
                    <Card.Body className="text-center">
                      <img src={record.comapnyimage} className="school-logo" />
                      <h3 className="tittle text-center py-2  ">
                        {record.profile}
                      </h3>
                      <h6 className="tittle text-center py-2">
                        {record.workdescription}
                      </h6>
                      <h6 className="tittle text-center">
                        {record.companyname}&nbsp;&nbsp;({record.year})
                      </h6>
                    </Card.Body>
                  </Card>
                </card>
              );
            })}
        </div>
      </Education>
    </>
  );
};
const Education = styled.div`
  .card {
    box-shadow: 1px 0px 19px -12px black;
    border: 0;
  }
  .card:hover {
    transform: scale(1.1);
    z-index: 2;
  }

  .card {
    max-width: 460px;
    margin: auto;
    margin-bottom: 20px;
  }
`;
export default Portfolio;
