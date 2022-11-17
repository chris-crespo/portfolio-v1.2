import create from "zustand";
import { always } from "ramda";

type HeightStore = {
  height: number;
  initHeight: (height: number) => void;
}

const useHeightStore = create<HeightStore>(set => ({
  height: 0,
  initHeight: height => set(always({ height }))
}))

export default useHeightStore
