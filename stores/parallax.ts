import create from "zustand";

export type ParallaxStore = {
  scrollDistance: number;
  scroll: (d: number) => void;
}

const useParallaxStore = create<ParallaxStore>(set => ({
  scrollDistance: 0,
  scroll: (d: number) => set(state => ({
    scrollDistance: d
  }))
}))

export default useParallaxStore
