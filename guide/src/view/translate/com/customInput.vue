<!--
 * @Author: 高腾
 * @Description: 
 * @Date: 2020-12-19 11:05:17
-->
<template>
  <!-- <div><input type="checkbox" v-model=""></div> -->
  <div>
    <tr v-for="(item,inx) in list">
      <td>{{item.id}}</td>
      <td>{{item.name}}</td>
      <td ref="11111">
        <input type="checkbox"
               :id="item.id"
               :ref="item.id"
               :disabled="item.disabled"
               :checked="item.isAlert"
               @change="change(item)"
               @beforeunload="beforeunload(item)">
        <!-- v-model="item.isAlert" :checked="item.checked" class="switch"-->
        </input>
      </td>
    </tr>
  </div>
</template>

<script>
export default {
  name: 'customInput',
  data () {
    return {
      list: [
        { id: '111', name: 'aaa', isAlert: false, disabled: false },
        { id: '222', name: 'bbb', isAlert: false, disabled: false },
        { id: '333', name: 'ccc', isAlert: true, disabled: false },
        { id: '444', name: 'ddd', isAlert: true, disabled: false },
      ]
    }
  },
  methods: {
    beforeunload (item) {
      console.log(item)
    },
    async change (item) {
      // console.log(1, Object.assign({}, { isAlert: item.isAlert }))
      this.$refs[item.id][0].disabled = true
      let response = await this.apiSuccessed(item)
      if (response && response.status === 200) {
        item.isAlert = !item.isAlert
        document.getElementById(`${item.id}`).checked = item.isAlert
      } else {
        this.$refs[item.id][0].checked = item.isAlert // document.getElementById(`${item.id}`).checked = item.isAlert
      }
      this.$refs[item.id][0].disabled = false
      // console.log(2, Object.assign({}, { isAlert: item.isAlert }));
    },
    apiSuccessed (item) {
      return new Promise((resolve, reject) => {
        if (item.name === 'aaa') {
          setTimeout(() => {
            console.log('延迟了吗?3秒');
            resolve({
              status: 500
            })
          }, 3000)
        } else {
          setTimeout(() => {
            console.log('延迟了吗?3秒');
            resolve({
              status: 200
            })
          }, 3000)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.switch {
  outline: "none";
  appearance: none;
  -webkit-appearance: none;
  position: relative;
  width: 2.6rem;
  height: 1.52rem;
  border-radius: 50px;
  border: 1px solid #ccc;
  background-color: #ccc;
}
.switch::after {
  content: "";
  display: inline-block;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 0 2px #999;
  transition: left 0.1s linear;
  position: absolute;
  top: 0;
  left: 0;
}
.switch:checked {
  background-color: #32ba58;
}
.switch:checked::after {
  position: absolute;
  top: 0;
  /* left:1.2rem; */
  left: 50%;
}
</style>
