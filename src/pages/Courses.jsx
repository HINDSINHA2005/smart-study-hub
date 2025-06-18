import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    description: "Master HTML, CSS, JavaScript, React & Bootstrap in this full-stack course.",
    duration: "3 Months",
    certificate: "Yes",
  },
  {
    id: 2,
    title: "Python for Beginners",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    description: "Learn Python from scratch and build automation & data analysis projects.",
    duration: "1.5 Months",
    certificate: "Yes",
  },
  {
    id: 3,
    title: "Data Structures & Algorithms",
    image: "https://cdn-icons-png.flaticon.com/512/2721/2721295.png",
    description: "Crack coding interviews with DSA in C++/Java, explained clearly.",
    duration: "2 Months",
    certificate: "Yes",
  },
];

const CoursesSection = () => {
  return (
    <section className="py-5 bg-white">
      <Container>
        <h2 className="text-center mb-4 fw-bold">Popular Courses</h2>
        <Row>
          {courses.map((course) => (
            <Col md={4} className="mb-4" key={course.id}>
              <Card className="shadow-sm border-0 h-100">
                <Card.Img
                  variant="top"
                  src={course.image}
                  style={{ height: "180px", objectFit: "contain", padding: "1rem" }}
                />
                <Card.Body>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text>{course.description}</Card.Text>
                  <p className="mb-1"><strong>Duration:</strong> {course.duration}</p>
                  <p><strong>Certificate:</strong> {course.certificate}</p>
                  <Button as={Link} to={`/courses/${course.id}`} variant="outline-primary" size="sm">
  View Details
</Button>
                  
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CoursesSection;
