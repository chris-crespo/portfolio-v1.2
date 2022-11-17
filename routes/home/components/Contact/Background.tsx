import { motion } from "framer-motion"
import styled from "styled-components"

type Props = {
  children: React.ReactNode;
}

const Wrapper = styled(motion.div)`
  background-color: #e2e2e2;
  width: 100%;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;

  pointer-events: none;
`

const Dark = styled(motion.div)`
  background-color: black;
  width: 100%;
  height: 100%;

  mix-blend-mode: difference;
  filter: invert(1);
`

const Background: React.FC<any> = ({ children, ...props }) => (
  <Wrapper {...props}>
    <Dark />
  </Wrapper>
)

export default Background
