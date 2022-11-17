'use client'

import { scrollDuration, scrollEase } from "constants/parallax"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { forwardRef } from "react"

type Props = {
  modifier?: number,
  className?: string,
  children: React.ReactNode
}

const Item: React.FC<Props> = forwardRef<HTMLDivElement, Props>(
  ({ modifier = .1, className, children }, ref) => {
    const { scrollYProgress } = useScroll()
    const y = useTransform(scrollYProgress, [0, 1], [0, 1000])
    const transformY = useSpring(y, {
      stiffness: 500,
      damping: 100,
    })

    return (
      <motion.div
        className={className}
        style={{ y: transformY }}
        transition={{
          duration: scrollDuration,
          ease: scrollEase
        }}
        ref={ref}
      >{children}</motion.div>
    )
  }
)

export default Item
