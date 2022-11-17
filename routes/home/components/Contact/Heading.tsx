import { motion } from "framer-motion"
import styled from "styled-components"

type Props = {
  show: boolean
}

const Wrapper = styled.div`
  overflow: hidden;

  mix-blend-mode: difference;
  filter: invert(1);
`

const Title = styled(motion.h3)`
  font-family: 'Basis';
  font-size: 3.5rem;
  margin-top: 4em;
`

const Heading: React.FC<Props> = ({ show }) => (
  <Wrapper>
    <Title
      animate={{ y: show ? 0 : '100%' }}
      transition={{
        type: "tween",
        duration: .5,
      }}
    >
      Wanna talk? Send me a message.
    </Title>
  </Wrapper>
)

export default Heading
