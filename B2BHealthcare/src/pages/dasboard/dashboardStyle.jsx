export const dashboardStyles = {
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
        marginBottom: "30px",
    },
    quickGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
    },
    welcomeBanner: {
        opacity: 0.8,
        backgroundImage:
            "url('https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=2000&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "16px",
        padding: "40px",
        color: "black",
        marginBottom: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    welcomeTitle: {
        margin: 0,
        color: "black",
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "8px",
        width: "fit-content",
        opacity: 0.8,
    },
    welcomeText: {
        marginTop: "8px",
        fontSize: "16px",
    },
};