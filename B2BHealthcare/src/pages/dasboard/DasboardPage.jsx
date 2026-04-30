import { useDispatch, useSelector } from "react-redux";
import PageLayout from "../../components/PageLayout";
import StatCard from "../../components/StatCard";
import QuickActionCard from "../../components/QuickActionCard";
import { logoutUser } from "./dashboardController";
import {dashboardStyles} from "./dashboardStyle.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {requestNotificationPermission, showNotification} from "../../utils/notification.jsx";


const DashboardPage = () => {
    const dispatch = useDispatch();
    const stats = useSelector((state) => state.dashboardController.stats);
    const user = localStorage.getItem("user");
    const parsedUserData= JSON.parse(user);

    const navigate = useNavigate();
    const goToAnalytics = () => {
        navigate("/analytics");
    };

    const goToPatients = () => {
        navigate("/patients");
    };

    const handleManualNotification = () => {
        showNotification(
            "Healthcare Alert",
            "This is a test notification from Dashboard"
        );
    };

    useEffect(() => {
        requestNotificationPermission();
    }, []);

    return (
        <PageLayout onLogout={() => dispatch(logoutUser())}>

            <div style={dashboardStyles.welcomeBanner}>
                <h1 style={dashboardStyles.welcomeTitle}>

                    Welcome back, {parsedUserData?.email?.split('@')[0] || 'User'}
                </h1>
                <p style={dashboardStyles.welcomeText}>
                    Here is today’s overview
                </p>
            </div>

            {/* Stats Section */}
            <div style={dashboardStyles.grid}>
                <StatCard title="Total Patients" value={stats.totalPatients} />
                <StatCard title="Doctors" value={stats.doctors} />
                <StatCard title="Appointments Today" value={stats.appointmentsToday} />
                <StatCard title="Revenue" value={stats.revenue} />
            </div>

            {/* Quick Actions */}
            <div style={dashboardStyles.quickGrid}>
                <QuickActionCard
                    title="View Analytics"
                    description="Check system analytics and reports"
                    buttonText="Open Analytics"
                    onClick={goToAnalytics}
                />

                <QuickActionCard
                    title="Patient Records"
                    description="Manage patient information"
                    buttonText="Open Patients"
                    onClick={goToPatients}
                />

                <QuickActionCard
                    title="Notifications"
                    description="Check recent system alerts"
                    buttonText="View Alerts"
                    onClick={handleManualNotification}
                />
            </div>
        </PageLayout>
    );
};

export default DashboardPage;
