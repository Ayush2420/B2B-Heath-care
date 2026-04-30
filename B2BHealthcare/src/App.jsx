import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardPage from "./pages/dasboard/DasboardPage.jsx";
import AnalyticsPage from "./pages/analytics/AnalyticsPage.jsx";
import PatientsPage from "./pages/patient/PatientsPage.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/analytics" element={<AnalyticsPage />} />
                <Route path="/patients" element={<PatientsPage />} />
            </Routes>

            <ToastContainer  autoClose={3000} />
        </BrowserRouter>
    );
}

export default App;
