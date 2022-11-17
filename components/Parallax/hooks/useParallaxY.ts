import { useScroll, useSpring, useTransform } from "framer-motion"
import useHeightStore from "stores/height"

const useParallaxDistance = () => {
  const height = useHeightStore(store => store.height)
  const { innerHeight } = window
  const distance = -height + innerHeight

  return distance
}

const useParallaxY = () => {
  const { scrollYProgress } = useScroll()
  const distance = useParallaxDistance()

  const y = useTransform(scrollYProgress, [0, 1], [0, distance])
  return useSpring(y, {
    stiffness: 500,
    mass: 0.5,
    damping: 100,
  })
}

export default useParallaxY
