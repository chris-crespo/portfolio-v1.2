import styled from "styled-components"
import Items from "./Items"
import Item from "./Item"

const Wrapper = styled.nav``

const Nav: React.FC = () => (
  <Wrapper>
    <Items>
      <Item to="/">Home</Item>
      <Item to="/works">Works</Item>
    </Items>
  </Wrapper>
)

export default Nav
