<template>
  <div>
    <div class="home">
      <home-header @select="selectCity"></home-header>
      <home-slider :sliders="sliders"></home-slider>
      <home-icons :iconList="topicList"></home-icons>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSlider from './components/slider'
import HomeIcons from './components/icons'
import {ERR_OK} from 'api/config'
import { getSliders, getHomeInfo } from 'api/home'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSlider,
    HomeIcons
  },
  data() {
    return {
      sliders: [],
      topicList: [],
      specialSubjectList: []
    }
  },
  computed: {
    ...mapGetters([
      'cityId'
    ])
  },
  created() {
    this._getSliders()
    this._getHomeInfo(this.cityId)
  },
  watch: {
    cityId(newVal, oldVal) {
      if (newVal === oldVal) {
        return
      }
      this._getHomeInfo(newVal)
    }
  },
  methods: {
    selectCity() {
      this.$router.push({
        path: `/city`
      })
    },
    _getSliders() {
      getSliders().then((res) => {
        if (res.errorCode === ERR_OK) {
          this.sliders = this._normalizeSliders(res.advList)
        }
      })
    },
    _getHomeInfo(cityId) {
      getHomeInfo(cityId).then((res) => {
        if (res.IsError === false) {
          console.log(res)
          this.topicList = res.topicList
          this.specialSubjectList = res.specialSubjectList
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
@import '~common/stylus/variable'

.home
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  overflow: hidden
  background: $color-body-background
</style>
