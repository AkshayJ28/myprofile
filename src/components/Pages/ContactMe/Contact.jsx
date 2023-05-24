import styled from "styled-components";
import SectionHeading from "../../BuildingBlocks/SectionHeading";
const Contact = () => {
  return (
    <>
      <SectionHeading title={"Contact Me"}></SectionHeading>

      <form className="contact-form col-md-10 col-lg-8 m-auto">
        <ContactMe className="form-row row"></ContactMe>
        <div className="form-text row">
          <div className="form-group col-sm-12"></div>

        </div>
      </form>
    </>
  );
};
const ContactMe = styled.div`
  .form-row > .col,
  .form-row > [className*="col-"] {
    padding-right: 5px;
    padding-left: 5px;
  }
  .form-group {
    margin-bottom: 1rem;
  }
  .form-row {
    display: flex;
  }
`;
export default Contact;
