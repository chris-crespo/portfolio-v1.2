import { motion } from 'framer-motion'
import useCursorStore from 'stores/cursor';
import styled from 'styled-components'
import shallow from 'zustand/shallow';

type Props = {
  text: string;
  to: string;
}

const Wrapper = styled(motion.div)`

`

const Anchor = styled.a`
  font-family: 'Basis';
  mix-blend-mode: difference;
  filter: invert(1);
`

const Link: React.FC<Props> = ({ text, to }) => {
  const { hover, leave } = useCursorStore(
    ({ hover, leave }) => ({ hover, leave }),
    shallow
  )

  return (
    <Wrapper
      onMouseEnter={hover}
      onMouseLeave={leave}
    >
      <Anchor href={to} target="_blank">{text}</Anchor>
    </Wrapper>
  )
}

export default Link
