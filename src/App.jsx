import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./Components/Pages/Admin/AdminLogin/AdminLogin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/adminlogin" element={<AdminLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
