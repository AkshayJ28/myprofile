import Card from "react-bootstrap/Card";
import styled from "styled-components";
const SectionPricing = (props) => {
  return (
    <Price className="row pricing mb-5">
      <div className="col-md-4 pricing-items">
        <Card className="p-4">
          <div className="pricing-card-header text-center">
            {props.pricingimage}
          </div>

          <div className="pricing-card-body text-center">
            <h6 class="pricing-card-title text-center">{props.cardtitle}</h6>
            <div class="pricing-card-list">
              <p>{props.cardlist}</p>
            </div>

            <div class="pricing-card-footer">
              <span>$</span>
              <span>{props.cardfooterprice}</span>
            </div>
          </div>
          <a href="#" class="btn btn-primary mt-3">
            {props.subscribebutton}
          </a>
        </Card>
      </div>
    </Price>
  );
};
const Price = styled.div`
  .pricing-card-header img {
    width: 70px;
    margin-bottom: 25px;
  }
  .pricing-card-title {
    font-size: 2em;
    margin-bottom: 15px;
  }

  .pricing-card-footer {
    margin: 15px 0;
  }
  .pricing-card-footer span:first-child {
    position: relative;
    right: -6px;
    top: -6px;
  }
  .pricing-card-footer span {
    font-size: 2.5em;
    font-weight: 600;
    opacity: 0.8;
    margin-right: 5px;
  }
  .pricing-items .card a {
    width: 50%;
    margin: auto;
  }
`;
export default SectionPricing;
