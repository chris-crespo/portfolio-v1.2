'use client'

import styled from "styled-components"
import Quote from "components/Quote"
import Hero from "routes/home/components/Hero"
import Skills from "routes/home/components/Skills"
import Contact from "routes/home/components/Contact"

const Wrapper = styled.div`
  background-color: #e2e2e2;
  min-height: 100vh;
`

const Page = () => (
  <Wrapper>
    <Hero />
    <Skills />
    <Contact />
    <Quote>
      For God wrote in Lisp code<br />
      When he filled the leaves with<br />
      green.<br />
      The fractal flowers and recursive<br />
      roots:<br />
      The most lovely hack I've seen.<br />
      And when I ponder snowflakes,<br />
      never finding two the same,<br />
      I know God likes a language<br />
      with its own four-letter name.
    </Quote>
  </Wrapper>
)

export default Page
