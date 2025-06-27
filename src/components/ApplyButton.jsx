import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ApplyButtons = () => {
  const navigate = useNavigate();

  return (
    <Container className="text-center my-5">
      <h3 className="mb-4">Quick Access</h3>
      <Button
        variant="primary"
        size="lg"
        className="me-3"
        onClick={() => navigate("/apply")}
      >
        Apply Now
      </Button>

      <Button
        variant="outline-dark"
        size="lg"
        onClick={() => navigate("/admin")}
      >
        Admin Login
      </Button>
    </Container>
  );
};

export default ApplyButtons;
