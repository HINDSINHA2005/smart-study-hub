import { useState } from "react";
import { Container, Row, Col, Form, Button, Alert, Card } from "react-bootstrap";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    college: "",
    resumeUrl: "",
    reason: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.program ||
      !formData.college ||
      !formData.resumeUrl
    ) {
      setError("Please fill all required fields.");
      setSuccess("");
      return;
    }

    try {
      await addDoc(collection(db, "applications"), {
        ...formData,
        submittedAt: Timestamp.now(),
      });
      setSuccess("Application submitted successfully!");
      setError("");
      setFormData({
        name: "",
        email: "",
        phone: "",
        program: "",
        college: "",
        resumeUrl: "",
        reason: "",
      });
    } catch (err) {
      console.error(err);
      setError("Failed to submit application. Try again.");
      setSuccess("");
    }
  };

  return (
    <section className="py-5 bg-white">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="p-4 shadow-sm border-0">
              <h2 className="text-center fw-bold mb-4">Apply Now</h2>

              {success && <Alert variant="success">{success}</Alert>}
              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name *</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email Address *</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Phone Number *</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit phone number"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Program Applying For *</Form.Label>
                  <Form.Control
                    type="text"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    placeholder="Course or Internship name"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>College / Branch *</Form.Label>
                  <Form.Control
                    type="text"
                    name="college"
                    value={formData.college}
                    onChange={handleChange}
                    placeholder="e.g. ABES IT / CSE"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Google Drive Resume Link *</Form.Label>
                  <Form.Control
                    type="url"
                    name="resumeUrl"
                    value={formData.resumeUrl}
                    onChange={handleChange}
                    placeholder="https://drive.google.com/..."
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Why should we select you? (optional)</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    placeholder="Write briefly..."
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Submit Application
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ApplyForm;
