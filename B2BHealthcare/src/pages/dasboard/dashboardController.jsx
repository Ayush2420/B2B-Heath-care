import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    stats: {
        totalPatients: 12450,
        doctors: 85,
        appointmentsToday: 56,
        revenue: "$12,450",
    },
};

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
        logoutUser: () => {
            localStorage.removeItem("user");
            window.location.href = "/";
        },
    },
});

export const { logoutUser } = dashboardSlice.actions;
export default dashboardSlice.reducer;
