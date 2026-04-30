import { Card, CardContent, Typography, Button } from "@mui/material";

const QuickActionCard = ({ title, description, buttonText, onClick }) => {
    return (
        <Card
            elevation={0}
            sx={{
                borderRadius: "14px",
                border: "1px solid #E0E0E0",
                height: "160px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <CardContent>
                <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
                    {title}
                </Typography>

                <Typography
                    sx={{ fontSize: "14px", color: "#6b7280", marginTop: "6px" }}
                >
                    {description}
                </Typography>

                <Button
                    variant="contained"
                    onClick={onClick}
                    sx={{
                        marginTop: "14px",
                        textTransform: "none",
                        borderRadius: "8px",
                    }}
                >
                    {buttonText}
                </Button>
            </CardContent>
        </Card>
    );
};

export default QuickActionCard;