import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./Components/Pages/Admin/AdminLogin/AdminLogin";
import PatientLogin from "./Components/Pages/Patient/PatientLogin/PatientLogin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/patientLogin" element={<PatientLogin/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
