<template>
  <div>
    <div class="home">
      <home-header @select="selectCity"></home-header>
      <home-slider :sliders="sliders"></home-slider>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSlider from './components/slider'
import {ERR_OK} from 'api/config'
import {getSliders} from 'api/home'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSlider
  },
  data() {
    return {
      sliders: []
    }
  },
  created() {
    this._getSliders()
  },
  methods: {
    selectCity() {
      this.$router.push({
        path: `/select-city`
      })
    },
    _getSliders() {
      getSliders().then((res) => {
        if (res.errorCode === ERR_OK) {
          this.sliders = this._normalizeSliders(res.advList)
        }
      })
    },
    _normalizeSliders(list) {
      let arr = []
      list.forEach((item) => {
        arr.push({
          url: item.jumpLink,
          image: item.picUrl
        })
      })
      return arr
    }
  }
}
</script>

<style lang="stylus" scoped>
.home
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  overflow: hidden
</style>
