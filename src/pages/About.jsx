import { Container, Row, Col, Card } from "react-bootstrap";
import TimelineSection from "./TimelineSection";
import TeamSection from "./TeamSection";

const About = () => {
  return (
    <section className="py-5 bg-white">
      
      <Container>
        <h2 className="text-center mb-4 fw-bold">About SmartStudyHub</h2>
        <p className="text-center mb-5 text-muted">
          SmartStudyHub is a next-gen software solutions company driven by innovation and client success. We specialize in crafting custom digital products, automating workflows, and empowering businesses through cutting-edge technology and scalable solutions.
        </p>

        <Row className="g-4">
          <Col md={4}>
            <Card className="text-center border-0 shadow-sm h-100">
              <Card.Body>
                <i className="bi bi-gear fs-1 text-primary mb-3"></i>
                <Card.Title>What We Do</Card.Title>
                <Card.Text>
                  From website and mobile app development to automation, UI/UX design, and branding — we deliver tailored tech solutions that drive impact and efficiency for startups and enterprises.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="text-center border-0 shadow-sm h-100">
              <Card.Body>
                <i className="bi bi-bar-chart-line fs-1 text-warning mb-3"></i>
                <Card.Title>Our Vision</Card.Title>
                <Card.Text>
                  To be a trusted digital transformation partner, helping businesses grow with reliable, scalable, and smart solutions that align with their goals and future demands.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="text-center border-0 shadow-sm h-100">
              <Card.Body>
                <i className="bi bi-person-check fs-1 text-success mb-3"></i>
                <Card.Title>Why Choose Us?</Card.Title>
                <Card.Text>
                  We blend creativity, technology, and strategy to deliver high-quality digital services on time. Our agile team focuses on transparency, support, and measurable results.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={12}>
            <p className="text-center text-muted fs-5 px-md-5">
              With a growing portfolio of clients across industries, SmartStudyHub has established itself as a one-stop solution for all digital needs. Whether it's building your online presence, automating operations, or launching a new product — we bring ideas to life with professionalism, performance, and precision.
            </p>
            <p className="text-center text-muted fs-5 px-md-5 mt-3">
              In addition to our services, we also offer internship and training programs to nurture fresh talent, empowering students with practical skills and real-world experience that align with today’s tech landscape.
            </p>
          </Col>
        </Row>
      </Container>
      <TeamSection/>
      <TimelineSection/>
    </section>
    
  );
 
};

export default About;
