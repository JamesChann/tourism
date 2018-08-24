<template>
  <div class="home-header">
    <div class="header-left">
      <i class="icon-back"></i>
    </div>
    <div class="header-input">
      <i class="icon-search"></i>
      <span class="input-city">输入城市景点/游玩主题</span>
    </div>
      <div class="header-right" @click="selectCity">
        北京
        <i class="icon-drop arrow-icon"></i>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  methods: {
    selectCity() {
      this.$emit('select')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.home-header
  display: flex
  flex-direction: row
  height: .86rem
  line-height: .86rem
  background: $color-header-nav
  .header-left
    width: .64rem
    float: left
    .icon-back
      display: inline-block
      width: 100%
      height: .86rem
      line-height: .86rem
      color: $color-header-text
      text-align: center
      font-size: .4rem
  .header-input
    flex: 1
    height: .64rem
    line-height: .64rem
    position: relative
    font-size: $font-size-medium
    margin-top: .12rem
    margin-left: .2rem
    padding-left: .2rem
    background: #ffffff
    border-radius: .1rem
    vertical-align: middle
    color: #ccc
    .icon-search
      position: absolute
      left: .2rem
      top: 50%
      transform: translateY(-50%)
      font-size: .5rem
    .input-city
      position: absolute
      left: .8rem
      top: 2px
      font-size: $font-size-small
      no-wrap()
      display: inline-block
  .header-right
    min-width: 1.04rem
    padding: 0 .1rem
    float: right
    font-size: $font-size-small
    text-align: center
    color: #fff
    .arrow-icon
        margin-left: -0.04rem
        font-size: .24rem
</style>
