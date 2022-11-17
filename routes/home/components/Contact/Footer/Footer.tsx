import styled from "styled-components"
import Link from "./Link"

const Wrapper = styled.footer`
  width: 100%;
  padding: 2em 0;

  position: absolute;
  bottom: 0;
  right: 0;

  display: flex;
  justify-content: flex-end;
`

const Links = styled.div`
  
`

const Footer = () => (
  <Wrapper>
    <Links>
      <Link text="Github" to="https://github.com/krs98" />
    </Links>
  </Wrapper>
)

export default Footer
