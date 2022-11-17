import styled from 'styled-components'
import Section from 'routes/home/components/Section'
import Title from '../Title'
import React from 'react'
import type { Work } from 'types'
import { omit } from 'ramda'
import Detail from './Detail'

type Props = {
  work: Work
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const Info: React.FC<Props> = ({ work }) => (
  <Section>
    <Wrapper>
      <Title text={work.shortDescription} />
      {Object.entries(omit(['title', 'slug', 'shortDescription']))
        .map(([key, value]) => <Detail key={key} value={value} />)}
    </Wrapper>
  </Section>
)

export default Info
