import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";

const AdminLogin = () => {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const correctPin = "7890"; // 🔐 Change this PIN as needed

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (pin === correctPin) {
      localStorage.setItem("admin-auth", "true"); // Optional: Save session
      navigate("/admin");
    } else {
      setError("Incorrect PIN. Please try again.");
    }
  };

  return (
    <Container className="py-5 d-flex justify-content-center">
      <Card style={{ maxWidth: "400px", width: "100%" }} className="p-4 shadow-sm">
        <h4 className="text-center mb-3">Admin PIN Login</h4>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-4">
            <Form.Label>Enter Admin PIN</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter secure pin"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default AdminLogin;
