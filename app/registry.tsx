'use client'

import { useStyledComponentRegistry } from 'lib/styled'
import { useServerInsertedHTML } from 'next/navigation'

type Props = {
  children: React.ReactNode
}

const RootStyleRegistry: React.FC<Props> = ({ children }) => {
  const [StyledComponentsRegistry, styledComponentsFlushEffect] = useStyledComponentRegistry()

  useServerInsertedHTML(() => <>{styledComponentsFlushEffect()}</>)

  return (
    <StyledComponentsRegistry>
      {children}
    </StyledComponentsRegistry>
  )
}

export default RootStyleRegistry
