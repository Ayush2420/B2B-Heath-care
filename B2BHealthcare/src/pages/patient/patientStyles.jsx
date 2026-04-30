export const patientStyles = {
    pageContainer: {
        padding: "30px",
        background: "#f5f7fb",
        minHeight: "100vh"
    },

    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px",
    },

    toggleWrapper: {
        display: "flex",
        gap: "10px",

        "@media (max-width: 600px)": {
            width: "100%",
            justifyContent: "space-between",
        },
    },

    gridContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px",
    },

    patientCard: {
        borderRadius: "14px",
        boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
        transition: "0.3s",
        cursor: "pointer",
    },

    cardContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
    },

    cardFooter: {
        marginTop: "12px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
    },

    status: {
        background: "#E8F5E9",
        color: "#2E7D32",
        padding: "4px 10px",
        borderRadius: "20px",
        fontSize: "12px",
        fontWeight: "600",
    },

    date: {
        fontSize: "12px",
        color: "#777",
    },

    tableContainer: {
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
        overflow: "hidden",
        width: "100%",
    },

    actions: {
        display: "flex",
        gap: "16px",
        alignItems: "center",
    },

    fixedHeader: {
        position: "sticky",
        top: "64px",
        background: "#f5f7fb",
        zIndex: 100,
        padding: "15px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "12px",
    },

    headerActions: {
        display: "flex",
        gap: "15px",
        alignItems: "center",
        flexWrap: "wrap",
    },

    scrollArea: {
        height: "calc(100vh - 160px)",
        overflowY: "auto",
        padding: "20px",
    },
    iconToggleWrapper: {
        display: "flex",
        alignItems: "center",
        borderRadius: "10px",
        padding: "4px",
        background: "#eaeaea",
        gap: "6px",
        "@media (max-width: 600px)": {
            width: "100%",
            justifyContent: "space-between",
        },
    },

    iconBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "6px",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "0.2s",
    },
};