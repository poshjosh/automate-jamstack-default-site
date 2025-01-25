import { useLocation } from "@reach/router"
import { getLanguageCodeByPath, getNodeFilterByPath } from "./functions-non-es6"
import { translate, DEFAULT_LANG } from "./i18n"

export function useNodeFilter() {
  return getNodeFilterByPath(useLocation().pathname)
}

export function useLanguageCode() {
  const lang = getLanguageCodeByPath(useLocation().pathname)
  return lang || DEFAULT_LANG
}

export function useTranslate(key) {
  return translate(useLanguageCode(), key)
}
