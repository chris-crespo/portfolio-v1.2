import styled from 'styled-components'
import Semicolon from './Semicolon'

type Props = {
  children: React.ReactNode
}

const Wrapper = styled.span`
  opacity: 0.15;
`

const Name = styled.span`
  padding-left: 6px;
`

const Type: React.FC<Props> = ({ children }) => (
  <Wrapper>
    <Semicolon />
    <Name>{children}</Name>
  </Wrapper>
)

export default Type
