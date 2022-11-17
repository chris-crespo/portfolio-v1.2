import { useEffect } from "react"

const useMouseMove = (cb: (e: MouseEvent) => void) => {
  useEffect(() => {
    window.addEventListener('mousemove', cb)
    return () => window.removeEventListener('mousemove', cb)
  }, [])
}

export default useMouseMove
