export const DEFAULT_LANG = 'en'

const config = {
  en: {
    all_posts: 'All posts',
    author: 'Written by',
    follow_on_facebook: 'Follow me on facebook',
    follow_on_twitter: 'Follow me on twitter',
    index_title: 'Blog Index',
    not_found_title: 'Not found (code: 404)',
    not_found_message: 'You just hit a route that does not exist.',
    search: 'Search',
    search_prompt: 'Type to search',
  },
  de: {
    all_posts: 'Alle Beiträge',
    author: 'Autor',
    follow_on_facebook: 'Folge mir auf Facebook',
    follow_on_twitter: 'Folge mir auf Twitter',
    index_title: 'Blog Index',
    not_found_title: 'Nicht gefunden (Code: 404)',
    not_found_message: 'Sie sind gerade auf eine Route gestoßen, die nicht existiert.',
    search: 'Suche',
    search_prompt: 'Hier Suchen',
  }
}

export function translate(lang, key) {
  let found = (config[lang] && config[lang][key]) || undefined
  if (found) {
    return found
  }
  return (config['en'] && config['en'][key]) || key
}