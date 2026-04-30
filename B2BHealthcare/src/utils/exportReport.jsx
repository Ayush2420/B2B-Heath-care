import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const exportJsonToPDF = (data, fileName = "report") => {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(16);
    doc.text("Analytics Report", 14, 15);

    let tableData = [];

    // Flatten JSON into key-value rows
    const flattenObject = (obj, parentKey = "") => {
        Object.entries(obj).forEach(([key, value]) => {
            const fullKey = parentKey ? `${parentKey}.${key}` : key;

            if (typeof value === "object" && value !== null) {
                flattenObject(value, fullKey);
            } else {
                tableData.push([fullKey, String(value)]);
            }
        });
    };

    flattenObject(data);

    autoTable(doc, {
        startY: 25,
        head: [["Field", "Value"]],
        body: tableData,
    });

    doc.save(`${fileName}.pdf`);
};