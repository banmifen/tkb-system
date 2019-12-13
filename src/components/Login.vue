<template>
  <div id="login" v-show="isShow" @click.stop="login">
    <div><div class="info"></div></div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data: function () {
    return {
      isShow: true
    }
  },
  methods: {
    login () {
      this.isShow = false
    }
  }
}
</script>

<style scoped lang="scss">
  #login {
    display: flex;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    position: relative;
    background: rgba(0,0,0,0.2);
    .info {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 800px;
      height: 400px;
      background: white;
    }
  }

</style>
