import { useEffect } from "react"

const useScroll = (cb: (e: WheelEvent) => void) => {
  useEffect(() => {
    window.addEventListener('wheel', cb)
    return () => window.removeEventListener('wheel', cb)
  }, [])
}

export default useScroll
