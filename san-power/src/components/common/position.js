/*
 * @Author: 高腾
 * @Description: 
 * @Date: 2020-06-07 17:34:16
 */
export default {
  '陈仓': {// 107.3717,34.35726
    power: '刘备', // 君主
    capital: true, // 长安作为刘备的都城
    city_type: 'ferry', // ferry:渡口, gate:关口
    lat: '107.3717',// 经度(东经)
    lon: '34.35726', // 纬度(北纬)
    pop: '1000000', // 人口:population
    gold: '1000000', // 金币
    prepare: '1000', //prepare:预备兵
    defend: '999', // 防御
    governor: '乐进', // 州牧
    advisor: '荀攸', // 军师
    // iconUrl:'',
    lead: { // 部下
      '关羽': {
        name: '关羽',
        position: '左将军',
        sign: 'general',//武将 civil:幕僚
        force: 100, // 武力
        brain: 95, // 智力
        command: {
          cavalry: 200, // 骑兵
          infantry: 300 // 步兵
        }
      },
      '乐进': {
        name: '乐进',//为了生成数组
        position: '五品中郎将',
        sign: 'general',//武将 civil:幕僚|general:武将
        force: 90, // 武力
        brain: 85, // 智力
        command: { // 统率
          cavalry: 200, // 骑兵
          infantry: 300 // 步兵
        }
      },
      '荀攸': {
        name: '荀攸',//为了生成数组
        position: '三品中纳言',
        sign: 'civil',//武将 civil:幕僚|general:武将
        force: 50, // 武力
        brain: 95, // 智力
        command: { // 统率
          cavalry: 500, // 骑兵
          infantry: 300 // 步兵
        }
      },
    }
  },
  '长安': {
    power: '刘备', // 君主
    capital: true, // 长安作为刘备的都城
    city_type: 'ferry', // ferry:渡口, gate:关口
    lat: '108.913468',// 经度(东经)
    lon: '34.275707', // 纬度(北纬)
    pop: '1000000', // 人口:population
    gold: '1000000', // 金币
    prepare: '1000', //prepare:预备兵
    defend: '999', // 防御
    governor: '乐进', // 州牧
    advisor: '荀攸', // 军师
    // iconUrl:'',
    lead: { // 部下
      '关羽': {
        name: '关羽',
        position: '左将军',
        sign: 'general',//武将 civil:幕僚
        force: 100, // 武力
        brain: 95, // 智力
        command: {
          cavalry: 200, // 骑兵
          infantry: 300 // 步兵
        }
      },
      '乐进': {
        name: '乐进',//为了生成数组
        position: '五品中郎将',
        sign: 'general',//武将 civil:幕僚|general:武将
        force: 90, // 武力
        brain: 85, // 智力
        command: { // 统率
          cavalry: 200, // 骑兵
          infantry: 300 // 步兵
        }
      },
      '荀攸': {
        name: '荀攸',//为了生成数组
        position: '三品中纳言',
        sign: 'civil',//武将 civil:幕僚|general:武将
        force: 50, // 武力
        brain: 95, // 智力
        command: { // 统率
          cavalry: 500, // 骑兵
          infantry: 300 // 步兵
        }
      },
    }
  },
  '潼关': { //110.289975,34.613638
    power: '刘备', // 君主
    capital: false, // 长安作为刘备的都城
    city_type: 'gate', // ferry:渡口, gate:关口
    lat: '110.289975',// 经度(东经)
    lon: '34.613638', // 纬度(北纬)
    pop: '1000000', // 人口:population
    gold: '1000000', // 金币
    prepare: '1000', //prepare:预备兵
    defend: '999', // 防御
    governor: '曹仁', // 州牧
    advisor: '曹仁', // 军师
    // iconUrl:'',
    lead: { // 部下
      '曹仁': {
        name: '曹仁',
        position: '左骁卫大将军',
        sign: 'general',//武将 civil:幕僚
        force: 100, // 武力
        brain: 95, // 智力
        command: {
          cavalry: 200, // 骑兵
          infantry: 300 // 步兵
        }
      },
    }
  },
  '弘农': { //110.914908,34.643816
    power: '曹操', // 君主
    capital: false, // 长安作为刘备的都城
    city_type: 'ferry', // ferry:渡口, gate:关口
    lat: '110.914908',// 经度(东经)
    lon: '34.643816', // 纬度(北纬)
    pop: '1000000', // 人口:population
    gold: '1000000', // 金币
    prepare: '1000', //prepare:预备兵
    defend: '999', // 防御
    governor: '赵云', // 州牧
    advisor: '赵云', // 军师
    // iconUrl:'',
    lead: { // 部下
      '赵云': {
        name: '赵云',
        position: '前将军',
        sign: 'general',//武将 civil:幕僚
        force: 100, // 武力
        brain: 95, // 智力
        command: {
          cavalry: 200, // 骑兵
          infantry: 300 // 步兵
        }
      },
    }
  },
  '洛阳': {
    power: '曹操',
    capital: true,
    city_type: 'ferry', // ferry:渡口, gate:关口
    lat: '112.45195',// 经度(东经)
    lon: '34.62569', // 纬度(北纬),
    pop: '1000000', // 人口:population
    gold: '1000000', // 金币
    prepare: '1000', //prepare:预备兵
    defend: '999', // 防御
    governor: '夏侯', // 州牧
    advisor: '夏侯', // 军师
    lead: { // 
      '典韦': {
        name: '典韦',
        position: '左骁卫大将军',
        sign: 'general',//武将 civil:幕僚
        force: 100, // 武力
        brain: 95, // 智力
        command: {
          cavalry: 200, // 骑兵
          infantry: 300 // 步兵
        }
      },
      '夏侯': {
        name: '夏侯',
        position: '左骁卫大将军',
        sign: 'general',//武将 civil:幕僚
        force: 100, // 武力
        brain: 95, // 智力
        command: {
          cavalry: 200, // 骑兵
          infantry: 300 // 步兵
        }
      },
    }
  },
  '龙亭': { // 114.317108,34.807604
    power: '曹操',
    capital: true, // 长安作为刘备的都城
    city_type: 'ferry', // ferry:渡口, gate:关口
    lat: '114.317108',// 经度(东经)
    lon: '34.807604', // 纬度(北纬),
    pop: '1000000', // 人口:population
    gold: '1000000', // 金币
    prepare: '1000', //prepare:预备兵
    defend: '999', // 防御
    governor: '乐进', // 州牧
    advisor: '乐进', // 军师
    lead: { // 
      '乐进': {
        name: '乐进',
        position: '左骁卫大将军',
        sign: 'general',//武将 civil:幕僚
        force: 100, // 武力
        brain: 95, // 智力
        command: {
          cavalry: 200, // 骑兵
          infantry: 300 // 步兵
        }
      },
      '张辽': {
        name: '张辽',
        position: '左骁卫大将军',
        sign: 'general',//武将 civil:幕僚
        force: 100, // 武力
        brain: 95, // 智力
        command: {
          cavalry: 200, // 骑兵
          infantry: 300 // 步兵
        }
      },
    }
  },
}
export const icons = {
  // export default {
  '曹操': '../sign/home-cao.png',
  '刘备': '../sign/home-liu.png',
  '孙策': '../sign/home-sun.png',
  // }
}