import { usePathname } from "next/navigation"
import { isEmpty, last, reject, split } from "ramda"
import styled from "styled-components"
import { toTitle } from "utils/string"
import Type from "./Type"

const Wrapper = styled.div`
  font-family: 'Basis';
`

const Logo = () => {
  const pathname = usePathname()
  const dirs = reject(isEmpty, split('/', pathname))

  const title = isEmpty(dirs) ? 'Home' : last(dirs)
  const type = dirs.length < 2 ? 'Page' : dirs[0]

  return (
    <Wrapper>
      {toTitle(title!)} <Type>{toTitle(type)}</Type>
    </Wrapper>
  )
}

export default Logo
