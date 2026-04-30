import { Box } from "@mui/material";
import Navbar from "./Navbar";

const PageLayout = ({ children, onLogout }) => {
    return (
        <Box sx={{ background: "#f5f7fb", minHeight: "100vh" }}>

            <Navbar onLogout={onLogout} />

            <Box
                sx={{
                    paddingTop: "64px", // navbar height compensation
                }}
            >
                <Box
                    sx={{
                        padding: "24px",
                        maxWidth: "1400px",
                        margin: "0 auto",
                    }}
                >
                    {children}
                </Box>
            </Box>

        </Box>
    );
};

export default PageLayout;