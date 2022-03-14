import {matter, fs, globby} from './plugin.cjs'


async function getPages () {
  // 获取目录下的所以.md文件的路径
  const paths = await globby(['**.md'], {
    ignore: ['node_modules'],
  })
  let pages = await Promise.all(
    paths.map(async (item) => {
      const content = await fs.readFile(item, 'utf-8')
      const { data } = matter(content)
      return {
        frontMatter: data,
        regularPath: `/${item.replace('.md', '.html')}`,
        relativePath: item,
        router: item.replace(/docs/, '').replace('.md', '.html')
      }
    })
  )

  return pages.filter(el => !el.frontMatter.isNoPage)
}



module.exports = {
  getPages
}