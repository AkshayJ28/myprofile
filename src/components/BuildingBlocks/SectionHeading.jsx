import styled from "styled-components";
import "../../../src/style/color.css";

const SectionHeading = (props) => {
  return (
    <div className="py-5">
      <SectionHeadingContainer align={props.align}>
        <p className="section-subtitle-about ">{props.subtitle}</p>
        <h6 className="section-title-about mb-6">{props.title}</h6>
      </SectionHeadingContainer>
    </div>
  );
};

export default SectionHeading;

const SectionHeadingContainer = styled.div`
  text-align: ${(props) =>
    props.align && props.align === "left" ? "left" : "center"};
  .section-subtitle-about {
    margin-bottom: 6px;
    font-weight: 400;
    opacity: 0.6;
  }
  .section-title-about {
    font-size: 2em;
    font-weight: 1000;
    font-family: "Baloo Paaji ", cursive;
    color: var(--section-heading);
  }
`;
