import { useLocation } from "@reach/router"
import { getLanguageCodeByPath, getNodeFilterByLang } from "./functions-non-es6"
import { DEFAULT_LANG, translate } from "./i18n"

export function useLanguageCode() {
  const location = useLocation()
  let lang = getLanguageCodeByPath(location.pathname)
  if (lang) {
    return lang
  }
  lang = new URLSearchParams(location.search).get('lang')
  return lang || DEFAULT_LANG
}

export function useNodeFilter() {
  return getNodeFilterByLang(useLanguageCode())
}

export function useTranslate(key) {
  return translate(useLanguageCode(), key)
}