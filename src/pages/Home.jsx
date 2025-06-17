import { Container, Row, Col, Button, Card } from "react-bootstrap";
import TestimonialsSection from "../components/TestimonialSection";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-light text-dark py-5"
        style={{ minHeight: "552px" }}
      >
        <Container className="h-100">
          <div className="row align-items-center h-100">
            {/* Text Content */}
            <div className="col-md-6 mb-4 mb-md-0">
              <h1 className="display-4 fw-bold">Learn. Grow. Get Hired.</h1>
              <p className="lead">
                Explore top-rated courses and internship opportunities to
                kickstart your career.
              </p>

              {/* Highlight Features */}
              <ul className="list-unstyled mb-4">
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Industry-Relevant Courses & Internships
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Hands-on Project Experience
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Verified Certificates for Your Resume
                </li>
              </ul>

              <Button variant="primary" size="lg">
                Explore Courses
              </Button>
            </div>

            {/* Hero Image + Extra Info */}
            <div className="col-md-6 text-center">
              <img
                src="src/assets/hero.jpg"
                alt="Education Hero"
                className="img-fluid rounded shadow mb-4"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />

              {/* Badges or Logos */}
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <span className="badge bg-primary fs-6 px-3 py-2">
                  1000+ Students
                </span>
                <span className="badge bg-success fs-6 px-3 py-2">
                  Top Instructors
                </span>
                <span className="badge bg-warning text-dark fs-6 px-3 py-2">
                  Job-Oriented Training
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Us */}
      <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <Container>
          <h2 className="mb-5 text-center fw-bold display-6">
            Why Choose <span className="text-primary">SmartStudyHub</span>?
          </h2>
          <Row className="text-center">
            <Col md={4} className="mb-4">
              <div className="p-4 bg-white shadow-sm rounded h-100">
                <i className="bi bi-book fs-1 text-primary mb-3"></i>
                <h5 className="fw-semibold">Expert-Curated Courses</h5>
                <p className="text-muted">
                  Handpicked content by industry professionals to match the
                  latest market demands.
                </p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="p-4 bg-white shadow-sm rounded h-100">
                <i className="bi bi-laptop fs-1 text-success mb-3"></i>
                <h5 className="fw-semibold">Real-World Internships</h5>
                <p className="text-muted">
                  Work on live projects with real companies to gain hands-on
                  experience and build your portfolio.
                </p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="p-4 bg-white shadow-sm rounded h-100">
                <i className="bi bi-award fs-1 text-warning mb-3"></i>
                <h5 className="fw-semibold">Certifications & Support</h5>
                <p className="text-muted">
                  Earn recognized certificates and get personalized career
                  guidance to land your dream job.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

{/* Popular Courses */}
<section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
  <Container>
    <h2 className="text-center mb-5 fw-bold display-6">
      Explore Our <span className="text-primary">Popular Courses</span>
    </h2>
    <Row>
      {[1, 2, 3].map((id) => (
        <Col md={4} className="mb-4" key={id}>
          <Card className="shadow-sm h-100 border-0 rounded-4 overflow-hidden">
            <div style={{ overflow: "hidden" }}>
              <Card.Img
                variant="top"
                src="src\assets\ban.png"
                alt={`Course ${id}`}
                style={{
                  objectFit: "cover",
                  height: "220px",
                  transition: "transform 0.3s ease",
                }}
                className="w-100"
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </div>
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Title className="fw-semibold fs-5">
                  Full Stack Web Development
                </Card.Title>
                <Card.Text className="text-muted small mb-2">
                  Learn HTML, CSS, JavaScript, React, Node.js & MongoDB through real projects.
                </Card.Text>
                <p className="mb-2">
                  <i className="bi bi-clock text-primary me-1"></i>
                  8 Weeks &nbsp; | &nbsp;
                  <i className="bi bi-patch-check-fill text-success me-1"></i>
                  Certificate Included
                </p>
              </div>
              <Button variant="outline-primary" size="sm" className="mt-3 w-100">
                View Details
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
</section>

      <TestimonialsSection />
      {/* Call to Action */}
      <section className="py-5  text-center" style={{ backgroundColor: "#f0f4f8" }}>
        <Container>
          <h3>Ready to Start Learning?</h3>
          <p>Join SmartStudyHub and build your career today!</p>
          <Button variant="primary" size="lg" href="/register">
            Get Started
          </Button>
        </Container>
      </section>

      
{/* Certifications & Achievements */}
<section className="py-5 bg-light text-center">
  <Container>
    <h2 className="fw-bold mb-4">Certification By SmartStudyHub</h2>
    <p className="mb-5">Get certified by SmartStudyHub and boost your profile.</p>

    <img
      src="src\assets\certificate.png"
      alt="SmartStudyHub Certificate"
      className="img-fluid rounded shadow"
      style={{ maxWidth: "600px", width: "100%" }}
    />
  </Container>
</section>

{/* Newsletter */}
      <section className="py-5 bg-primary text-white text-center">
        <Container>
          <h2>Stay Updated!</h2>
          <p>
            Subscribe to our newsletter to receive updates on new courses and
            internships.
          </p>
          <div className="d-flex justify-content-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="form-control w-50 me-2"
            />
            <Button variant="light">Subscribe</Button>
          </div>
        </Container>
      </section>
      
      
      {/* Hiring Partners */}
<section className="py-5" style={{ backgroundColor: "#f0f4f8" }}>
  <Container>
    <h2 className="fw-bold mb-4 text-center">Our Hiring Partners</h2>
    <p className="text-center mb-5">
      Trusted by leading companies to provide skilled interns and job-ready professionals.
    </p>
    <Row className="justify-content-center">
      {[
        "images1.png",
        "images2.png",
        "images3.png",
        "images6.png",
        "images4.jpg",
      ].map((img, index) => (
        <Col key={index} xs={6} md={2} className="mb-4 d-flex justify-content-center align-items-center">
          <img
            src={`src/assets/${img}`}
            alt={`Partner ${index + 1}`}
            className="img-fluid partner-logo"
            style={{ height: "50px", objectFit: "contain" }}
          />
        </Col>
      ))}
    </Row>

    {/* Styling */}
    <style>{`
      .partner-logo {
        filter: grayscale(100%);
        opacity: 0.6;
        transition: all 0.3s ease;
      }
      .partner-logo:hover {
        filter: none;
        opacity: 1;
        transform: scale(1.05);
      }
    `}</style>
  </Container>
</section>

    </>
  );
};

export default Home;
