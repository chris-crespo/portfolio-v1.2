'use client'

import styled from "styled-components"
import works from 'assets/json/works.json'
import Work from "./Work"
import Background from "./Background"
import { useState } from "react"

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

const WorkList = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const Works: React.FC = () => {
  const [hovering, setHovering] = useState(false)

  return (
    <Wrapper>
      <Background show={hovering} />
      <WorkList>
        {works.map(work => (
          <Work
            work={work}
            onHover={() => setHovering(true)}
            onLeave={() => setHovering(false)}
          />
        ))}
      </WorkList>
    </Wrapper>
  )
}

export default Works
