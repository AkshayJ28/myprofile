import styled from "styled-components";

const Hiring = () => {
  return (
    <>
      <Hire className="row align-items-center hiring p-4">
        <div className="col-12 col-md-6">
          <h6 className="title text-light">
            Let's Team up for Professional Excellence!
          </h6>
          <p className="m-0 text-light">
            Feel free to Contact or Block my calendar.
          </p>
        </div>
        <div className="col-12 col-md-6  hire-button">
          <a target="_blank" href="#">
            <img src="google-calendar.png" />
          </a>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <a target="_blank" href="#">
            <img src="upwork.png" />
          </a>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <a target="_blank" href="#">
            <img src="fiverr.png" className="fiver" />
          </a>
        </div>
      </Hire>
    </>
  );
};

const Hire = styled.div`
  .hiring {
    margin: auto;
    text-align: center;
  }
  .hiring p,
  h6 {
    text-align: justify;
  }
  .hire-button {
    text-align: end;
  }
  .hire-button a {
    color: #000;
    text-decoration: none;
  }
  .hire-button a img {
    width: 60px;
  }
  .fiver {
    border-radius: 8px;
  }
`;
export default Hiring;
