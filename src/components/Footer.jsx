const Footer = () => {
  return (
    <footer className="bg-primary text-white mt-auto py-4 shadow-sm">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4 mb-3">
            <h5>SmartStudyHub</h5>
            <p style={{ fontSize: "0.9rem" }}>
              Empowering students with high-quality courses and internship opportunities to kickstart their careers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/courses" className="text-white text-decoration-none">Courses</a></li>
              <li><a href="/internships" className="text-white text-decoration-none">Internships</a></li>
              <li><a href="/about" className="text-white text-decoration-none">About</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-3">
            <h6>Contact Us</h6>
            <p style={{ fontSize: "0.9rem" }}>
              Email: support@smartstudyhub.com<br />
              Phone: +91 9876543210
            </p>
            <div>
              <a href="#" className="text-white me-2"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white me-2"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-white"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>

        <hr className="border-light" />
        <p className="text-center mb-0" style={{ fontSize: "0.85rem" }}>
          © {new Date().getFullYear()} SmartStudyHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
