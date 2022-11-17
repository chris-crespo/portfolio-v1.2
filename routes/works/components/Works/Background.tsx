import { motion } from "framer-motion"
import styled from "styled-components"

type Props = {
  show: boolean;
}

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  background-color: black;
  filter: invert(1);
  mix-blend-mode: difference;
`

const Background: React.FC<Props> = ({ show }) => {
  return (
    <Wrapper
      animate={{ opacity: show ? 1 : 0 }}
      transition={{ type: "tween", duration: 0.2 }}
    />
  )
}

export default Background
