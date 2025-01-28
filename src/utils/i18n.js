export const DEFAULT_LANG = 'en'

export const ALL_POSTS = 'all_posts'
export const AUTHOR = 'author'
export const CHOOSE_LANGUAGE = 'Choose_language'
export const FOLLOW_ON_FACEBOOK = 'follow_on_facebook'
export const FOLLOW_ON_INSTAGRAM = 'follow_on_instagram'
export const FOLLOW_ON_LINKEDIN = 'follow_on_linkedin'
export const FOLLOW_ON_REDDIT = 'follow_on_reddit'
export const FOLLOW_ON_TIKTOK = 'follow_on_tiktok'
export const FOLLOW_ON_TWITTER = 'follow_on_twitter'
export const FOLLOW_ON_YOUTUBE = 'follow_on_youtube'
export const INDEX_TITLE = 'index_title'
export const NOT_FOUND_TITLE = 'not_found_title'
export const NOT_FOUND_MESSAGE = 'not_found_message'
export const SEARCH = 'search'
export const SEARCH_ALL_POSTS = 'search_all_posts'
export const SEARCH_PROMPT = 'search_prompt'

const config = {
  en: {
    displayName: "English",
    translations: {
      [ALL_POSTS]: 'All posts',
      [AUTHOR]: 'Written by',
      [CHOOSE_LANGUAGE]: 'Choose language',
      [FOLLOW_ON_FACEBOOK]: 'Follow me on facebook',
      [FOLLOW_ON_INSTAGRAM]: 'Follow me on instagram',
      [FOLLOW_ON_LINKEDIN]: 'Follow me on linkedin',
      [FOLLOW_ON_REDDIT]: 'Follow me on reddit',
      [FOLLOW_ON_TIKTOK]: 'Follow me on tiktok',
      [FOLLOW_ON_TWITTER]: 'Follow me on twitter',
      [FOLLOW_ON_YOUTUBE]: 'Follow me on youtube',
      [INDEX_TITLE]: 'Blog Index',
      [NOT_FOUND_TITLE]: 'Not found (code: 404)',
      [NOT_FOUND_MESSAGE]: 'You just hit a route that does not exist.',
      [SEARCH]: 'Search',
      [SEARCH_ALL_POSTS]: 'Search all posts',
      [SEARCH_PROMPT]: 'Type to search',
    }
  },
  de: {
    displayName: "Deutsch",
    translations: {
      [ALL_POSTS]: 'Alle Beiträge',
      [AUTHOR]: 'Autor',
      [CHOOSE_LANGUAGE]: 'Sprache wählen',
      [FOLLOW_ON_FACEBOOK]: 'Folge mir auf Facebook',
      [FOLLOW_ON_INSTAGRAM]: 'Folge mir auf Instagram',
      [FOLLOW_ON_LINKEDIN]: 'Folge mir auf LinkedIn',
      [FOLLOW_ON_REDDIT]: 'Folge mir auf Reddit',
      [FOLLOW_ON_TIKTOK]: 'Folge mir auf TikTok',
      [FOLLOW_ON_TWITTER]: 'Folge mir auf Twitter',
      [FOLLOW_ON_YOUTUBE]: 'Folge mir auf YouTube',
      [INDEX_TITLE]: 'Blog Index',
      [NOT_FOUND_TITLE]: 'Nicht gefunden (Code: 404)',
      [NOT_FOUND_MESSAGE]: 'Sie sind gerade auf eine Route gestoßen, die nicht existiert.',
      [SEARCH]: 'Suche',
      [SEARCH_ALL_POSTS]: 'Suche alle Beiträge',
      [SEARCH_PROMPT]: 'Hier Suchen',
    }
  }
}

export function translate(lang, key) {
  let found = (config[lang] && config[lang]["translations"] && config[lang]["translations"][key]) || undefined
  if (found) {
    return found
  }
  return lang === DEFAULT_LANG ? key : translate(DEFAULT_LANG, key)
}

export function getLanguageOptions(languageCodes = [], valueKey = 'value', labelKey = 'label') {
  return Object.keys(config).filter(lang => languageCodes.includes(lang)).map(lang => {
    const option = {}
    option[valueKey] = lang
    option[labelKey] = config[lang]["displayName"] || lang
    return option
  })
}