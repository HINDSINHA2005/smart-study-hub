import { Container, Carousel } from "react-bootstrap";

const testimonials = [
  {
    id: 1,
    name: "Anjali Mehra",
    title: "Project Manager",
    company: "TechNova Solutions",
    quote:
      "SmartSoftwareHub exceeded our expectations. They delivered our web portal ahead of schedule with excellent communication.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Karan Patel",
    title: "CTO",
    company: "FinGrow Pvt. Ltd.",
    quote:
      "Their automation tool saved us hours of manual work every week. Highly professional and efficient team!",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "Sarah Fernandes",
    title: "Marketing Head",
    company: "BrightMedia Inc.",
    quote:
      "From UI/UX to final deployment, everything was seamless. We love the mobile app they built for our campaign!",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-5 bg-white">
      <Container>
        <h2 className="text-center mb-5 fw-bold">What Our Clients Say</h2>

        <style>
          {`
            .custom-carousel .carousel-control-prev-icon,
            .custom-carousel .carousel-control-next-icon {
              background-color: #0d6efd;
              background-size: 100% 100%;
              padding: 10px;
              border-radius: 50%;
            }

            .custom-carousel .carousel-control-prev,
            .custom-carousel .carousel-control-next {
              width: 5%;
            }
          `}
        </style>

        <Carousel
          indicators={false}
          controls={true}
          interval={6000}
          className="custom-carousel"
        >
          {testimonials.map(({ id, name, title, company, quote, image }) => (
            <Carousel.Item key={id}>
              <div className="d-flex justify-content-center">
                <div
                  className="card shadow-sm p-4 border-0"
                  style={{ maxWidth: "800px" }}
                >
                  <div className="d-flex align-items-start">
                    <img
                      src={image}
                      alt={name}
                      className="rounded-circle me-3"
                      width="60"
                      height="60"
                    />
                    <div>
                      <blockquote className="blockquote mb-2">
                        <p className="mb-0">"{quote}"</p>
                      </blockquote>
                      <footer className="blockquote-footer mt-1">
                        <strong>{name}</strong>, {title} at{" "}
                        <cite title={company}>{company}</cite>
                      </footer>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
