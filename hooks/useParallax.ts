import { useContext } from "react"
import { ParallaxContext } from "providers/ParallaxProvider"

const useParallax = () => useContext(ParallaxContext)

export default useParallax
