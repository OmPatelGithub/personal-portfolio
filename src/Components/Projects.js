import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import StockMarket from "../assets/img/Stock Market.png"
import AIWheel from "../assets/img/AIwheel.png"
import Canam from "../assets/img/Canam.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "AI Powered Steering Wheel",
      description: "If you've ever wanted to have your very own racing setup right on your laptop, look no further. It won't quite replace a physical wheel but it's close enough and also really fun! This project was made with Python and Google's ML library MediaPipe. Wanna see whats happenning under the hood? Check out my github! A demo is also available on LinkedIn!",
      imgUrl: AIWheel,
    },
    {
      title: "Canam Groupe ERP System",
      description: "Description for Project 2",
      imgUrl: Canam,
    },
    {
      title: "AI Powered Options Scanner",
      description: "testAI Powered Options ScannerAI Powered Options ScannerAI Powered Options ScannerAI Powered Options ScannerAI Powered Options ScannerAI Powered Options ScannerAI Powered Options ScannerAI Powered Options ScannerAI Powered Options ScannerAI Powered Options ScannerAI Powered Options Scanner",
      imgUrl: StockMarket,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Technical Projects</h2>
                <p>Here is a collection of some of my favorite personal projects. It's an assortment of passion-driven endeavors that encompass innovative web applications, ERP (enterprise resource planning) systems and cutting-edge machine learning models, reflecting my journey as a versatile developer and designer.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">AI Powered Steering Wheel</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Canam Groupe ERP System</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">AI Powered Options Scanner</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.slice(0, 1).map((project, index) => {
                            return (
                              <Col key={index} size={12}>
                                <ProjectCard {...project}/>
                              </Col>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects.slice(1, 2).map((project, index) => {
                            return (
                              <Col key={index} size={12}>
                                <ProjectCard {...project} />
                              </Col>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects.slice(2, 3).map((project, index) => {
                            return (
                              <Col key={index} size={12}>
                                <ProjectCard {...project} />
                              </Col>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background Image" />
    </section>
  )
}
