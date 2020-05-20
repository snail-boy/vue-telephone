<template>
  <div>
    <vue-telephone
            v-model="telephoneNumber"
            :isMask="true"
            :mask="mask"
            opacity="0.05"
            @cancel="cancel"
            @handleScale="handleScale"
    />
    <mail-list :telephoneNumber="telephoneNumber" />
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
// import VueTelephone from './vue-telephone';
import MailList from "./mailList";
export default {
  components: {MailList },
  data () {
    return {
      mask: false,
      telephoneNumber: ''
    }
  },
  watch: {
    telephoneNumber(v) {
      console.log(v, 'v')
    }
  },
  methods: {
    cancel (flag) {
      this.mask = flag
    },
    handleClick () {
      this.mask = true
    },
    handleScale() {
      alert('处理扫码')
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
  z-index: 20;
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
