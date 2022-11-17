'use client'

import { motion } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";
import useInitHeight from "./hooks/useInitHeight";
import useParallaxY from "./hooks/useParallaxY";
import Item from "./Item";

type Props = {
  children: React.ReactNode;
}

type Compound = {
  Item: typeof Item
}

const Wrapper = styled.div`
  background-color: white;
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const Content = styled(motion.div)``

const Parallax: React.FC<Props> & Compound = ({ children }) => {
  const y = useParallaxY()

  const content = useRef<HTMLDivElement>(null)
  useInitHeight(content)

  return (
    <Wrapper>
      <Content
        ref={content}
        style={{ y }}
      >
        {children}
      </Content>
    </Wrapper>
  )
}

Parallax.Item = Item

export default Parallax
