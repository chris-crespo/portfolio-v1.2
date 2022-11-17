'use client'

import { useState } from "react"
import useCursorStore from "stores/cursor"
import styled, { css } from "styled-components"
import shallow from 'zustand/shallow'

const Line = css`
  height: 2px;
  border-radius: 999px;
  background-color: ${props => props.theme.fg};
`

const TopLine = styled.div`
  ${Line};
  width: 100%;
`

const BottomLine = styled.div`
  ${Line};
  width: 70%;
  align-self: flex-end;

  transition-duration: 200ms;
`

const Wrapper = styled.div`
  width: 36px;
  height: 22px;
  padding: 6px;

  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Hamburger = () => {
  const [hovering, setHovering] = useState(false)
  const [hover, leave] = useCursorStore(
    ({ hover, leave }) => [hover, leave],
    shallow
  )

  return (
    <Wrapper
      onMouseOver={() => { hover(); setHovering(true) }}
      onMouseOut={() => { leave(); setHovering(false) }}
    >
      <TopLine />
      <BottomLine style={{
        translate: `${hovering ? '-30px' : 0} 0`,
        transitionDuration: `${hovering ? 300 : 0}ms`
      }} />
    </Wrapper>
  )
}

export default Hamburger
