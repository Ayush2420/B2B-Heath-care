import { Card } from "@mui/material";

const ChartCard = ({ title, children }) => {
    return (
        <Card
            elevation={0}
            sx={{
                borderRadius: "14px",
                border: "1px solid #e0e0e0",
                padding: "16px",
                height: "320px",
                backgroundColor: "#fff",
            }}
        >
            <div style={{ fontWeight: 600, marginBottom: "10px" }}>
                {title}
            </div>

            <div style={{ height: "260px" }}>
                {children}
            </div>
        </Card>
    );
};

export default ChartCard;