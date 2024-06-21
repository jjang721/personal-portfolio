import { useState, useEffect} from 'react';
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-image.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { isVisible } from '@testing-library/user-event/dist/utils';


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const [text,setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000
    
    useEffect(() => {
        let ticker = setInterval(() => {

        }, delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length - 1) : fullText.substring(0,text.length + 1);

        setText(updatedText);

        if (isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }
        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if (!isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={10} md={5} xl={7}>
                    <TrackVisibility>
                    {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__backInLeft animate__slow": ""}>
                    {/* <span className="tagline">
                        Welcome to my website
                    </span> */}
                    <h1>
                        <span className="wrap"> {"Hi, I'm Justin Jang"}
                        </span>
                    </h1>
                        <p>Welcome to my portfolio!</p>
                        <button onClick={(() => console.log("connect"))}>
                            Lets connect<ArrowRightCircle size={25}/>
                        </button>
                        </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Image"/>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}