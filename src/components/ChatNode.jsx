import React from "react";

function ChatNode({ data }) {
  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        background: "#fff",
        minWidth: "150px",
        textAlign: "center",
      }}
    >
      <p>{data.label}</p> 
    </div>
  );
}

export default ChatNode;
