<template>
  <div class="home">
    <div class="list-header">
      <div v-for="(item, index) in tags"
           :key="'tag'+index"
           class="tagItem"
           :class="{tagActive: currTagIndex === index}"
           @click="doTaggleTag(index)">
        {{item}}
      </div>
    </div>
    <div class="list-article">
      <div class="article"
           v-for="(article, index) in articleList"
           :key="'article'+index"
           @click="readMd(article.router)">
        <div class="title">{{article.frontMatter.name}}</div>
        <div class="description">{{article.frontMatter.description}}</div>
        <div class="category">
          <img src="/tag.png"
               alt="">
          {{article.frontMatter.tag}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as vm from 'vitepress'
export default {
  data () {
    return {
      tags: [],
      currTagIndex: 0,
      articleList: [],
      articleAll: [],
      useRouter: null
    }
  },
  mounted () {
    let { theme } = vm.useData()
    this.tags = theme.value.tags
    this.articleAll = theme.value.pages
    this.articleList = this.cloneArr(this.articleAll)
    this.useRouter = vm.useRouter()
  },
  methods: {
    doTaggleTag (index) {
      this.currTagIndex = index
      if (index === 0) {
        this.articleList = this.cloneArr(this.articleAll)
        return
      }
      let tag = this.tags[index]
      this.articleList = this.cloneArr(this.articleAll).filter(item => item.frontMatter.tag && item.frontMatter.tag.includes(tag))
    },
    cloneArr (target) {
      return target.map(x => x)
    },
    readMd (url) {
      this.useRouter.go(url)
    }
  }
}
</script>
<style lang="less" scoped>
.home {
}
.list-header {
  padding: 1.3rem 1rem;
  border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
  display: flex;
  .tagItem {
    font-size: 1rem;
    padding: 0 1.2rem;
    border-right: 1px solid hsla(0, 0%, 59.2%, 0.2);
    cursor: pointer;
    &:hover {
      color: #3eaf7c;
    }
  }
  .tagActive {
    color: #3eaf7c;
  }
}

.list-article {
  .article {
    cursor: pointer;
    position: relative;
    background: #fff;
    padding: 12px 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;

    &::before {
      content: "";
      width: 90%;
      height: 1px;
      background: hsla(0, 0%, 59.2%, 0.1);
      position: absolute;
      bottom: 0;
      left: 5%;
    }

    &:hover {
      transform: translate3d(-10px, 0, 0);
      &::before {
        background: #1d2129;
      }
      transition: all 1s;
    }

    .title {
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      color: #1d2129;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .description {
      margin-bottom: 10px;
      color: #86909c;
      font-size: 13px;
      line-height: 22px;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .category {
      font-size: 12px;
      display: flex;
      align-items: center;
      img {
        margin-right: 10px;
      }
    }
  }
}
</style>