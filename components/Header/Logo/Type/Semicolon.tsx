import styled from "styled-components"

const Wrapper = styled.span`
  letter-spacing: 0.2em;
  padding-left: 6px;
`

const Semicolon: React.FC = () => <Wrapper>::</Wrapper>

export default Semicolon
