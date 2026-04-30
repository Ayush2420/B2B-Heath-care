import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import {useNavigate} from "react-router-dom";

const Navbar = ({ onLogout }) => {
    const navigate = useNavigate();
    return (
        <AppBar
            position="fixed"
            elevation={1}
            sx={{
                background: "#1976d2",
                zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
        >
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

                <Typography variant="h6" sx={{ fontWeight: 600,cursor:'pointer' }} onClick={() => navigate("/dashboard")}>
                    Health Dashboard
                </Typography>

                <Button
                    variant="contained"
                    onClick={onLogout}
                    sx={{
                        background: "#fff",
                        color: "#1976d2",
                        fontWeight: 600,
                        textTransform: "none",
                        borderRadius: "8px",
                        "&:hover": {
                            background: "#f1f1f1",
                        },
                    }}
                >
                    Logout
                </Button>

            </Toolbar>
        </AppBar>
    );
};

export default Navbar;