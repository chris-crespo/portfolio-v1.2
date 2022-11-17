import NextLink from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import useCoverStore from 'stores/cover';
import styled from 'styled-components'
import shallow from 'zustand/shallow';

type Props = {
  to: string;
  children: React.ReactNode;
}

const StyledNextLink = styled(NextLink)`
  font-family: 'Basis';
`

const Link: React.FC<Props> = ({ to, children }) => {
  const router = useRouter()
  const [cover, uncover] = useCoverStore(
    ({ cover, uncover }) => [cover, uncover],
    shallow
  )

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    cover().then(() => router.push(to))
  }

  const pathname = usePathname()
  useEffect(() => {
    uncover()
  }, [pathname])

  return (
    <StyledNextLink href={to} onClick={handleClick}>
      {children}
    </StyledNextLink>
  )
}

export default Link
