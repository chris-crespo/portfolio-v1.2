import { useEffect } from "react"

const useMouseLeave = (cb: () => void) => {
  useEffect(() => {
    document.body.addEventListener('mouseleave', cb)
    return () => document.body.removeEventListener('mouseleave', cb)
  }, [])
}

export default useMouseLeave
