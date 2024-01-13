import { readable } from "svelte/store"

export default function (mediaQueryString) {
  return readable(null, (set) => {
    if (typeof globalThis["window"] === "undefined") return

    const match = window.matchMedia(mediaQueryString)
    set(match.matches)
    const element = (event) => set(event.matches)
    match.addEventListener("change", element)
    return () => match.removeEventListener("change", element)
  })
}
