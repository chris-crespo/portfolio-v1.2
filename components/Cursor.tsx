'use client'

import styled from "styled-components"
import { useEffect, useRef } from "react"
import useMouseLeave from "hooks/useMouseLeave"
import useMouseEnter from "hooks/useMouseEnter"
import useMouseMove from "hooks/useMouseMove"
import useCursorStore from "stores/cursor"

const Wrapper = styled.div`
  background-color: #ffe0b6;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100%;

  position: fixed;
  z-index: 999;

  transition: scale 150ms;

  mix-blend-mode: difference;
  pointer-events: none;
`

const Cursor = () => {
  const ref = useRef<HTMLDivElement>(null)
  const hovering = useCursorStore(state => state.hovering)

  useMouseMove(e => {
    if (!ref.current) return
    const { clientX, clientY } = e
    ref.current.style.translate = `calc(${clientX}px - 50%) calc(${clientY}px - 50%)`
  })

  useMouseLeave(() => {
    if (!ref.current) return
    ref.current.style.scale = '0'
  })

  useMouseEnter(() => {
    if (!ref.current) return
    ref.current.style.scale = '1'
  })

  useEffect(() => {
    if (!ref.current) return
    ref.current.style.scale = hovering ? '1.5' : '1'
  }, [hovering])

  return (
    <Wrapper ref={ref} />
  )
}

export default Cursor
