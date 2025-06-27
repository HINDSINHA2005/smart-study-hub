import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Alert,
} from "react-bootstrap";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const GetInTouchForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    designation: "",
    enquiryTypes: [],
    productService: "",
    message: "",
  });

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const enquiryOptions = [
    "Product Demo",
    "Product Licensing",
    "Sales Enquiry",
    "Software Services",
    "Trainings",
    "Software Testing Services",
    "Zendesk Services",
    "AI Solutions",
    "DevOps Solutions",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const updatedTypes = checked
        ? [...prev.enquiryTypes, value]
        : prev.enquiryTypes.filter((type) => type !== value);
      return { ...prev, enquiryTypes: updatedTypes };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");
    setLoading(true);

    try {
      await addDoc(collection(db, "consultantQueries"), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      setSuccessMsg("Thank you! We’ll get back to you shortly.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        companyName: "",
        designation: "",
        enquiryTypes: [],
        productService: "",
        message: "",
      });
    } catch (err) {
      console.error("Submission error:", err);
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col md={10}>
            <Card className="shadow border-0 p-4">
              <h3 className="text-center fw-bold mb-4">Get in touch</h3>

              {successMsg && <Alert variant="success">{successMsg}</Alert>}
              {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>First Name *</Form.Label>
                      <Form.Control
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Last Name *</Form.Label>
                      <Form.Control
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Company Email *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone *</Form.Label>
                      <div className="d-flex">
                        <span className="input-group-text bg-white border">+91</span>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Company Name *</Form.Label>
                      <Form.Control
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Designation</Form.Label>
                      <Form.Control
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Select type of enquiry:</Form.Label>
                  <Row>
                    {enquiryOptions.map((option, index) => (
                      <Col xs={6} md={4} key={index}>
                        <Form.Check
                          type="checkbox"
                          label={option}
                          value={option}
                          checked={formData.enquiryTypes.includes(option)}
                          onChange={handleCheckboxChange}
                        />
                      </Col>
                    ))}
                  </Row>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Choose Product/Service</Form.Label>
                  <Form.Select
                    name="productService"
                    value={formData.productService}
                    onChange={handleChange}
                  >
                    <option value="">-- Choose Product/Services --</option>
                    <option>Web Development</option>
                    <option>App Development</option>
                    <option>Training</option>
                    <option>DevOps</option>
                    <option>Software Testing</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Additional Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Is there anything you want to tell us about your request?"
                  />
                </Form.Group>

                <div className="text-end">
                  <Button type="submit" variant="primary" disabled={loading}>
                    {loading ? "Submitting..." : "Submit"}
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GetInTouchForm;
