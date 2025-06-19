import { Container } from "react-bootstrap";
import TeamSection from "./TeamSection";

const TimelineSection = () => {
  const timeline = [
    {
      year: "2022",
      title: "SmartStudyHub Founded",
      description: "Started as an internship and training platform to upskill students in tech and design.",
    },
    {
      year: "2023",
      title: "Expanded into Software Services",
      description: "Launched our software development wing offering websites, apps, bots, and automation.",
    },
    {
      year: "2024",
      title: "50+ Clients & 1000+ Interns",
      description: "Worked with startups and SMEs while training students across India through live projects.",
    },
    {
      year: "2025",
      title: "SaaS Product Launch & Global Clients",
      description: "Started developing internal tools and scaled to serve clients internationally.",
    },
  ];

  return (
    <section className="py-5 bg-white">
      <Container>
        <h2 className="text-center fw-bold mb-5">Our Journey</h2>
        <div className="timeline px-md-5">
          {timeline.map((item, index) => (
            <div className="timeline-item mb-5" key={index}>
              <h5 className="fw-bold">{item.year} - {item.title}</h5>
              <p className="text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* Timeline styling */}
      <style>{`
        .timeline {
          position: relative;
          padding-left: 20px;
          border-left: 4px solid #0d6efd;
        }
        .timeline-item::before {
          content: '';
          position: absolute;
          left: -10px;
          top: 4px;
          width: 16px;
          height: 16px;
          background-color: #0d6efd;
          border-radius: 50%;
        }
      `}</style>
    </section>
    
  );
  
};

export default TimelineSection;
