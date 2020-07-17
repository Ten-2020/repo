<!--
 * @Author: 高腾
 * @Description: 
 * @Date: 2020-05-23 15:20:01
-->
<template>
  <div>
    <div id="mapDiv" style="position:absolute;width:500px; height:400px"></div>
  </div>
</template>
<script>
  import T from 'T' 
  export default {
    name: 'tianDiTu',
    components: {},
    data() {
      return {}
    },
    created() {
    },
    mounted() {
      let zoom = 12
      let map = new T.Map('mapDiv')
      map.centerAndZoom(new T.LngLat(116.40769, 39.89945), zoom)
    },
    computed: {},
    watch: {},
    methods: {}
  }
</script>
<style lang='less' scoped></style>