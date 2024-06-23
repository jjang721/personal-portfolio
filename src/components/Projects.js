import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import projImg1 from '../assets/img/Passport.jpeg';
import { ProjectCard } from "./ProjectCard";


export const Projects = () => {
    const projects = [
        {
            title: "NBA Manual",
            decscription: "Guide to help beginners learn about the NBA",
            imgUrl: projImg1,
        },
        // {
        //     title: "Some other",
        //     decscription: "Guide to help beginners learn about the NBA",
        //     imgUrl: projImg2,
        // },

    ];

    return (
        <section className="project" id="project">
             
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>These are a list of my personal projects</p>
                        <div className="projects-container">
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                key={index}
                                                {...project} />
                                            )
                                        })
                                    }
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                key={index}
                                                {...project} />
                                            )
                                        })
                                    }
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                key={index}
                                                {...project} />
                                            )
                                        })
                                    }
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                key={index}
                                                {...project} />
                                            )
                                        })
                                    }
                                     {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                key={index}
                                                {...project} />
                                            )
                                        })
                                    }
                                    
                                    
    
                                {/* </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                another one
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                another one last
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    )

}