import { Container, Row, Col, Button, Card } from "react-bootstrap";
import TestimonialsSection from "../components/TestimonialSection";
import StatsCounter from "./StatsCounter";

const Home = () => {
  return (
    <>
      <section
        className="bg-light text-dark py-5"
        style={{ minHeight: "552px" }}
      >
        <Container className="h-100">
          <Row className="align-items-center h-100">
            {/* Text Content */}
            <Col md={6} className="mb-5 mb-md-0">
              <h1 className="display-4 fw-bold">
                Empowering Businesses with{" "}
                <span className="text-primary">Smart Software Solutions</span>
              </h1>
              <p className="lead text-muted mb-4">
                We build scalable, reliable, and customized software tailored to
                meet your business goals.
              </p>

              {/* Core Services */}
              <ul className="list-unstyled mb-4">
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Custom Web & Mobile App Development
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Cloud Integration & Automation
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Scalable Enterprise Solutions
                </li>
              </ul>

              <Button variant="primary" size="lg">
                Get a Free Consultation
              </Button>
            </Col>

            {/* Hero Image + Badges */}
            <Col md={6} className="text-center">
              <img
                src="src\assets\banner2.jpg"
                alt="Software Solutions"
                className="img-fluid rounded shadow mb-4"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />

              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <span className="badge bg-primary fs-6 px-3 py-2">
                  50+ Clients Served
                </span>
                <span className="badge bg-success fs-6 px-3 py-2">
                  Agile Development
                </span>
                <span className="badge bg-warning text-dark fs-6 px-3 py-2">
                  Trusted by Startups & Enterprises
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <Container>
          <h2 className="mb-5 text-center fw-bold display-6">
            Why Choose{" "}
            <span className="text-primary">SmartStudy Hub</span>?
          </h2>

          <div
            id="whyChooseCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {/* Slide 1 */}
              <div className="carousel-item active">
                <Row className="text-center">
                  <Col md={4}>
                    <div className="p-4 bg-white shadow-sm rounded h-100">
                      <i className="bi bi-code-slash fs-1 text-primary mb-3"></i>
                      <h5 className="fw-semibold">
                        Custom Software Development
                      </h5>
                      <p className="text-muted">
                        Scalable and secure software tailored to meet your
                        business goals.
                      </p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="p-4 bg-white shadow-sm rounded h-100">
                      <i className="bi bi-cloud-arrow-up fs-1 text-success mb-3"></i>
                      <h5 className="fw-semibold">Cloud Integration</h5>
                      <p className="text-muted">
                        Leverage the cloud for flexibility, speed, and cost
                        savings with our expert support.
                      </p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="p-4 bg-white shadow-sm rounded h-100">
                      <i className="bi bi-shield-lock fs-1 text-warning mb-3"></i>
                      <h5 className="fw-semibold">
                        Data Security & Compliance
                      </h5>
                      <p className="text-muted">
                        End-to-end protection and compliance for your apps and
                        user data.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>

              {/* Slide 2 */}
              <div className="carousel-item">
                <Row className="text-center">
                  <Col md={4}>
                    <div className="p-4 bg-white shadow-sm rounded h-100">
                      <i className="bi bi-bar-chart-line fs-1 text-primary mb-3"></i>
                      <h5 className="fw-semibold">Data Analytics & BI</h5>
                      <p className="text-muted">
                        Turn raw data into business insights using modern
                        analytics platforms.
                      </p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="p-4 bg-white shadow-sm rounded h-100">
                      <i className="bi bi-robot fs-1 text-success mb-3"></i>
                      <h5 className="fw-semibold">AI & Automation</h5>
                      <p className="text-muted">
                        Automate workflows and boost efficiency with intelligent
                        solutions.
                      </p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="p-4 bg-white shadow-sm rounded h-100">
                      <i className="bi bi-person-check fs-1 text-warning mb-3"></i>
                      <h5 className="fw-semibold">Dedicated Client Support</h5>
                      <p className="text-muted">
                        We're with you at every step — from ideation to
                        post-launch support.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              type="button"
              data-bs-target="#whyChooseCarousel"
              data-bs-slide="prev"
              className="carousel-control-prev"
              style={{
                backgroundColor: "#6f42c1",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                top: "50%",
                transform: "translateY(-50%)",
                opacity: "1",
              }}
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
                style={{
                  filter: "invert(1)",
                  width: "20px",
                  height: "20px",
                }}
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              type="button"
              data-bs-target="#whyChooseCarousel"
              data-bs-slide="next"
              className="carousel-control-next"
              style={{
                backgroundColor: "#6f42c1",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                top: "50%",
                transform: "translateY(-50%)",
                opacity: "1",
              }}
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
                style={{
                  filter: "invert(1)",
                  width: "20px",
                  height: "20px",
                }}
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </Container>
      </section>

     {/* Our Services */}
<section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
  <Container>
    <h2 className="text-center mb-5 fw-bold display-6">
      Our <span className="text-primary">Services</span>
    </h2>
    <Row>
      {[
        {
          title: "Website Development",
          desc: "Responsive and scalable websites built with modern tech like React, Next.js, and Bootstrap.",
          icon: "src/assets/web.jpg",
          duration: "Project-based",
          cert: "Custom Deliverables"
        },
        {
          title: "Python Applications",
          desc: "Automate tasks, build desktop tools, and craft efficient backend systems using Python.",
          icon: "src/assets/python.jpg",
          duration: "Use-case Specific",
          cert: "Deployment Ready"
        },
        {
          title: "UI/UX Design",
          desc: "Clean, user-centric designs with tools like Figma, Adobe XD, and modern UX practices.",
          icon: "src/assets/uiux.avif",
          duration: "Design Sprint",
          cert: "Prototyped & Delivered"
        },
        {
          title: "Video Editing",
          desc: "Professional editing for promo videos, reels, YouTube, and tutorials using Premiere Pro & DaVinci.",
          icon: "src/assets/video.jpg",
          duration: "Per Project",
          cert: "High-Quality Output"
        },
        {
          title: "Mobile App Development",
          desc: "Cross-platform mobile apps using Flutter or React Native with seamless UX.",
          icon: "src/assets/mobile.avif",
          duration: "4-8 Weeks",
          cert: "App Store Ready"
        },
        {
          title: "Automation & Bots",
          desc: "Boost productivity with task automation bots, scrapers, and workflow tools.",
          icon: "src/assets/bots.jpg",
          duration: "Fast Delivery",
          cert: "Source Code Included"
        },
      ].map((service, idx) => (
        <Col md={4} className="mb-4" key={idx}>
          <Card className="shadow-sm h-100 border-0 rounded-4 overflow-hidden">
            <div style={{ overflow: "hidden" }}>
              <Card.Img
                variant="top"
                src={service.icon}
                alt={service.title}
                style={{
                  objectFit: "cover",
                  height: "220px",
                  transition: "transform 0.3s ease"
                }}
                className="w-100"
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </div>
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Title className="fw-semibold fs-5">
                  {service.title}
                </Card.Title>
                <Card.Text className="text-muted small mb-2">
                  {service.desc}
                </Card.Text>
                <p className="mb-2">
                  <i className="bi bi-clock text-primary me-1"></i>
                  {service.duration}
                  &nbsp; | &nbsp;
                  <i className="bi bi-patch-check-fill text-success me-1"></i>
                  {service.cert}
                </p>
              </div>
              <Button
                variant="outline-primary"
                size="sm"
                className="mt-3 w-100"
              >
                View Details
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
</section>
<StatsCounter/>

      <TestimonialsSection />
      
      
{/* Call to Action for Businesses */}
<section
  className="py-5 text-center"
  style={{ backgroundColor: "#f0f4f8" }}
>
  <Container>
    <h3 className="fw-bold mb-3">Ready to Transform Your Business?</h3>
    <p className="mb-4">
      Let <strong>SmartSoftware Solutions</strong> help you innovate with
      custom development, automation, and design services.
    </p>
    <Button variant="primary" size="lg" href="/contact">
      Get a Free Consultation
    </Button>
  </Container>
</section>

{/* Newsletter & Partner Logos */}
<section className="py-5 bg-primary text-white text-center">
  <Container>
    <h2 className="fw-bold">Stay Ahead with Innovation</h2>
    <p className="mb-4">
      Subscribe for insights, tech updates, and exclusive service offers.
    </p>
    <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
      <input
        type="email"
        placeholder="Enter your business email"
        className="form-control w-50 me-2"
        style={{ maxWidth: "400px" }}
      />
      <Button variant="light">Subscribe</Button>
    </div>

    {/* Trusted by Logos */}
    <p className="mt-5 mb-3 fw-semibold">Trusted by teams at:</p>
    <div className="d-flex justify-content-center flex-wrap gap-4">
      <img
        src="src\assets\images6.png"
        alt="Freelancer"
        style={{ height: "40px" }}
      />
      <img
        src="src\assets\cap4.jpg"
        alt="Kaizen"
        style={{ height: "40px" }}
      />
      <img
        src="src\assets\cap3.jpg"
        alt="Stark Solution"
        style={{ height: "40px" }}
      />
      <img
        src="src\assets\cap2.webp"
        alt="Random"
        style={{ height: "40px" }}
      />
    </div>
  </Container>
</section>

      
      {/* Our Clients Carousel - Tighter, Colorful, Dense */}
<section className="py-5" style={{ backgroundColor: "#f0f4f8" }}>
  <Container>
    <h2 className="fw-bold mb-4 text-center">Our Clients</h2>
    <p className="text-center mb-5">
      Trusted by startups, SMEs, and enterprise businesses for delivering high-quality software solutions.
    </p>

    <div id="clientsCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <Row className="justify-content-center align-items-center gx-2">
            {[
              "images1.png",
              "cap3.jpg",
              "cap1.jpg",
              "cap4.jpg",
              
              
            ].map((img, index) => (
              <Col key={index} xs={4} sm={3} md={2} className="mb-3 d-flex justify-content-center">
                <img
                  src={`src/assets/${img}`}
                  alt={`Client ${index + 1}`}
                  className="img-fluid"
                  style={{ height: "100px", objectFit: "contain" }}
                />
              </Col>
            ))}
          </Row>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <Row className="justify-content-center align-items-center gx-2">
            {[
              "images1.png",
              "images2.png",
              "cap2.webp",
              "images6.png",

              
            ].map((img, index) => (
              <Col key={index} xs={4} sm={3} md={2} className="mb-3 d-flex justify-content-center">
                <img
                  src={`src/assets/${img}`}
                  alt={`Client ${index + 9}`}
                  className="img-fluid"
                  style={{ height: "100px", objectFit: "contain" }}
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#clientsCarousel"
        data-bs-slide="prev"
        style={{
          backgroundColor: "#6f42c1",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          top: "50%",
          transform: "translateY(-50%)",
          opacity: "1"
        }}
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
          style={{ filter: "invert(1)" }}
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#clientsCarousel"
        data-bs-slide="next"
        style={{
          backgroundColor: "#6f42c1",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          top: "50%",
          transform: "translateY(-50%)",
          opacity: "1"
        }}
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
          style={{ filter: "invert(1)" }}
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </Container>
</section>

    </>
  );
};

export default Home;
