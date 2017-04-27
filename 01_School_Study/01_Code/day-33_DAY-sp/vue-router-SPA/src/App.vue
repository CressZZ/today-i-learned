<template>
  <div id="app">
    <h1><abbr title="Single Page Application">SPA</abbr></h1>
    <router-view></router-view>
    <appNav></appNav>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
export default {
  name: 'apps',
  components: {
    appNav: Navigation
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="sass">
.container
  width: 940px
  margine:
    left: auto
    right: auto

.router-link-active
  text-decoration: none
  font-weight: 900


</style>
