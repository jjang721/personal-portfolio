import { Container, Row, Col } from "react-bootstrap";
import headshot from '../assets/img/Jang_Justin_Headshot.jpg'


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
                    <h2>About Me</h2>
                    <img className="img_deg" src={headshot} />
                    <p>        Hello! I'm a passionate developer with a knack for creating dynamic 
                                and responsive web applications. With a background in computer science 
                                and a love for coding, I've worked on various projects that showcase 
                                my skills in React, JavaScript, and web development. When I'm not coding, 
                                you can find me exploring new technologies, reading tech blogs, or enjoying 
                                outdoor activities. I'm always eager to learn and grow, and I look forward 
                                to collaborating on exciting projects. </p>
              
                </Col>
            </Row>
        </Container>
    </section>
    )
}