import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCaller } from "../../network/networkHelper";
import {ApiEndPoint} from "../../network/apiEndPoint.jsx";

const apiEndPoint = new ApiEndPoint();
export const fetchAnalyticsData = createAsyncThunk(
    "analytics/fetchAnalyticsData",
    async (filter = "week") => {
        const response = await apiCaller(apiEndPoint.baseUrl+apiEndPoint.analyticsPageUrl, {
            apiType: "GET",
            params: { range: filter },
        });

        return response;
    }
);

const analyticsSlice = createSlice({
    name: "analytics",
    initialState: {
        data: null,
        loading: false,
        error: null,
        filter: "week",
    },
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAnalyticsData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAnalyticsData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchAnalyticsData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { setFilter } = analyticsSlice.actions;
export default analyticsSlice.reducer;