import DefaultTheme from 'vitepress/dist/client/theme-default'
import MyLayout from './MyLayout.vue'
import Home from './Home.vue'
import './styles/custom.css'

export default {
  ...DefaultTheme,
  Layout: MyLayout,
  NotFound: ()=> '404',
  enhanceApp({ app, router, siteData }) {
    console.log({siteData})
    app.component('Home', Home)
  }
}