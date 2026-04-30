import { Card, CardContent, Typography } from "@mui/material";

const StatCard = ({ title, value }) => {
    return (
        <Card
            elevation={0}
            sx={{
                borderRadius: "14px",
                padding: "10px",
                border: "1px solid #E0E0E0",
                height: "120px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <CardContent>
                <Typography
                    sx={{
                        fontSize: "14px",
                        color: "#6b7280",
                        fontWeight: 500,
                    }}
                >
                    {title}
                </Typography>

                <Typography
                    sx={{
                        fontSize: "28px",
                        fontWeight: 700,
                        marginTop: "6px",
                    }}
                >
                    {value}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default StatCard;