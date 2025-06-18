import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const Login = () => {
  return (
    <section className="py-5 bg-white">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="shadow-sm p-4 border-0">
              <h2 className="text-center fw-bold mb-4">Welcome Back</h2>
              <Form>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter your password" />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Login
                </Button>
              </Form>
              <p className="mt-3 text-center">
                Don’t have an account? <a href="/register">Register now</a>
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
