import { create } from "zustand";
import { persist } from "zustand/middleware";

const nodes = {
  id: "1",
  type: "chatNode",
  position: { x: 0, y: 0 },
  data: { label: "Start Chat" },
};
const useStore = create((set) => ({
  initialNodes: [nodes],
  initialEdges: [],
}));

export default useStore;
