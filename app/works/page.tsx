'use client'

import Works from "routes/works/components/Works"
import styled from "styled-components"

const Wrapper = styled.div`
  background-color: #e2e2e2;
  min-height: 100vh;
`

const Page: React.FC = () => (
  <Wrapper>
    <Works />
  </Wrapper>
)

export default Page
