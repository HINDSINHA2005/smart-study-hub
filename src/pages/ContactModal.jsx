import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import ContactForm from './ContactForm'; // adjust the path as needed

const ContactModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Get in Touch</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ContactForm />
      </Modal.Body>
    </Modal>
  );
};

export default ContactModal;
