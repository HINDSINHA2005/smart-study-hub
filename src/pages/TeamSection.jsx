import { Container, Row, Col, Card } from "react-bootstrap";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Himanshu Sinha",
      role: "Founder & CEO",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
      bio: "Visionary leader with a passion for technology, innovation, and youth upskilling.",
    },
    {
      name: "Sneha Mehra",
      role: "Product Designer",
      image: "https://randomuser.me/api/portraits/women/15.jpg",
      bio: "Crafts seamless user experiences using modern UI/UX principles and Figma expertise.",
    },
    {
      name: "Rohit Verma",
      role: "Lead Developer",
      image: "https://randomuser.me/api/portraits/men/21.jpg",
      bio: "Full-stack engineer skilled in React, Node.js, and scalable web architecture.",
    },
    {
      name: "Aarav Gupta",
      role: "Marketing & Growth",
      image: "https://randomuser.me/api/portraits/men/35.jpg",
      bio: "Drives business growth through digital marketing, SEO, and performance strategies.",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center fw-bold mb-5">Meet Our Team</h2>
        <Row>
          {teamMembers.map((member, idx) => (
            <Col md={6} lg={3} className="mb-4" key={idx}>
              <Card className="border-0 shadow-sm text-center h-100">
                <Card.Img
                  variant="top"
                  src={member.image}
                  alt={member.name}
                  className="rounded-circle mx-auto mt-4"
                  style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title className="fw-semibold">{member.name}</Card.Title>
                  <Card.Subtitle className="text-muted small mb-2">{member.role}</Card.Subtitle>
                  <Card.Text className="text-muted small">{member.bio}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TeamSection;
