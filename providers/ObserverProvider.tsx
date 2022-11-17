import { createContext, useRef } from "react"

type Props = {
  observer: IntersectionObserver;
  children: React.ReactNode
}

export const ObserverContext = createContext<IntersectionObserver | null>(null)

const ObserverProvider: React.FC<Props> = ({ observer, children }) => {
  return (
    <ObserverContext.Provider value={observer}>
      {children}
    </ObserverContext.Provider>
  )
}

export default ObserverProvider
