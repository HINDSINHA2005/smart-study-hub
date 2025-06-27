import { useEffect, useState } from "react";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import {
  Container,
  Table,
  Card,
  Spinner,
  Badge,
  Button,
  Tabs,
  Tab,
} from "react-bootstrap";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AdminDashboard = () => {
  // internships
  const [applications, setApplications] = useState([]);
  const [programStats, setProgramStats] = useState([]);

  // contact queries
  const [queries, setQueries] = useState([]);

  // shared UI state
  const [authLoading, setAuthLoading] = useState(true);
  const [dataLoading, setDataLoading] = useState(true);

  const navigate = useNavigate();

  /* ─────────────────── AUTH GUARD ─────────────────── */
  useEffect(() => {
    const isAdmin = localStorage.getItem("admin-auth") === "true";
    if (!isAdmin) {
      navigate("/admin-login");
    } else {
      setAuthLoading(false);
    }
  }, [navigate]);

  /* ─────────────────── FETCH DATA ─────────────────── */
  useEffect(() => {
    if (!authLoading) {
      const fetchAll = async () => {
        // ▸ internship applications
        const appsSnap = await getDocs(
          query(collection(db, "applications"), orderBy("submittedAt", "desc"))
        );
        const apps = appsSnap.docs.map((d) => ({ id: d.id, ...d.data() }));
        setApplications(apps);

        // ▸ produce stats for chart
        const statsObj = {};
        apps.forEach((a) => {
          const key = a.program || "Unknown";
          statsObj[key] = (statsObj[key] || 0) + 1;
        });
        setProgramStats(
          Object.entries(statsObj).map(([program, count]) => ({ program, count }))
        );

        // ▸ contact-us queries
        const queriesSnap = await getDocs(
          query(collection(db, "consultantQueries"), orderBy("createdAt", "desc"))
        );
        setQueries(queriesSnap.docs.map((d) => ({ id: d.id, ...d.data() })));

        setDataLoading(false);
      };

      fetchAll().catch((e) => {
        console.error("Error loading dashboard data:", e);
        setDataLoading(false);
      });
    }
  }, [authLoading]);

  /* ─────────────────── RENDER ─────────────────── */
  if (authLoading || dataLoading) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" />
        <p className="mt-2">Loading dashboard…</p>
      </Container>
    );
  }

  return (
    <section className="py-5">
      <Container>
        <h2 className="fw-bold mb-4 text-center">Admin Dashboard</h2>

        {/* ---- Tabs: Applications / Contact Queries ---- */}
        <Tabs defaultActiveKey="applications" className="mb-4">
          {/* ─── Internship Applications TAB ─── */}
          <Tab eventKey="applications" title={`Internship Applications (${applications.length})`}>
            {/* ─ Chart ─ */}
            <Card className="mb-4 p-3 shadow-sm border-0">
              <h5 className="mb-3">Applications per Program</h5>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={programStats}>
                  <XAxis dataKey="program" />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Bar dataKey="count" fill="#0d6efd" />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            {/* ─ Table ─ */}
            <Card className="shadow-sm border-0">
              <Card.Body>
                <Table striped hover responsive>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Program</th>
                      <th>College</th>
                      <th>Resume</th>
                      <th>Applied At</th>
                    </tr>
                  </thead>
                  <tbody>
                    {applications.map((app) => (
                      <tr key={app.id}>
                        <td>{app.name}</td>
                        <td>{app.email}</td>
                        <td>{app.phone}</td>
                        <td>
                          <Badge bg="secondary">{app.program}</Badge>
                        </td>
                        <td>{app.college}</td>
                        <td>
                          <a href={app.resumeUrl} target="_blank" rel="noreferrer">
                            View
                          </a>
                        </td>
                        <td>{app.submittedAt?.toDate().toLocaleString() || "-"}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Tab>

          {/* ─── Contact Queries TAB ─── */}
          <Tab eventKey="queries" title={`Contact Queries (${queries.length})`}>
            <Card className="shadow-sm border-0">
              <Card.Body>
                <Table striped hover responsive>
                  <thead>
  <tr>
    <th>Full Name</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Company</th>
    <th>Designation</th>
    <th>Enquiry Types</th>
    <th>Selected Service</th>
    <th>Message</th>
    <th>Submitted At</th>
  </tr>
</thead>
<tbody>
  {queries.map((q) => (
    <tr key={q.id}>
      <td>{`${q.firstName || ""} ${q.lastName || ""}`}</td>
      <td>{q.email}</td>
      <td>{q.phone}</td>
      <td>{q.companyName}</td>
      <td>{q.designation}</td>
      <td>
        {Array.isArray(q.enquiryTypes)
          ? q.enquiryTypes.join(", ")
          : q.enquiryTypes || "-"}
      </td>
      <td>{q.productService || "-"}</td>
      <td style={{ maxWidth: 300 }}>{q.message}</td>
      <td>{q.createdAt?.toDate().toLocaleString() || "-"}</td>
    </tr>
  ))}
</tbody>

                </Table>
              </Card.Body>
            </Card>
          </Tab>
        </Tabs>

        {/* Logout */}
        <Button
          variant="outline-danger"
          size="sm"
          className="float-end mt-3"
          onClick={() => {
            localStorage.removeItem("admin-auth");
            navigate("/admin-login");
          }}
        >
          Logout
        </Button>
      </Container>
    </section>
  );
};

export default AdminDashboard;
