import { Col } from "react-bootstrap"
import TrackVisibility from "react-on-screen"

export const ProjectCard = ({title, description, imgUrl}) => {
    return (
        <Col sm={6} md={3}>
            <div className="proj-imgbx">
            
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>

                </div>
               
            </div>
            
        </Col>

    )

}