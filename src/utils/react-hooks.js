import { useLocation } from "@reach/router"
import { getNodeFilterByPath } from "./functions-non-es6"

export function useNodeFilter() {
  return getNodeFilterByPath(useLocation().pathname)
}
