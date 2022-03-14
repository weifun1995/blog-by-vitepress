import { getPages } from './utils/pages'
import { getTags } from './utils/tools'

const config = async function () {
  let pages = await getPages()

  return {
    title: 'vitepress-weiblog',
    base: '/',
    description: 'keep moving',
    themeConfig: {
      pages: pages,
      tags: getTags(pages),
      sidebar: 'auto',
      logo: 'note.png',
      title: 'Life is a movie',
      nav: [
        { text: 'Home', link: '/' },
      ]
    }
  }
}

module.exports = config()
