import React, { useCallback} from "react";
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  Controls,
  useNodesState,
  useEdgesState,
  MiniMap,
  addEdge,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import Sidebar from "./Sidebar";
import ChatNode from "./ChatNode";
import useStore from "../Store";
import { shallow } from "zustand/shallow";

const nodeTypes = {
  chatNode: ChatNode,
};



export default function ChatFlow() {
  const { initialNodes, initialEdges } = useStore((state) => state, shallow);
  
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  // Function to handle connections between nodes
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const addNode = () => {
    const newNode = {
      id: String(nodes.length + 1),
      position: { x: Math.random() * 500, y: Math.random() * 500 },
      data: { label: `Node ${nodes.length + 1}` },
    };
    setNodes([...nodes, newNode]); 
  };
  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex" }}>
      <Sidebar addNode={addNode} />
      <div style={{ flex: 1 }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
        >
          <Background variant={BackgroundVariant.Dots} color="#ccc" />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
    </div>
  );
}
