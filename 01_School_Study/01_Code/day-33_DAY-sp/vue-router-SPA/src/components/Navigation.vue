<template lang="html">
  <nav class="gnd">
    <ul>
      <!-- <li><router-link to='/' exact>Home</router-link></li>
      <li><router-link to='/user'>User</router-link></li> -->
      <router-link to="/" tag="li" exact active-class="current-page"><a href>Home</a></router-link>
      <router-link to="/user/11" tag="li" exact><a href>User</a></router-link>

    </ul>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
