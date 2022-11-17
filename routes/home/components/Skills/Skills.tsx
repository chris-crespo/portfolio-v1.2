import skills from 'assets/json/skills.json'
import styled from "styled-components"
import Section from '../Section'
import Skill from './Skill'
import Title from './Title'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const Skills: React.FC = () => (
  <Section>
    <Wrapper>
      <Title>Skills</Title>
      {skills.map(skill => <Skill key={skill.label} skill={skill} />)}
    </Wrapper>
  </Section>
)

export default Skills
