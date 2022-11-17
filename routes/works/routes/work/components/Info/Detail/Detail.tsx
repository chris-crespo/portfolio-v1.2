'use client'

import styled from "styled-components"
import Underline from 'routes/home/components/Underline'
import Label from './Label'
import Description from "./Description";
import type { Skill as SkillType } from "types";
import { useRef } from "react";
import useIntersection from "hooks/useIntersection";

type Props = {
  key: string;
  value: string;
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

const Detail: React.FC<Props> = ({ key, value }) => {
  const detail = useRef<HTMLDivElement>(null)
  const intersecting = useIntersection(detail, {
    threshold: 0,
    rootMargin: '0px 0px -10% 0px',
    once: true
  })

  return (
    <Wrapper ref={detail}>
      <Content>
        <Label
          text={key}
          show={intersecting}
        />
        <Description
          text={value}
          show={intersecting}
        />
      </Content>
      <Underline show={intersecting} />
    </Wrapper>
  )
}

export default Detail
