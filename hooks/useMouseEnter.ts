import { useEffect } from "react"

const useMouseEnter = (cb: () => void) => {
  useEffect(() => {
    document.body.addEventListener('mouseenter', cb)
    return () => document.body.removeEventListener('mouseenter', cb)
  }, [])
}

export default useMouseEnter
