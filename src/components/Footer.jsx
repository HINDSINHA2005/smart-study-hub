import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-primary text-white mt-auto py-4 shadow-sm">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4 mb-3">
            <h5>SmartStudyHub</h5>
            <p style={{ fontSize: "0.9rem" }}>
              At SmartStudyHub, we offer end-to-end digital solutions — from code to creative. Whether you're a startup, business, or educational institution, our team is equipped to build powerful tools and engaging platforms tailored to your goals.
            </p>
          </div>

          {/* Quick Links */}
<div className="col-md-4 mb-3">
  <h6>Quick Links</h6>
  <ul className="list-unstyled">
    <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
    <li><Link to="/courses" className="text-white text-decoration-none">Courses</Link></li>
    <li><Link to="/internships" className="text-white text-decoration-none">Internships</Link></li>
    <li><Link to="/about" className="text-white text-decoration-none">About</Link></li>
    <li><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
  </ul>
</div>

          {/* Contact Info */}
          <div className="col-md-4 mb-3">
            <h6>Contact Us</h6>
            <p style={{ fontSize: "0.9rem" }}>
              Name:Rishabh Jain<br/>
              Designation:Operational Manager<br/>
              Email: info@smartstudyhub.co.in<br />
      
            </p>
            <h6>Address</h6>
            <p style={{ fontSize: "0.9rem" }}>
              Office Address: 21,B-block,NSP,delhi-110034<br />

              
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
