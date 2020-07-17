<!--
 * @Author: 高腾
 * @Description: 
 * @Date: 2020-05-30 09:56:30
--> 
<template>
  <div>
    <div id="mapDiv"></div>
    <index ref="index"></index>
  </div>
</template>
<script>
import T from 'T'
import positions, { icons } from '@/components/common/position'
// import { icons } from '@/components/common/position'
import index from '@/views/warfare/index'
export default {
  name: 'mapDiv',
  components: {
    index
  },
  data () {
    return {
      positions: positions
    }
  },
  created () {
  },
  mounted () {
    // let zoom = 12
    // let map = new T.Map('mapDiv')
    // map.centerAndZoom(new T.LngLat(116.40769, 39.89945), zoom)
    this.init() // 这个是根据div的id来实现实例的,所以不能放在created方法中,因为此时还找不到div
  },
  computed: {},
  watch: {},
  methods: {
    init () {
      var map
      var zoom = 9
      var lay
      var onlyMapLay
      // http://t0.tianditu.gov.cn/ter_c/wmts?tk=您的密钥
      // http://t0.tianditu.gov.cn/ter_w/wmts
      // 下面的/ter_w改成这个之后,记得把LAYER=ter这个写成这样
      var imageURL = "http://t0.tianditu.gov.cn/ter_w/wmts?" +
        "SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=ter&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles" +
        "&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=6b70c485070aaf4ebb89cac857d2a549"
      //创建自定义图层对象
      // lay = new T.TileLayer(imageURL, { minZoom: 4, maxZoom: 10 })
      lay = new T.TileLayer(imageURL, { minZoom: 4, maxZoom: 9 })
      var config = { layers: [lay] }
      //初始化地图对象
      map = new T.Map("mapDiv", config)
      //设置显示地图的中心点和级别
      map.centerAndZoom(new T.LngLat(108.946465, 34.383504), zoom)
      //创建缩放平移控件对象
      let control = new T.Control.Zoom();
      //添加缩放平移控件
      map.addControl(control);
      //允许鼠标滚轮缩放地图
      map.enableScrollWheelZoom()
      this.add(map)
      // this.addPolygon(map) // 添加
      this.addBorder(map) // 不能添加铁路 // 添加行政边界成功
      this.addMarker(map)
    },
    icon_select (_power) { // 这些图片要放在public中
      return new T.Icon({
        iconUrl: "../sign/home-cao.png",
        iconSize: new T.Point(29, 47),
        iconAnchor: new T.Point(15, 40)
      })
    },
    addMarker (map) { // 标注
      // var iconA = new T.Icon({
      //   iconUrl: "http://api.tianditu.gov.cn/img/map/markerA.png",
      //   iconSize: new T.Point(19, 27),
      //   iconAnchor: new T.Point(10, 25)
      // })
      //向地图上添加线
      const points = [];

      for (let pos in this.positions) {
        let { capital, lat, lon, power } = positions[pos]
        let point = new T.LngLat(lat, lon)
        points.push(point)
        let marker = new T.Marker(point, {
          icon: new T.Icon({
            iconUrl: icons[power],
            iconSize: new T.Point(29, 47),
            iconAnchor: new T.Point(15, 40)
          })
        })
        //向地图上添加圆
        var circle = new T.Circle(point, 5000, {
          color: "blue", weight: 1, opacity: 0.5,
          fillColor: "red", fillOpacity: 0, lineStyle: "line"
        });
        map.addOverLay(circle)

        marker.addEventListener('click', ({ type, target, lnglat, containerPoint }) => {
          this.$refs.index.init(pos, positions[pos])
        })
        map.addOverLay(marker)
      }
      let line = new T.Polyline(points)
      console.log('线上的点', points)
      map.addOverLay(line)
    },
    add (map) { // 喜大普奔:添加水系成功
      // http://tdt.fuzhou.gov.cn/serviceaccess/wmts/Vector2012CGCS2000?service=WMTS&request=GetCapabilities
      // http://t1.tianditu.gov.cn/cta_w/wmts?service=WMTS&request=GetCapabilities&tk=6b70c485070aaf4ebb89cac857d2a549
      // var imageURL = "http://t1.tianditu.gov.cn/cta_w/wmts?" +
      //   "SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cta&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles" +
      //   "&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=6b70c485070aaf4ebb89cac857d2a549";
      var imageURL = "http://t0.tianditu.gov.cn/wat_w/wmts?" +
        "SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=wat&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles" +
        "&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=6b70c485070aaf4ebb89cac857d2a549";
      //创建自定义图层对象
      var lay = new T.TileLayer(imageURL, { minZoom: 1, maxZoom: 18 });
      //将图层增加到地图上
      map.addLayer(lay);
    },
    addBorder (map) { // 喜大普奔:添加政治边界成功
      var imageURL = "http://t0.tianditu.gov.cn/tbo_w/wmts?" +
        "SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=tbo&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles" +
        "&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=6b70c485070aaf4ebb89cac857d2a549";
      //创建自定义图层对象
      var lay = new T.TileLayer(imageURL, { minZoom: 1, maxZoom: 18 });
      //将图层增加到地图上
      map.addLayer(lay);
    },
    addLabel (map) {
      var latlng = new T.LngLat(112.45195, 34.62569);
      var label = new T.Label({
        text: "洛阳",
        position: latlng,
        offset: new T.Point(-9, 0)
      });
      //创建地图文本对象
      map.addOverLay(label);
    },
    addPolygon (map) { // 添加面
      var points = [];
      points.push(new T.LngLat(108.862232, 34.225707));
      points.push(new T.LngLat(108.862232, 34.275707));
      points.push(new T.LngLat(109.004183, 34.275707)); // 以此类推 
      points.push(new T.LngLat(109.004183, 34.322468)); // 这是右边第一个点
      points.push(new T.LngLat(108.913468, 34.322468)); // 这是左边第一个点
      points.push(new T.LngLat(108.913468, 34.275707)); // 
      points.push(new T.LngLat(109.052232, 34.275707));
      points.push(new T.LngLat(109.052232, 34.225707));
      //创建面对象
      var polygon = new T.Polygon(points, {
        color: "blue", weight: 1, opacity: 0.5, fillColor: "", fillOpacity: 0.5
      });
      //向地图上添加面
      map.addOverLay(polygon);
    },
    addPng (map) {
      //创建图片对象
      var icon = new T.Icon({
        iconUrl: "http://api.tianditu.gov.cn/img/map/markerA.png",
        iconSize: new T.Point(19, 27),
        iconAnchor: new T.Point(10, 25)
      });
      //向地图上添加自定义标注
      var marker = new T.Marker(new T.LngLat(116.411794, 39.9068), { icon: icon });
      map.addOverLay(marker);
    },
  }
}
</script>
<style lang='less' scoped>
body,
html {
  width: 100%;
  height: 100%;
  margin: 0;
  font-family: "Microsoft YaHei";
}
#mapDiv {
  width: 100%;
  height: 800px;
}
#mapDiv img {
  max-width: none;
}
// mapDiv为网页中的地图的id
</style>