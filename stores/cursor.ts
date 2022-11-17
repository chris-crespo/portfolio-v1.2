import { always } from "ramda";
import create from "zustand";

type CursorStore = {
  hovering: boolean;
  hover: () => void;
  leave: () => void;
}

const useCursorStore = create<CursorStore>(set => ({
  hovering: false,
  hover: () => set(always({ hovering: true })),
  leave: () => set(always({ hovering: false }))
}))

export default useCursorStore
