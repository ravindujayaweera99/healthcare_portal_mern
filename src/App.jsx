import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./Components/Pages/Admin/AdminLogin/AdminLogin";
import PatientLogin from "./Components/Pages/Patient/PatientLogin/PatientLogin";
import DoctorLogin from "./Components/Pages/Doctor/DoctorLogin/DoctorLogin";
import DoctorDashboard from "./Components/Pages/Doctor/Dashboard/Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/patientlogin" element={<PatientLogin/>} />
          <Route path="/doctorlogin" element={<DoctorLogin/>} />
          <Route path="/doctordashboard" element={<DoctorDashboard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
