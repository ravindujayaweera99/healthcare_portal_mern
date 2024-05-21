import "./App.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import AdminLogin from "./Components/Pages/Admin/AdminLogin/AdminLogin";
import PatientLogin from "./Components/Pages/Patient/PatientLogin/PatientLogin";
import PatientDashboard from "./Components/Pages/Patient/Dashboard/Dashboard";
import DoctorLogin from "./Components/Pages/Doctor/DoctorLogin/DoctorLogin";
import DoctorDashboard from "./Components/Pages/Doctor/Dashboard/Dashboard";
import AdminDashboard from "./Components/Pages/Admin/Dashboard/Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/patientlogin" element={<PatientLogin/>} />
          <Route path="/patientdashboard" element={<PatientDashboard/>}/>
          <Route path="/doctorlogin" element={<DoctorLogin/>} />
          <Route path="/doctordashboard" element={<DoctorDashboard/>} />
          <Route path="/adminDashboard" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
