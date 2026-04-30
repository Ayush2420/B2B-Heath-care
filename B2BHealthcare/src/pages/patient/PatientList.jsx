import React from "react";
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Avatar,
    Paper,
} from "@mui/material";
import { patientStyles } from "./patientStyles";

const PatientList = ({ patients }) => {
    return (
        <Paper style={patientStyles.tableContainer}>
            <div style={{ maxHeight: "80vh", overflowY: "auto",overflowX: "auto"  }}>
            <Table>
                <TableHead>
                    <TableRow
                        sx={{
                            position: "sticky",
                            top: 0,
                            background: "#dcd9d9",
                            zIndex: 2,
                        }}
                    >
                        <TableCell>Patient</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Last Visit</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {patients?.map((patient) => (
                        <TableRow key={patient.id}>
                            <TableCell style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <Avatar src={patient.avatar} />
                                {patient.name}
                            </TableCell>
                            <TableCell>{patient.email}</TableCell>
                            <TableCell>{patient.phone}</TableCell>
                            <TableCell>{patient.status}</TableCell>
                            <TableCell>{patient.lastVisit}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            </div>
        </Paper>
    );
};

export default PatientList;