import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCaller } from "../../network/networkHelper";
import { toast } from "react-toastify";
import {ApiEndPoint} from "../../network/apiEndPoint.jsx";
import {showNotification} from "../../utils/notification.jsx";

const apiEndPoint = new ApiEndPoint();
export const fetchPatients = createAsyncThunk(
    "patients/fetchPatients",
    async (_) => {
        try {
            const data = await apiCaller(apiEndPoint.baseUrl+apiEndPoint.patientsPageUrl,{ apiType: "GET",});
            return data;
        } catch (error) {
            toast.error(error.message?? "Failed to load patients");
            return [];
        }
    }
);

const initialState = {
    patients: [],
    loading: false,
    error: null,
    view: "grid",
    searchEmail: "",
    allPatients: []
};

const patientSlice = createSlice({
    name: "patients",
    initialState,
    reducers: {
        setView: (state, action) => {
            state.view = action.payload;
        },
        setSearchEmail: (state, action) => {
            state.searchEmail = action.payload;

            if (!action.payload) {
                state.patients = state.allPatients;
                return;
            }

            const query = action.payload.toLowerCase();

            state.patients = state.allPatients.filter((p) =>
                p.email.toLowerCase().includes(query)
            );
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchPatients.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPatients.fulfilled, (state, action) => {
                state.loading = false;
                state.patients = action.payload;
                state.allPatients = action.payload;
                showNotification(
                    "Patients Loaded",
                    "Patient data fetched successfully"
                );
            })
            .addCase(fetchPatients.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { setView ,setSearchEmail} = patientSlice.actions;
export default patientSlice.reducer;