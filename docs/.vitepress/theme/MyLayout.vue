<template>
  <Layout />
  <scrollTop/>
</template>
<script setup>
import scrollTop from './compents/scrollTop.vue'
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme

import * as vm from 'vitepress'

const {theme} = vm.useData()

console.log({theme})






console.log('router', theme)
</script>
<style lang="less">
</style>