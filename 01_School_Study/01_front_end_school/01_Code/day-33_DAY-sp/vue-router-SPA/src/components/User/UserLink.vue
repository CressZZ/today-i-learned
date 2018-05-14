<template lang="html">
  <button type="button" @click="gotoHomeComponent">
    <slot></slot>
  </button>
</template>

<script>
export default {
  methods: {
    gotoHomeComponent(){
      this.$router.push('/');
      // this.$router.push({path: '/'});
    }
  }
}
</script>

<style lang="css">
</style>
