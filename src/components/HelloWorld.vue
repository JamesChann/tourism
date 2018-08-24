<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <cube-button @click="showToast1">show toast</cube-button>
    <cube-loading></cube-loading>
    <cube-loading :size="28"></cube-loading>
    <cube-loading :size="40"></cube-loading>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '示例代码',
      toastTxt: 'cube toast content'
    }
  },
  methods: {
    showToast1 () {
      this.$createToast({
        txt: '第一个'
      }).show()
    },
    showToast2 () {
      this.$createToast({
        txt: '第二个'
      }).show()
    },
    showToast3 () {
      this.$createToast({
        txt: '第三个'
      }).show()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
