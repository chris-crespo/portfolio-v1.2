import { motion } from "framer-motion";
import styled from "styled-components"

type Props = {
  text: string;
  show: boolean;
}

const Wrapper = styled.div`
  width: 40%; 
  height: fit-content;
  overflow: hidden;
`

const Text = styled(motion.span)`
  display: inline-block;
`

const Label: React.FC<Props> = ({ text, show }) => (
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

export default Label
