import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import styled from "styled-components"
import Section from "../Section"
import Background from "./Background"
import Footer from "./Footer"
import Heading from "./Heading"
import useBackgroundOpacity from "./hooks/useBackgroundOpacity"

const Wrapper = styled.div`
  height: 100%;

  position: relative;
  z-index: 1100;

  padding: 0 10%;
`

const Contact: React.FC = () => {
  const contact = useRef<HTMLDivElement>(null)
  const [offsetTop, setOffsetTop] = useState(0)
  const opacity = useBackgroundOpacity(offsetTop)

  const show = useInView(contact, { amount: 0.95 })

  return (
    <Section ref={contact}>
      <Background
        style={{ opacity }}
        onViewportEnter={() => setOffsetTop(contact.current!.offsetTop)}
      />
      <Wrapper>
        <Heading show={show} />
        <Footer />
      </Wrapper>
    </Section>
  )
}

export default Contact
