import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";

const AnalyticsTable = ({ data = [] }) => {
    return (
        <TableContainer
            component={Paper}
            sx={{
                borderRadius: "14px",
                border: "1px solid #e0e0e0",
                boxShadow: "none",
            }}
        >
            <Table>
                <TableHead>
                    <TableRow sx={{ backgroundColor: "#f5f7fb" }}>
                        <TableCell><b>Date</b></TableCell>
                        <TableCell><b>Patient</b></TableCell>
                        <TableCell><b>Status</b></TableCell>
                        <TableCell><b>Doctor</b></TableCell>
                        <TableCell><b>Amount</b></TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {data?.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.patient}</TableCell>
                            <TableCell>{row.status}</TableCell>
                            <TableCell>{row.doctor}</TableCell>
                            <TableCell>{row.amount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default AnalyticsTable;