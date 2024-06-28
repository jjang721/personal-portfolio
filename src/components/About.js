import { Container, Row, Col } from "react-bootstrap";
import headshot from '../assets/img/Screenshot 2024-06-25 at 7.06.25 PM.png'
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";


// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       console.log(entry)
//       if (entry.isIntersecting){
//         entry.target.classList.add('show');
//       }else{
//         entry.target.classList.remove('show');
//       }
//     });
//   });
  
//   const hiddenElements = document.querySelectorAll(".p");
//   hiddenElements.forEach((el) => observer.observe(el))

export const About = () => {
    return (
        <section className="about" id="about me">
        <Container>
            <Row>
                <Col>
                <TrackVisibility>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__backInLeft animate__slow": ""}>
                    <h2>About Me</h2>
                    <img className="img_deg" src={headshot} />
                    <p>    Hello! I'm a passionate developer with a knack for creating dynamic 
                                and responsive online projects. With a background in computer science and mathematics
                                , I've worked on various projects that showcase 
                                my skills in React, JavaScript, and web development. When I'm not coding, 
                                you can find me playing the violin in Brown University's Orchestra, working out, or playing basketball
                                at the Omac. I'm always eager to learn and grow, and I look forward 
                                to collaborating on exciting projects! </p>
                                </div>}
              </TrackVisibility>
                </Col>
            </Row>
        </Container>
    </section>
    )
}