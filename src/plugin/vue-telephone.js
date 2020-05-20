
import VueTelephone from './vue-telephone.vue'
let vueTelephone = {}
vueTelephone.install = function (Vue) {
  Vue.component(VueTelephone.name, VueTelephone) // testPanel.name 组件的name属性
}
export default vueTelephone
