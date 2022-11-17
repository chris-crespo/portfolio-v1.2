import { useScroll, useSpring, useTransform } from "framer-motion"

const useBackgroundOpacity = (offsetTop: number) => {
  const { scrollY } = useScroll()
  const innerHeight = typeof window === 'undefined' ? 0 : window.innerHeight
  const opacity = useTransform(
    scrollY,
    [offsetTop - innerHeight * .2, offsetTop],
    [0, 1]
  )

  return useSpring(opacity, {
    stiffness: 500,
    damping: 100,
  })
}

export default useBackgroundOpacity
