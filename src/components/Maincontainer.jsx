import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbarsection from "./HeaderSection/Navbarsection";
import Introduction from "./Pages/Herosection/Introduction";
import Aboutme from "./Pages/AboutMe/Aboutme";
import Services from "./Pages/Services/Services";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Pricing from "./Pages/Pricing/Pricing";
import Hiring from "./Pages/Hire/Hiring";
import Testmonial from "./Pages/Testmonial/Testmonial";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/ContactMe/Contact";
import Copyright from "./Pages/footer/Copyright";

const Maincontainer = () => {
  return (
    <>
      {/* <Navbarsection></Navbarsection> */}
      <div className="intro-section">
        <Container fluid>
          <Introduction></Introduction>
        </Container>
      </div>

      <Container fluid>
        <Container>
          <Aboutme></Aboutme>
        </Container>
      </Container>

      <Container>
        <Services></Services>
      </Container>

      <Container>
        <Portfolio></Portfolio>
      </Container>

      {/* <Container>
        <Pricing></Pricing>
      </Container> */}
      <br />
      <br />
      <Container fluid style={{ background: "#695aa6" }}>
        <Container>
          <Hiring></Hiring>
        </Container>
      </Container>

      <Container fluid>
        <Container>
          <Testmonial></Testmonial>
        </Container>
      </Container>

      <Container fluid>
        <Container>
          <Blog></Blog>
        </Container>
      </Container>

      <Container>
        <Container>
          <Contact></Contact>
        </Container>
      </Container>

      <Container>
        <Container>
          <Copyright></Copyright>
        </Container>
      </Container>
    </>
  );
};

export default Maincontainer;
