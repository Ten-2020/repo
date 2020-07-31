/*
 * @Author: 高腾
 * @Description: 复制到粘贴板
 * @Date: 2020-07-31 14:57:08
 */
import Vue from 'vue'
import Clipboard from 'clipboard'

function clipboardSuccess () {
  console.log('success')
  // Vue.prototype.$Message({
  // this.$Message({
  //   message: 'Copy successfully',
  //   type: 'success',
  //   duration: 1500
  // })
  Vue.prototype.$Notice.success({
    title: '复制成功',
  })
}

function clipboardError () {
  console.log('error')
  // Vue.prototype.$Message({
  // this.$Message({
  //   message: 'Copy failed',
  //   type: 'error'
  // })
  this.$Notice.success({
    title: 'error',
  })
}

export default function handleClipboard (text, event) {
  const clipboard = new Clipboard(event.target, {
    text: () => text
  })
  clipboard.on('success', () => {
    clipboardSuccess()
    clipboard.off('error')
    clipboard.off('success')
    clipboard.destroy()
  })
  clipboard.on('error', () => {
    clipboardError()
    clipboard.off('error')
    clipboard.off('success')
    clipboard.destroy()
  })
  clipboard.onClick(event)
}