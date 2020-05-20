<template>
  <div>
    <vue-telephone :mask="mask" @cancel="cancel" />
    <footer class="footer">
      <ul>
        <li @click="handleClick">首页</li>
        <li>通讯录</li>
        <li>报表</li>
      </ul>
    </footer>
  </div>
</template>

<script>
import VueTelephone from './vue-telephone';
export default {
  components: { VueTelephone },
  data () {
    return {
      mask: false
    }
  },
  methods: {
    cancel (msg) {
      console.log(msg)
      this.mask = msg
    },
    handleClick (str) {
      console.log(str)
      this.mask = true
    }
  }
}
</script>

<style scoped lang="scss">
.footer {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #2c3e50;
  color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  ul {
    display: flex;
    justify-content: space-around;
    align-content: center;
    li {
      list-style: none;
      &:active {
        background: white;
        color: black;
      }
    }
  }
}
</style>
