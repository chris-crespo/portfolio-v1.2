import { motion } from "framer-motion";
import styled from "styled-components"

type Props = {
  text: string;
  show: boolean;
}

const Wrapper = styled.div`
  align-self: flex-end;
  flex-basis: 60%;

  display: flex;
  flex-direction: column;
  letter-spacing: 0.02em; 

  height: fit-content;
  overflow: hidden;
`

const Text = styled(motion.div)`
  display: inline-block;
  max-width: 90%;
`

const Description: React.FC<Props> = ({ text, show }) => (
  <Wrapper>
    <Text
      animate={{ y: show ? 0 : '100%' }}
      transition={{
        type: "tween",
        duration: 0.4,
        delay: 0.2
      }}
    >
      {text}
    </Text>
  </Wrapper>
)

export default Description
