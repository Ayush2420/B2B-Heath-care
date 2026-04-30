import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button, Typography} from "@mui/material";

import PatientGrid from "./PatientGrid";
import PatientList from "./PatientList.jsx";
import {patientStyles} from "./patientStyles";
import {fetchPatients, setView} from "./patientsController";
import {Skeleton} from "@mui/material";
import Navbar from "../../components/Navbar.jsx";
import {logoutUser} from "../dasboard/dashboardController.jsx";
import {TextField} from "@mui/material";
import {setSearchEmail} from "./patientsController";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";


const PatientsPage = () => {
    const dispatch = useDispatch();

    const {patients, loading, view, searchEmail} = useSelector((state) => state.patientsController);

    useEffect(() => {
        dispatch(fetchPatients());
    }, [dispatch]);


    const renderSkeleton = () => {
        if (view === "grid") {
            return (
                <div style={patientStyles.gridContainer}>
                    {[...Array(6)].map((_, i) => (
                        <Skeleton
                            key={i}
                            variant="rounded"
                            height={180}
                            style={{borderRadius: "14px"}}
                        />
                    ))}
                </div>
            );
        }

        return (
            <>
                {[...Array(5)].map((_, i) => (
                    <Skeleton key={i} height={60} style={{marginBottom: "10px"}}/>
                ))}
            </>
        );
    };
    return (<>
            <Navbar onLogout={() => dispatch(logoutUser())}/>
            <div style={{paddingTop: "60px"}}>
                <div style={patientStyles.pageContainer}>
                    {/* Header */}
                    <div style={patientStyles.fixedHeader}>
                        <Typography variant="h4">Patients</Typography>
                        <div style={patientStyles.headerActions}>
                            <TextField
                                size="small"
                                placeholder="Search by email..."
                                value={searchEmail}
                                onChange={(e) => dispatch(setSearchEmail(e.target.value))}
                                sx={{width: "260px", background: "#fff", borderRadius: "8px"}}
                            />

                            <div style={patientStyles.iconToggleWrapper}>
                                {/* GRID ICON */}
                                <div
                                    onClick={() => dispatch(setView("grid"))}
                                    style={{
                                        ...patientStyles.iconBox,
                                        background: view === "grid" ? "#1976d2" : "#f5f5f5",
                                        color: view === "grid" ? "#fff" : "#333",
                                    }}
                                >
                                    <GridViewIcon />
                                </div>

                                {/* LIST ICON */}
                                <div
                                    onClick={() => dispatch(setView("list"))}
                                    style={{
                                        ...patientStyles.iconBox,
                                        background: view === "list" ? "#1976d2" : "#f5f5f5",
                                        color: view === "list" ? "#fff" : "#333",
                                    }}
                                >
                                    <ViewListIcon />
                                </div>

                            </div>
                        </div>
                    </div>

                    <div style={view === "grid"?patientStyles.scrollArea:{}}>
                    {loading ? (
                        renderSkeleton()
                    ) : view === "grid" ? (
                        <PatientGrid patients={patients}/>
                    ) : (
                        <PatientList patients={patients}/>
                    )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PatientsPage;