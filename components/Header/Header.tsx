'use client'

import styled from "styled-components"
import Logo from "./Logo";
import Nav from "./Nav";

const Wrapper = styled.div`
  width: 100%;
  padding: 1.5em 5em;

  position: fixed;
  top: 0;
  z-index: 99;

  display: flex;
  justify-content: space-between;
  align-items: center;

  mix-blend-mode: difference;
  filter: invert(1);
`

const Header = () => (
  <Wrapper>
    <Logo />
    <Nav />
  </Wrapper>
)

export default Header
