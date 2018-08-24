<template>
  <div class="listview">
    <!--tab切换-->
      <cube-tab-bar v-model="selectedLabel" showSlider>
        <cube-tab v-for="(item, index) in tabs" :label="item.label" :key="item.label">
        </cube-tab>
      </cube-tab-bar>
      <cube-tab-panels v-model="selectedLabel">
        <cube-tab-panel v-for="(item, index) in tabs" :label="item.label" :key="item.label">
          <div class="scroll-wrapper">
            <cube-scroll class="city-list" :data="allCitys">
              <!--当前位置-->
              <div class="area">
                <div class="tit">您的位置</div>
                <div class="cont">
                  <div class="cont-item">
                    <div class="cont-item-box">杭州</div>
                  </div>
                </div>
              </div>
              <!--热门城市-->
              <div class="area">
                <div class="tit">热门城市</div>
                <div class="cont">
                  <div class="cont-item" 
                      v-for="(hotcity, index) in item.hotcitys"
                      :key="index"
                  >
                    <div class="cont-item-box">
                      {{ hotcity.cityName }}
                    </div>
                  </div>
                </div>
              </div>
              <!--所有城市-->
              <div class="area" v-for="(allcity, index) of item.allcitys" :key="index">
                <div class="tit">{{ allcity.key }}</div>
                <div class="cont" v-for="(innerItem, index) of allcity.cityList" :key="index">
                    {{ innerItem.cityName }}
                </div>
              </div>
            </cube-scroll>
          </div>
        </cube-tab-panel>
      </cube-tab-panels>
  </div>
</template>

<script>
export default {
  name: 'ListView',
  props: {
    hotCitys: {
      type: Array,
      default: () => []
    },
    allCitys: {
      type: Array,
      default: () => []
    },
    hotSug: {
      type: Array,
      default: () => []
    },
    allSug: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      selectedLabel: '国内城市',
      tabs: [{
        label: '国内城市',
        hotcitys: [],
        allcitys: {}
      }, {
        label: '海外城市',
        hotcitys: [],
        allcitys: {}
      }],
      flag: false
    }
  },
  watch: {
    hotCitys(newVal) {
      this.tabs[0].hotcitys = newVal
    },
    allCitys(newVal) {
      this.tabs[0].allcitys = newVal
    },
    hotSug(newVal) {
      this.tabs[1].hotcitys = newVal
    },
    allSug(newVal) {
      this.tabs[1].allcitys = newVal
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'

.listview >>> .cube-tab-bar
  background: $color-background
  .cube-tab
    padding: .3rem 0
    font-size: 1rem
    div
      font-size: $font-size-medium-x
    &.cube-tab_active
      color: $color-theme
  .cube-tab-bar-slider
    background-color: $color-theme

.listview >>> .cube-tab-panels
  position: absolute
  top: 1.9rem
  left: 0
  right: 0
  bottom: 0
  overflow: hidden
  .cube-tab-panels-group
    height: 100%

.listview
  font-size: $font-size-medium
  .cube-tab-panels
    .cube-tab-panels-group
      width: 100%
      height: 100%
      .cube-tab-panel
        width: 100%
        height: 100%
        .scroll-wrapper
          height: 100%
          .city-list
            width: 100%
            height: 100%
            .tit
              box-sizing: border-box
              width: 100%
              height: .48rem
              line-height: .48rem
              color: #424242
              padding-left .3rem
            .cont
              box-sizing boder-box
              overflow hidden
              background #fff
              padding .2rem .6rem .2rem .2rem
              .cont-item
                box-sizing border-box
                width 33.33%
                float left
                padding .1rem
                .cont-item-box
                  padding .1rem 0
                  width 100%
                  text-align center
                  border 1px solid #ccc
                  border-radius .1rem
</style>
