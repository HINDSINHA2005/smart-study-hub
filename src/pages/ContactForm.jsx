import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const ContactForm = () => {
  return (
    <motion.section
      className="py-5 bg-light"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Container>
        <h2 className="text-center mb-4 fw-bold">Get in touch</h2>
        <Form>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Control placeholder="First Name*" required />
            </Col>
            <Col md={6}>
              <Form.Control placeholder="Last Name*" required />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Control type="email" placeholder="Company Email Address only*" required />
            </Col>
            <Col md={6}>
              <div className="d-flex">
                <span className="input-group-text bg-white border-end-0">+91</span>
                <Form.Control type="tel" placeholder="Mobile*" required className="border-start-0" />
              </div>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Control placeholder="Company Name*" required />
            </Col>
            <Col md={6}>
              <Form.Control placeholder="Designation" />
            </Col>
          </Row>

          <div className="mb-3">
            <Form.Label>Select type of enquiry:</Form.Label>
            <Row>
              {[
                'Product Demo',
                'Product Licensing',
                'Sales Enquiry',
                'Software Services',
                'Trainings',
                'Software Testing Services',
                'Zendesk Services',
                'AI Solutions',
                'DevOps Solutions',
              ].map((label, idx) => (
                <Col xs={6} md={4} key={idx}>
                  <Form.Check type="checkbox" label={label} />
                </Col>
              ))}
            </Row>
          </div>

          <Form.Select className="mb-3">
            <option>-- Choose Product/Services --</option>
            <option>Web Development</option>
            <option>Custom CRM</option>
            <option>ERP Solutions</option>
            {/* Add more options as needed */}
          </Form.Select>

          <Form.Control as="textarea" rows={4} placeholder="Is there anything you want to tell us about your request?" />

          <div className="text-center mt-4">
            <Button variant="primary" type="submit" className="px-5">
              Submit
            </Button>
          </div>
        </Form>
      </Container>
    </motion.section>
  );
};

export default ContactForm;
