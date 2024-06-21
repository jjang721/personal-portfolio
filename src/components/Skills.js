import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import webdev from "../assets/img/web-dev.svg";
import backend from "../assets/img/backend.svg";
import lastskill from "../assets/img/last-skill.svg";


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>Some random words for me to put later</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={webdev} alt="Image" />
                                <h5>Web development</h5>
                             </div>
                             <div className="item">
                                <img src={backend} alt="Image" />
                                <h5>Database Management</h5>
                             </div>
                             <div className="item">
                                <img src={lastskill} alt="Image" />
                                <h5>Data Strcutures and Algorithms</h5>
                             </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )

}