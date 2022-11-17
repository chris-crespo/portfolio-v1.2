'use client'

import { coverTransitionDuration } from "constants/cover"
import { motion } from "framer-motion"
import useCoverStore from "stores/cover"
import styled from "styled-components"

const Wrapper = styled(motion.div)`
  background-color: black;

  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`

const Cover: React.FC = () => {
  const covering = useCoverStore(state => state.covering)

  return (
    <Wrapper
      animate={{ y: covering ? 0 : ['0%', '-100%', '100%'] }}
      style={{ y: '0%' }}
      transition={{
        duration: coverTransitionDuration / 1000,
        type: "tween",
        times: [0, 1, 1]
      }}
    />
  )
}

export default Cover
