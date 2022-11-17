import { useEffect, useState } from "react"

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0})

  const updatePosition = (e: MouseEvent) => {
    const { clientX: x, clientY: y } = e
    setPosition({ x, y })
  }

  useEffect(() => {
    window.addEventListener('mousemove', updatePosition)
    return () => window.removeEventListener('mousemove', updatePosition)
  }, [])

  return position
}

export default useMousePosition
