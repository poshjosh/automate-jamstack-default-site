import { useLocation } from "@reach/router"
import { getLanguageCodeByPath, getNodeFilterByPath } from "./functions-non-es6"

export function useNodeFilter() {
  return getNodeFilterByPath(useLocation().pathname)
}

export function useLanguageCode(resultIfNone) {
  const lang = getLanguageCodeByPath(useLocation().pathname)
  return lang || resultIfNone
}
