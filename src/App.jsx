import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Internships from "./pages/Internships";
import Courses from "./pages/Courses";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ScrollToTop from "./pages/ScrollToTop";
import ApplyForm from "./pages/ApplyForm";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";

// Placeholder pages
const DummyPage = ({ name }) => (
  <div className="text-center mt-5">
    <h2>{name} Page Coming Soon</h2>
  </div>
);

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      {/* Ensure content isn't hidden behind navbar */}
      <div
        style={{
          paddingTop: "70px",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navbar />

        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/courses" element={<Courses />} />
            
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

 <Route path="/admin-login" element={<AdminLogin />} />
<Route path="/admin" element={<AdminDashboard />} />


<Route path="/apply" element={<ApplyForm />} />

            <Route
              path="*"
              element={<DummyPage name="404 - Page Not Found" />}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
