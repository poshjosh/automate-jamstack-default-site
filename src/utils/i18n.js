export const DEFAULT_LANG = 'en'
export const ALL_POSTS = 'all_posts'
export const AUTHOR = 'author'
export const FOLLOW_ON_FACEBOOK = 'follow_on_facebook'
export const FOLLOW_ON_TWITTER = 'follow_on_twitter'
export const INDEX_TITLE = 'index_title'
export const NOT_FOUND_TITLE = 'not_found_title'
export const NOT_FOUND_MESSAGE = 'not_found_message'
export const SEARCH = 'search'
export const SEARCH_ALL_POSTS = 'search_all_posts'
export const SEARCH_PROMPT = 'search_prompt'

const config = {
  en: {
    [ALL_POSTS]: 'All posts',
    [AUTHOR]: 'Written by',
    [FOLLOW_ON_FACEBOOK]: 'Follow me on facebook',
    [FOLLOW_ON_TWITTER]: 'Follow me on twitter',
    [INDEX_TITLE]: 'Blog Index',
    [NOT_FOUND_TITLE]: 'Not found (code: 404)',
    [NOT_FOUND_MESSAGE]: 'You just hit a route that does not exist.',
    [SEARCH]: 'Search',
    [SEARCH_ALL_POSTS]: 'Search all posts',
    [SEARCH_PROMPT]: 'Type to search',
  },
  de: {
    [ALL_POSTS]: 'Alle Beiträge',
    [AUTHOR]: 'Autor',
    [FOLLOW_ON_FACEBOOK]: 'Folge mir auf Facebook',
    [FOLLOW_ON_TWITTER]: 'Folge mir auf Twitter',
    [INDEX_TITLE]: 'Blog Index',
    [NOT_FOUND_TITLE]: 'Nicht gefunden (Code: 404)',
    [NOT_FOUND_MESSAGE]: 'Sie sind gerade auf eine Route gestoßen, die nicht existiert.',
    [SEARCH]: 'Suche',
    [SEARCH_ALL_POSTS]: 'Suche alle Beiträge',
    [SEARCH_PROMPT]: 'Hier Suchen',
  }
}

export function translate(lang, key) {
  let found = (config[lang] && config[lang][key]) || undefined
  if (found) {
    return found
  }
  return (config['en'] && config['en'][key]) || key
}