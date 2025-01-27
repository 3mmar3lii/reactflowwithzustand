import React from "react";

function Sidebar({ addNode }) {
  return (
    <div
      style={{
        width: "200px",
        background: "#f4f4f4",
        padding: "10px",
        borderRight: "1px solid #ccc",
      }}
    >
      <h3>Chat Flow</h3>
      <button
        onClick={addNode}
        style={{
          width: "100%",
          padding: "10px",
          background: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add Node
      </button>
    </div>
  );
}

export default Sidebar;
