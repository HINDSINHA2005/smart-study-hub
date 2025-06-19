import { useState } from "react";
import { Container, Row, Col, Card, Button, Modal, Form } from "react-bootstrap";
import StatsCounter from "./StatsCounter";
import python from "../assets/python.jpg"
import uiux from '../assets/uiux.avif'
import web from '../assets/web.jpg'
import bots from '../assets/bots.jpg'
import video from '../assets/video.jpg'
import mobile from '../assets/mobile.avif'
import digital from '../assets/digital.jpg'
import ecom from '../assets/ecom.jpg'

const services = [
  {
    title: "Website Development",
    desc: "Responsive and scalable websites built with modern technologies like React, Next.js, and Bootstrap.",
    icon: web,
    duration: "Project-based",
    cert: "Custom Deliverables",
  },
  {
    title: "Python Applications",
    desc: "Automation tools, backend systems, and desktop software built with robust Python stacks.",
    icon: python,
    duration: "Use-case Specific",
    cert: "Deployment Ready",
  },
  {
    title: "UI/UX Design",
    desc: "Clean, user-centric designs built with Figma, Adobe XD, and best UI/UX practices.",
    icon: uiux,
    duration: "Design Sprint",
    cert: "Prototyped & Delivered",
  },
  {
    title: "Video Editing",
    desc: "Polished video editing for YouTube, Reels, branding & tutorials using Premiere Pro and DaVinci Resolve.",
    icon: video,
    duration: "Per Project",
    cert: "High-Quality Output",
  },
  {
    title: "Mobile App Development",
    desc: "Flutter & React Native apps for Android and iOS with high-performance and modern UI.",
    icon: mobile,
    duration: "4-8 Weeks",
    cert: "App Store Ready",
  },
  {
    title: "Automation & Bots",
    desc: "Increase productivity with bots, data scrapers, task automation, and custom workflow tools.",
    icon: bots,
    duration: "Fast Delivery",
    cert: "Source Code Included",
  },
  {
    title: "E-Commerce Solutions",
    desc: "Full-featured online stores using Shopify, WooCommerce, or custom React-based systems.",
    icon: ecom,
    duration: "2–6 Weeks",
    cert: "Payment Gateway Integrated",
  },
  {
    title: "Digital Branding",
    desc: "Logos, social media kits, brand identity & campaigns that create strong digital presence.",
    icon: digital,
    duration: "1–2 Weeks",
    cert: "All Design Files Delivered",
  },
];

const CoursesSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleShow = (serviceName) => {
    setSelectedService(serviceName);
    setFormData({ ...formData, service: serviceName });
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inquiry Submitted:", formData);
    alert("Your inquiry has been submitted!");
    handleClose();
  };

  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <Container>
        <h2 className="text-center mb-3 fw-bold display-6">
          Our <span className="text-primary">Services</span>
        </h2>
        <p className="text-center text-muted mb-5 mx-auto" style={{ maxWidth: "720px" }}>
          At <strong>SmartStudyHub</strong>, we offer end-to-end digital solutions — from code to creative. Whether you're a startup, business, or educational institution, our team is equipped to build powerful tools and engaging platforms tailored to your goals.
        </p>

        <Row>
          {services.map((service, idx) => (
            <Col md={6} lg={4} className="mb-4" key={idx}>
              <Card className="shadow-sm h-100 border-0 rounded-4 overflow-hidden">
                <div style={{ overflow: "hidden" }}>
                  <Card.Img
                    variant="top"
                    src={service.icon}
                    alt={service.title}
                    style={{
                      objectFit: "cover",
                      height: "220px",
                      transition: "transform 0.3s ease",
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
                    onClick={() => handleShow(service.title)}
                  >
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
<StatsCounter/>
      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Inquire About: {selectedService}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Service</Form.Label>
              <Form.Control
                type="text"
                name="service"
                value={formData.service}
                readOnly
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us what you need or ask a question..."
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Submit Inquiry
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </section>
  );
};

export default CoursesSection;
