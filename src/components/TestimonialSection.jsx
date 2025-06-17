import { Container, Carousel } from "react-bootstrap";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    dept: "CSE",
    quote: "SmartStudyHub gave me clarity and confidence. Their courses are industry-relevant.",
    image: "https://randomuser.me/api/portraits/women/31.jpg",
  },
  {
    id: 2,
    name: "Ravi Kumar",
    dept: "ECE",
    quote: "I landed an internship within a month! The platform is easy to use and well-organized.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Sneha Verma",
    dept: "IT",
    quote: "Highly recommend SmartStudyHub to every student who wants real-world exposure.",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-5 bg-white">
      <Container>
        <h2 className="text-center mb-5 fw-bold">What Students Say</h2>

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
          interval={5000}
          className="custom-carousel"
        >
          {testimonials.map(({ id, name, dept, quote, image }) => (
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
                      <footer className="blockquote-footer">
                        {name} from <cite>{dept}</cite>
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
