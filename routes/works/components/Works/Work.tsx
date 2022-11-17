import { motion } from "framer-motion"
import NextLink from "next/link"
import { useState } from "react"
import useCursorStore from "stores/cursor"
import styled from "styled-components"
import type { Work as WorkType } from "types"
import shallow from "zustand/shallow"

type Props = {
  work: WorkType,
  onHover: () => void,
  onLeave: () => void
}

const Wrapper = styled.div`
  filter: invert(1);
  mix-blend-mode: difference;
`

const Link = styled(motion(NextLink))`
  font-family: 'Basis';
  font-size: 4rem;
`

const Work: React.FC<Props> = ({ work, onHover, onLeave }) => {
  const [color, setColor] = useState('#e2e2e2')
  const { hover, leave } = useCursorStore(
    ({ hover, leave }) => ({ hover, leave }),
    shallow
  )

  const handleMouseEnter = () => {
    onHover();
    hover();
    setColor('#000')
  }

  const handleMouseLeave = () => {
    onLeave();
    leave();
    setColor('#e2e2e2')
  }

  return (
    <Wrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={`/works/${work.slug}`}
        animate={{ color }}
        transition={{ type: "tween", duration: 0.2 }}
      >
        {work.title}
      </Link>
    </Wrapper >
  )
}

export default Work
