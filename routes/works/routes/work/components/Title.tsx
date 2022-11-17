import styled from 'styled-components'

type Props = {
  text: string;
}

const Wrapper = styled.div`
  margin-top: 14em;
  margin-bottom: 3em;
  padding: 0 5em;
`

const Heading = styled.h3`
  font-family: 'Basis';
  font-size: 4rem;
`

const Title: React.FC<Props> = ({ text }) => {
  return (
    <Wrapper>
      <Heading>{text}</Heading>
    </Wrapper>
  )
}

export default Title
