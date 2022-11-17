import { useRef } from "react"

const useThrottle = (fn: (...args: any) => void, delay: number) => {
  const lastExecute = useRef<number>(0)

  const throttledCallback = (...args: any) => {
    if (Date.now() - lastExecute.current > delay) {
      fn(...args)
      lastExecute.current = Date.now()
    }
  }

  return throttledCallback
}

export default useThrottle
