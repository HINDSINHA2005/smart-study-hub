import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
  return (
    <section className="py-5 bg-white">
      <Container>
        <h2 className="text-center mb-4 fw-bold">About SmartStudyHub</h2>
        <p className="text-center mb-5 text-muted">
          SmartStudyHub is a forward-thinking ed-tech startup dedicated to preparing students for successful careers by blending education with real-world experiences. Our platform connects learners with curated courses, live internships, and industry guidance.
        </p>
        <Row className="g-4">
          <Col md={4}>
            <Card className="text-center border-0 shadow-sm h-100">
              <Card.Body>
                <i className="bi bi-mortarboard fs-1 text-primary mb-3"></i>
                <Card.Title>Our Mission</Card.Title>
                <Card.Text>
                  To bridge the gap between academic learning and industry demands by offering practical training, mentorship, and career-oriented projects.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center border-0 shadow-sm h-100">
              <Card.Body>
                <i className="bi bi-lightbulb fs-1 text-warning mb-3"></i>
                <Card.Title>Our Vision</Card.Title>
                <Card.Text>
                  To become India’s most trusted student upskilling platform by enabling access to quality education, internships, and industry-aligned certifications.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center border-0 shadow-sm h-100">
              <Card.Body>
                <i className="bi bi-people fs-1 text-success mb-3"></i>
                <Card.Title>Why Choose Us?</Card.Title>
                <Card.Text>
                  SmartStudyHub combines expert-led learning, real project experience, and certification to boost employability. Our partnerships and hands-on programs set students apart in today’s competitive job market.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={12}>
            <p className="text-center text-muted fs-5 px-md-5">
              Founded by passionate educators and industry professionals, SmartStudyHub is built on the belief that every student deserves access to opportunities that shape their future. Whether you're looking to enhance your skills, explore career paths, or gain practical experience through internships — we’re here to guide your journey from learning to earning.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
