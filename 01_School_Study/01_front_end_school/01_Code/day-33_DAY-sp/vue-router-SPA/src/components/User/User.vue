<template lang="html">
  <div class="">

    <h2>User page</h2>
    <p>param id {{ id }}</p>
    <app-user-link>Go to GHome</app-user-link>
    <ul>
      <li>Lorem ipsum dolor.</li>
      <li>Lorem ipsum dolor.</li>
      <li>Lorem ipsum dolor.</li>
    </ul>
  </div>
</template>

<script>
import UserLink from './UserLink.vue'
export default{
  components:{
    appUserLink: UserLink
  },
  data(){
    return {
      id: this.$route.params.id
    }
  }

}
</script>

<style lang="sass">
</style>
