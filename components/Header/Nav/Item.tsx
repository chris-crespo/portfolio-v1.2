import classNames from 'classnames'
import Link from 'components/Link';
import { usePathname } from 'next/navigation';
import useCursorStore from 'stores/cursor';
import styled from "styled-components"
import shallow from 'zustand/shallow';

type Props = {
  to: string;
  children: React.ReactNode
}

const Wrapper = styled.li`
  display: inline-block;
  padding: .5em;

  &.disabled {
    pointer-events: none;
    opacity: 0.15;
  }

  &:not(:last-child) {
    margin-right: 1.5em;
  }
`

const Item: React.FC<Props> = ({ to, children }) => {
  const [hover, leave] = useCursorStore(
    ({ hover, leave }) => [hover, leave],
    shallow
  )

  const pathname = usePathname()
  const disable = pathname === to

  return (
    <Wrapper
      onMouseEnter={hover}
      onMouseLeave={leave}
      className={classNames(disable && 'disabled')}
    >
      <Link to={to}>{children}</Link>
    </Wrapper>
  )
}

export default Item
