import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PageLayout from "../../components/PageLayout";
import StatCard from "../../components/StatCard";
import ChartCard from "../../components/ChartCard";
import FilterBar from "../../components/FilterBar";
import LineChartCard from "../../components/LineChartCard.jsx";

import {
    fetchAnalyticsData,
    setFilter,
} from "./analyticsController";
import PieChartCard from "../../components/PieChartCard.jsx";
import BarChartCard from "../../components/BarChartCard.jsx";
import AnalyticsTable from "./AnalyticsTable.jsx";
import {logoutUser} from "../dasboard/dashboardController.jsx";

const AnalyticsPage = () => {
    const dispatch = useDispatch();

    const { data, filter, loading } = useSelector(
        (state) => state.analyticsController
    );

    useEffect(() => {
        dispatch(fetchAnalyticsData(filter));
    }, [dispatch, filter]);

    const handleFilterChange = (value) => {
        dispatch(setFilter(value));
    };

    return (
        <PageLayout onLogout={() => dispatch(logoutUser())}>

            <FilterBar onFilterChange={handleFilterChange} />

            {loading && <p>Loading analytics...</p>}

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "20px",
                    marginBottom: "25px",
                }}
            >
                <StatCard
                    title="Total Patients"
                    value={data?.totalPatients || 0}
                />
                <StatCard
                    title="Active Users"
                    value={data?.activeUsers || 0}
                />
                <StatCard
                    title="Appointments"
                    value={data?.appointments || 0}
                />
                <StatCard
                    title="Revenue"
                    value={data?.revenue || 0}
                />
            </div>


            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "20px",
                }}
            >
                <ChartCard title="Patient Growth (Line Chart)">
                    <LineChartCard data={data?.charts?.patientGrowth} />
                </ChartCard>

                <ChartCard title="Status Breakdown (Pie Chart)">
                    <PieChartCard data={data?.charts?.patientGrowth}/>
                </ChartCard>
            </div>


            <div style={{ marginTop: "20px" }}>
                <ChartCard title="Appointments Trend (Bar Chart)">
                    <BarChartCard data={data?.charts?.appointmentTrend} />
                </ChartCard>
            </div>
            <div style={{ marginTop: "20px" }}>
                <ChartCard title="Recent Activity">
                    <AnalyticsTable data={data?.tableData} />
                </ChartCard>
            </div>
        </PageLayout>
    );
};

export default AnalyticsPage;