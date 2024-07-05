import React from "react";

export default function InlineStyleButton({ status }) {

  let buttonStyle = {};
  switch (status) {
    case "Em produção":
      buttonStyle = {
        backgroundColor: "#004AA1",
        color: "white",
        padding: "6px 20px",
        borderRadius: "50px",
        border: "none",
        cursor: "default",
        width: "100%",
        fontWeight: "bold",
        fontSize: "14px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
      };
      break;
    case "Disponível":
      buttonStyle = {
        backgroundColor: "#028737",
        color: "white",
        padding: "6px 20px",
        borderRadius: "50px",
        border: "none",
        cursor: "default",
        width: "100%",
        fontWeight: "bold",
        fontSize: "14px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)", 
      };
      break;
    case "Em manutenção":
      buttonStyle = {
        backgroundColor: "#6F0007", 
        color: "white",
        padding: "6px 20px",
        borderRadius: "50px",
        border: "none",
        cursor: "default",
        width: "100%",
        fontWeight: "bold",
        fontSize: "14px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
      };
      break;
    default:
      buttonStyle = {
        backgroundColor: "#B868FF", 
        color: "white",
        padding: "6px 20px",
        borderRadius: "50px",
        border: "none",
        cursor: "default",
        width: "100%",
        fontWeight: "bold",
        fontSize: "14px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)", 
      };
  }

  return (
    <button style={buttonStyle}>
      {status}
    </button>
  );
}
