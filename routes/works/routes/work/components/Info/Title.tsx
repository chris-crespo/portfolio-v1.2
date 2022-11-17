import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import styled from "styled-components"
import Underline from "../Underline"

type Props = {
  children: React.ReactNode
}

const Wrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid inherit;
  overflow: hidden;
`

const Heading = styled(motion.h3)`
  font-family: 'Basis';
  font-size: 3.5rem;
  margin-top: 2.5em;
  margin-bottom: .2em;
`

const Title: React.FC<Props> = ({ children }) => {
  const title = useRef<HTMLDivElement>(null)
  const inView = useInView(title, {
    amount: "all",
    margin: '0px 0px -10% 0px',
    once: true
  })

  return (
    <Wrapper ref={title}>
      <Heading
        animate={{ y: inView ? 0 : '100%' }}
        transition={{
          type: "tween",
          duration: 0.4,
          delay: 0.1
        }}
      >{children}</Heading>
      <Underline show={inView} />
    </Wrapper>
  )
}

export default Title
