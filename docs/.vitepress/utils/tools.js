
export function getTags (pages) {
  let arr = ['全部']
  pages.map(item => item.frontMatter.tag).forEach(ele => {
    let tag = ele && ele.split(' ') || []
    arr.push(...tag)
  })
  return Array.from(new Set(arr))
}

export function getPageFilterByTag (pages, tag) {
  let arr = []
  arr = pages.map(item => item.frontMatter.tag.includes(tag))
  return arr
}