import { usePathname } from "next/navigation"
import { RefObject, useLayoutEffect } from "react"
import useHeightStore from "stores/height"

const useInitHeight = (content: RefObject<HTMLElement>) => {
  const pathname = usePathname()
  const initHeight = useHeightStore(store => store.initHeight)

  useLayoutEffect(() => {
    initHeight(content.current!.clientHeight)
  }, [pathname])
}

export default useInitHeight
