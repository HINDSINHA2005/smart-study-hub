import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Form,
} from "react-bootstrap";


const internships = [
  {
    id: 1,
    skill: "Python Programming",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    type: "Remote • Unpaid",
    duration: "1 Month",
    certificate: "Certificate of Completion by SmartSoftwareHub",
    features: ["Project Work", "Mentor Support", "Flexible Timings"],
  },
  {
    id: 2,
    skill: "Frontend Development",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    type: "Remote • Unpaid",
    duration: "2 Months",
    certificate: "Certificate of Completion by SmartSoftwareHub",
    features: ["Live Projects", "Weekly Reviews", "Resume Boosting"],
  },
  {
    id: 3,
    skill: "C/C++ Development",
    logo: "https://cdn-icons-png.flaticon.com/512/919/919831.png",
    type: "Remote • Unpaid",
    duration: "3 Months",
    certificate: "Certificate of Completion by SmartSoftwareHub",
    features: ["Capstone Project", "Mentorship", "Job Recommendation"],
  },
];

const InternshipsSection = () => {
  const [show, setShow] = useState(false);
  const [selectedInternship, setSelectedInternship] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    internship: "",
    message: "",
  });

  const handleShow = (skill) => {
    setSelectedInternship(skill);
    setFormData({ ...formData, internship: skill });
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Form Data: ", formData);
    alert("Application submitted successfully!");
    setShow(false);
  };

  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4 fw-bold text-primary">
          Internship Programs by SmartStudyHub
        </h2>
        <p className="text-center text-muted mb-5">
          As part of our industry outreach, we offer training-based internships to help aspiring developers
          gain hands-on experience while contributing to real-world projects.
        </p>
        <Row>
          {internships.map((item) => (
            <Col md={4} className="mb-4" key={item.id}>
              <Card className="shadow-sm border-0 h-100">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={item.logo}
                      alt={item.skill}
                      width="50"
                      height="50"
                      className="me-3"
                    />
                    <div>
                      <Card.Title className="mb-1">{item.skill}</Card.Title>
                      <small className="text-muted">{item.type}</small>
                    </div>
                  </div>

                  <p className="mb-2">
                    <strong>Duration:</strong> {item.duration}
                  </p>
                  <p className="mb-2">
                    <strong>Certificate:</strong> {item.certificate}
                  </p>

                  <div className="mb-3">
                    <strong>Key Features:</strong>
                    <ul className="ps-3 mt-2">
                      {item.features.map((feature, index) => (
                        <li key={index} className="text-muted small">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="d-grid gap-2">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleShow(item.skill)}
                    >
                      Apply Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Certification Display */}
      <section className="py-5 bg-light text-center">
        <Container>
          <h2 className="fw-bold mb-4">Official Certification</h2>
          <p className="mb-5">
            All interns receive a verified certificate from SmartSoftwareHub recognizing their skills and contribution.
          </p>
          <img
            src="src/assets/certificate.png"
            alt="SmartSoftwareHub Certificate"
            className="img-fluid rounded shadow"
            style={{ maxWidth: "600px", width: "100%" }}
          />
        </Container>
      </section>
      

      {/* Modal Form */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Apply for {selectedInternship}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
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
              <Form.Label>WhatsApp Number</Form.Label>
              <Form.Control
                type="text"
                name="whatsapp"
                required
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="Enter WhatsApp number"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Internship</Form.Label>
              <Form.Select
                name="internship"
                value={formData.internship}
                onChange={handleChange}
              >
                {internships.map((item) => (
                  <option key={item.id} value={item.skill}>
                    {item.skill}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group>
              <Form.Label>Message / Query (Optional)</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Anything you'd like to share or ask?"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Submit Application
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </section>
    
    
  );
};

export default InternshipsSection;
