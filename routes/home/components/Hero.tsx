import styled from "styled-components"
import Section from "./Section"

const Name = styled.div`
  font-family: 'Basis';
  font-size: 6rem;
  margin-top: 2.5em;
`

const Subname = styled.div`
  font-family: 'Basis';
  font-size: 2rem;
`

const Hero: React.FC = () => (
  <Section>
    <Name>Hi, I'm Christian</Name>
    <Subname>Fullstack Developer</Subname>
  </Section>
)

export default Hero
