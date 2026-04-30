import React from "react";
import { Card, CardContent, Typography, Avatar } from "@mui/material";
import {patientStyles} from "./patientStyles.jsx";

const PatientGrid = ({ patients }) => {
    return (
        <div style={patientStyles.gridContainer}>
            {patients.map((patient) => (
                <Card key={patient.id} style={patientStyles.patientCard}>
                    <CardContent style={patientStyles.cardContent}>
                        <Avatar
                            src={patient.avatar}
                            alt={patient.name}
                            sx={{ width: 60, height: 60, marginBottom: "10px" }}
                        />

                        <Typography variant="h6">{patient.name}</Typography>
                        <Typography color="textSecondary">{patient.email}</Typography>
                        <Typography color="textSecondary">{patient.phone}</Typography>

                        <div style={patientStyles.cardFooter}>
                            <Typography style={patientStyles.status}>
                                {patient.status}
                            </Typography>
                            <Typography style={patientStyles.date}>
                                {patient.lastVisit}
                            </Typography>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default PatientGrid;