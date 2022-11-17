import { isEmpty } from "ramda"

export const toTitle = (str: string) => {
  if (isEmpty(str)) return str

  const [c, ...cs] = str.split('')
  return c.toUpperCase() + cs.join('')
}
