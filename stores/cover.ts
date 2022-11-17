import { coverTransitionDuration } from "constants/cover";
import { always } from "ramda";
import create from "zustand";

type CoverStore = {
  covering: boolean;
  cover: () => Promise<void>;
  uncover: () => void;
}

const useCoverStore = create<CoverStore>(set => ({
  covering: false,
  cover: () => new Promise(res => {
    set(always({ covering: true }))
    setTimeout(res, coverTransitionDuration)
  }),
  uncover: () => new Promise(res => {
    set(always({ covering: false }))
    setTimeout(res, coverTransitionDuration)
  })
}))

export default useCoverStore
