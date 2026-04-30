import { Box, Button, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import {exportJsonToPDF} from "../utils/exportReport.jsx";

const FilterBar = ({ onFilterChange }) => {
    const [range, setRange] = useState("week");
    const analyticsData = useSelector(
        (state) => state.analyticsController?.data || {}
    );

    const handleExport = () => {
        if (!analyticsData || Object.keys(analyticsData).length === 0) {
            alert("No data available to export");
            return;
        }

        exportJsonToPDF(analyticsData, "analytics-report");
    };
    const handleChange = (value) => {
        setRange(value);
        onFilterChange && onFilterChange(value);
    };


    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
            }}
        >
            <Select
                size="small"
                value={range}
                onChange={(e) => handleChange(e.target.value)}
                sx={{ width: "150px" }}
            >
                <MenuItem value="today">Today</MenuItem>
                <MenuItem value="week">This Week</MenuItem>
                <MenuItem value="month">This Month</MenuItem>
            </Select>

            <Button variant="contained" sx={{ textTransform: "none" }}  onClick={handleExport}>
                Export
            </Button>
        </Box>
    );
};

export default FilterBar;