import styled from "styled-components"
import Parallax from "./Parallax"

type Props = {
  children: React.ReactNode
}

const Wrapper = styled(Parallax.Item)`
  position: absolute;
  left: 5em;
  top: 50em;
`

const Text = styled.p`
  font-family: 'Sigurd';
  font-size: 1.5rem;
  font-style: italic;

  letter-spacing: 0.02em;
  line-height: 1.3;

  opacity: .15;
  rotate: -5deg;
`

const Quote: React.FC<Props> = ({ children }) => (
  <Wrapper modifier={-0.4}>
    <Text>{children}</Text>
  </Wrapper>
)

export default Quote
