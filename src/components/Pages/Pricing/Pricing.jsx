import SectionPricing from "../../BuildingBlocks/SectionHeading";
import SectionHeading from "../../BuildingBlocks/SectionHeading";
// import "../../../src/style/color.css";
const Pricing = () => {
  return (
    <>
      <SectionHeading title={"My Pricing"}></SectionHeading>

      <SectionPricing
        cardtitle={"Free"}
        cardlist={"loreum"}
        cardfooterprice={"0.00/Month"}
        subscribebutton={"Subscribe"}
      ></SectionPricing>
    </>
  );
};

export default Pricing;
