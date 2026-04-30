import { combineReducers } from "@reduxjs/toolkit";
import loginController from "../pages/Login/loginController";
import dashboardController from "../pages/dasboard/dashboardController.jsx";
import analyticsController from "../pages/analytics/analyticsController.jsx";
import patientsController from "../pages/patient/patientsController.jsx";

const rootReducer = combineReducers({
    loginController,
    dashboardController,
    analyticsController,
    patientsController,
});

export default rootReducer;