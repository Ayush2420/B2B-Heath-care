import axios from "axios";
import {toast} from "react-toastify";

export const apiCaller = async (apiUrl, additionalInfo = {}) => {
    try {
        const {
            apiType = "GET",
            headers = { Accept: "application/json" },
            data = null,
            params = {},
        } = additionalInfo;

        const response = await axios({
            url: apiUrl,
            method: apiType,
            headers,
            data,
            params,
        });

        if (response && response.status >= 200 && response.status < 300) {
            return response.data;
        }

        // fallback errors
        if (response.status === 401 || response.status === 400) {
            toast.error("Unauthorized or Bad Request");
        }

        if (response.status === 404) {
            toast.error("Not Found");
            throw new Error("Not Found");
        }

        if (response.status === 500) {
            toast.error("Internal Server Error");
            throw new Error("Internal Server Error");
        }

        if (response.status === 408) {
            toast.error("Try after some time");
            throw new Error("Request Timeout");
        }

        return response.data;
    } catch (e) {
        const status = e?.response?.status;

        if (status === 409) {
            return e.response.data;
        }

        const message =
            e?.response?.data?.message ||
            e.message ||
            "Something went wrong";

        toast.error(message);
    }
};