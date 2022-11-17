import { useState } from 'react'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

export const useStyledComponentRegistry = () => {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

  const styledComponentsFlushEffect = () => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    (styledComponentsStyleSheet.instance as any).clearTag()
    return <>{styles}</>
  }

  const StyledComponentsRegistry = ({ children }: { children: React.ReactNode }) => (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children as React.ReactElement}
    </StyleSheetManager>
  );

  return [StyledComponentsRegistry, styledComponentsFlushEffect] as const
}
