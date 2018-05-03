<template>
  <div class="picker-render-view">
    <div class="select" @click="showPicker(3)" ref="select3">我是按钮</div>
    <city-picker @select="handleSelect(3,arguments)" :data="data[0]" :selected-index="selectedIndex[3]"
                 ref="picker3" :title="title" :cancelTxt="cancelTxt" :confirmTxt="confirmTxt" @change="handleChange"></city-picker>
  </div>
</template>
<script type="text/ecmascript-6">
  import Picker from 'base/picker/picker.vue'
  import CityPicker from 'base/city-picker/city-picker.vue'
  const areaList = {
    '110100': [
      {
        city: '市辖区',
        text: '东城区',
        value: '110101'
      },
      {
        city: '市辖区',
        text: '西城区',
        value: '110102'
      },
      {
        city: '市辖区',
        text: '朝阳区',
        value: '110105'
      },
      {
        city: '市辖区',
        text: '丰台区',
        value: '110106'
      },
      {
        city: '市辖区',
        text: '石景山区',
        value: '110107'
      },
      {
        city: '市辖区',
        text: '海淀区',
        value: '110108'
      },
      {
        city: '市辖区',
        text: '门头沟区',
        value: '110109'
      },
      {
        city: '市辖区',
        text: '房山区',
        value: '110111'
      },
      {
        city: '市辖区',
        text: '通州区',
        value: '110112'
      },
      {
        city: '市辖区',
        text: '顺义区',
        value: '110113'
      },
      {
        city: '市辖区',
        text: '昌平区',
        value: '110114'
      },
      {
        city: '市辖区',
        text: '大兴区',
        value: '110115'
      },
      {
        city: '市辖区',
        text: '怀柔区',
        value: '110116'
      },
      {
        city: '市辖区',
        text: '平谷区',
        value: '110117'
      },
      {
        city: '市辖区',
        text: '密云区',
        value: '110118'
      },
      {
        city: '市辖区',
        text: '延庆区',
        value: '110119'
      }
    ]
  }
  const provinceList = [
    {
      text: '北京市',
      value: '110000'
    }
  ]
  const cityList = {
    '110000': [
      {
        province: '北京市',
        text: '北京市',
        value: '110100'
      }
    ]
  }
  export default {
    mounted() {
    },
    data() {
      return {
        data: [
          [provinceList, cityList, areaList]
        ],
        selectedIndex: [
          [0],
          [1, 0],
          [0, 1, 2],
          [0, 0, 0]
        ],
        selectedText: [
        ],
        title: '123456',
        cancelTxt: '1',
        confirmTxt: '2'
      }
    },
    methods: {
      showPicker(index) {
        let picker = this.$refs['picker' + index]
        picker.show()
      },
      handleSelect(index, args) {
        console.log(index, args)
        // this.selectedText.splice(index, 1, args[2].join('，'))
      },
      handleChange(i, newIndex) {
        console.log(i, newIndex)
      }
    },
    components: {
      Picker,
      CityPicker
    }
  }
</script>

<style scoped lang="stylus">
  .picker-render-view
    .select
      margin: 0 10px 40px 10px
      height: 40px
      line-height: 40px
      border: 1px solid #e5e5e5
      text-align: center
      background: #fff
</style>