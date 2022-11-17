'use client'

import { RefObject, useEffect, useState } from "react"

type Opts = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean
}

const useIntersection = <T extends HTMLElement>(
  el: RefObject<T>, 
  { threshold, rootMargin, once = false }: Opts = {}
) => {
  const [intersecting, setIntersecting] = useState(false)

  if (typeof IntersectionObserver === 'undefined')
    return intersecting

  const observer = new IntersectionObserver(([entry]) => {
    if (once && entry.isIntersecting) setIntersecting(true)
    else if (!once) setIntersecting(entry.isIntersecting)
  }, { threshold, rootMargin })

  useEffect(() => {
    if (el.current) observer.observe(el.current)
    return () => {
      if (el.current) observer.disconnect()
    }
  }, [])

  return intersecting
}

export default useIntersection
