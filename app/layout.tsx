'use client'

import { ThemeProvider } from 'styled-components'
import { FontStyles, GlobalStyle, theme } from 'styled'
import Cover from 'components/Cover'
import Cursor from 'components/Cursor'
import Header from 'components/Header'
import Parallax from 'components/Parallax'
import useHeightStore from 'stores/height'
import RootStyleRegistry from './registry'

type Props = {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
  const height = useHeightStore(store => store.height)

  return (
    <html lang="en">
      <head>
        <title>Portfolio - Christian C.</title>
      </head>
      <body style={{ height }}>
        <div>
          <RootStyleRegistry>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <FontStyles />
              <Cover />
              <Cursor />
              <Header />
              <Parallax>{children}</Parallax>
            </ThemeProvider>
          </RootStyleRegistry>
        </div>
      </body>
    </html >
  )
}

export default RootLayout
