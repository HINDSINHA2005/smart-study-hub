import { Container, Row, Col, Card } from "react-bootstrap";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    label: "Clients Served",
    end: 250,
    icon: "bi-people",
    color: "primary",
  },
  {
    label: "Projects Delivered",
    end: 500,
    icon: "bi-code-slash",
    color: "success",
  },
  {
    label: "Team Members",
    end: 10,
    icon: "bi-person-workspace",
    color: "warning",
  },
  {
    label: "Years of Experience",
    end: 3,
    icon: "bi-calendar-check",
    color: "info",
  },
];

const StatsCounter = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3, // Start animation when 30% visible
  });

  return (
    <section className="py-5 bg-light" ref={ref}>
      <Container>
        <h2 className="text-center mb-5 fw-bold">Our Impact</h2>
        <Row className="text-center">
          {stats.map((stat, idx) => (
            <Col md={3} sm={6} xs={12} className="mb-4" key={idx}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Body>
                  <i
                    className={`bi ${stat.icon} fs-1 text-${stat.color} mb-3`}
                  ></i>
                  <h3 className="fw-bold">
                    {inView ? (
                      <CountUp end={stat.end} duration={2} />
                    ) : (
                      0
                    )}
                    +
                  </h3>
                  <p className="text-muted">{stat.label}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StatsCounter;
