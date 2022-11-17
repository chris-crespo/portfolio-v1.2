'use client'

import styled from "styled-components"
import Underline from 'routes/home/components/Underline'
import Label from './Label'
import Description from "./Description";
import type { Skill as SkillType } from "types";
import { useRef } from "react";
import useIntersection from "hooks/useIntersection";

type Props = {
  skill: SkillType
}

const Wrapper = styled.div`
  width: 50%;
`

const Content = styled.div`
  display: flex;

  font-family: 'Basis';

  padding: 1.5em 0;
  text-transform: uppercase;
`

const Skill: React.FC<Props> = ({ skill }) => {
  const skillRef = useRef<HTMLDivElement>(null)
  const intersecting = useIntersection(skillRef, {
    threshold: 0,
    rootMargin: '0px 0px -10% 0px',
    once: true
  })

  return (
    <Wrapper ref={skillRef}>
      <Content>
        <Label
          text={skill.label}
          show={intersecting}
        />
        <Description
          text={skill.description.join(', ')}
          show={intersecting}
        />
      </Content>
      <Underline show={intersecting} />
    </Wrapper>
  )
}

export default Skill
