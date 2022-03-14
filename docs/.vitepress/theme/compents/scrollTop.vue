<template>
  <div>
    <svg v-show="isShow"
         @click="scrollTop"
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 49.484 28.284"
         class="go-to-top">
      <g transform="translate(-229 -126.358)">
        <rect fill="currentColor"
              width="35"
              height="5"
              rx="2"
              transform="translate(229 151.107) rotate(-45)"></rect>
        <rect fill="currentColor"
              width="35"
              height="5"
              rx="2"
              transform="translate(274.949 154.642) rotate(-135)"></rect>
      </g>
    </svg>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShow: false,
      timer: null
    }
  },
  mounted () {
    window.addEventListener('scroll', this.listenScroll)
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.listenScroll)
  },
  methods: {
    listenScroll () {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(this.callback, 50)
    },
    callback () {
      this.isShow = window.pageYOffset > 200
    },
    scrollTop () {
      window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>
<style lang="less" scoped>
.go-to-top {
  width: 40px;
  position: fixed;
  right: 20rem;
  bottom: 2rem;
  transform: translate3d(50%, 0, 0);
  z-index: 100;
}
.go-to-top:hover {
  color: #72cda4;
}
</style>