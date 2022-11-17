import { motion } from "framer-motion"
import styled from "styled-components"

type Props = {
  show: boolean;
}

const Line = styled(motion.div)`
  background-color: black;
  height: 2px;

  mix-blend-mode: difference;
  filter: invert(1);

  transform-origin: 0;
`

const Underline: React.FC<Props> = ({ show }) => (
  <Line
    animate={{ scaleX: show ? 1 : 0 }}
    transition={{
      type: "tween",
      duration: 0.4
    }}
  />
)

export default Underline
