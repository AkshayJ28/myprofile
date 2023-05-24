import Card from "react-bootstrap/Card";
const SectionService = (props) => {
  return (
    <Card>
      <Card.Body>
        <img src={props.image} alt="" />
        <h6 className="tittle text-center service-section-heading">
          {props.heading}
        </h6>
        <p className="service-description">{props.description}</p>
        <h6 className="tittle text-center">{props.stream}</h6>
      </Card.Body>
    </Card>
  );
};

export default SectionService;
