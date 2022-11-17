import styled from 'styled-components'

type Props = {

}

const Wrapper = styled.div`
  width: 100vw;
  height: 80vh;
  background-color: #e2e2e2;

  position: relative;

  filter: invert(1);
  mix-blend-mode: difference;
`

const Image: React.FC<Props> = () => {
  return (
    <Wrapper>

    </Wrapper>
  )
}

export default Image
