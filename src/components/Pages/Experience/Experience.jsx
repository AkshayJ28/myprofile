import { useState } from "react";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import SectionHeading from "../../BuildingBlocks/SectionHeading";

const Experience = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("experience.json").then((experience) => {
      experience.json().then((experience) => {
        setData(experience);
      });
    });
  }, []);
  return (
    <>
      <SectionHeading title={"Experience"}></SectionHeading>
      <MyExperience>
        <div className="row portfolio p-5">
          {data &&
            data.experience.map((record) => {
              return (
                <card key={record.id} className="col-md-5 portfolio-card">
                  <Card>
                    <Card.Body className="text-center">
                      <img src={record.comapnyimage} className="school-logo" />
                      <h3 className="tittle text-center py-2">
                        {record.profile}
                      </h3>
                      <h6 className="tittle text-center py-4">
                        {record.workdescription}
                      </h6>
                      <h5 className="tittle text-center py-1">
                        {record.companyname}&nbsp;&nbsp;({record.year})
                      </h5>
                    </Card.Body>
                  </Card>
                </card>
              );
            })}
        </div>
      </MyExperience>
    </>
  );
};

const MyExperience = styled.div`
  .card {
    box-shadow: 1px 0px 19px -12px black;
    border: 0;
  }
  .card:hover {
    transform: scale(1.1);
    z-index: 2;
  }
  .portfolio {
    justify-content: center;
  }
`;
export default Experience;
