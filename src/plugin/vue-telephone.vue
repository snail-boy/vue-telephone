<template>
  <div class="telephone-wrapper" @keyup.delete="keyUpDel">
    <div class="vue-telephone" @click="handleCancel">
      <div :class="['content', {'active-btn': mask}]"  @click.stop>
        <div class="input-wrapper">
          <label>
            <input ref="inputRef" v-model="NO" class="input" autofocus="autofocus" type="text" value="" placeholder="请输入号码" />
          </label>
        </div>
        <div class="number-box">
          <ul>
            <li v-for="item in number" :key="item" @click.stop="handleNumber(item)">
              {{item}}
            </li>
          </ul>
        </div>
        <ul class="btn-box flex-box">
          <li @click="handleCancel">
            <svg-icon className='icon' icon-class="bottom" />
          </li>
          <li @click.stop>
            <a :href="NO ? ('tel:'+ NO) : '/#'">
              <svg-icon className='icon' icon-class="number" />
            </a>
          </li>
          <li @click="handleScale">
            <svg-icon className='icon' icon-class="scale" />
          </li>
          <li class="close-icon-li" @click="handleDelete">
            <svg-icon className='close-icon' icon-class="close" />
          </li>
        </ul>
      </div>
      <div v-if="isMask" :class="['mask-box', { mask: mask }]" :style="{opacity: opacity}"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueTelephone',
  model: {
    // prop: 'parentProp',
    event: 'change'
  },
  props: {
    mask: {
      type: Boolean,
      default: false
    },
    isMask: {
      type: Boolean,
      default: false
    },
    opacity: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      NO: '',
      number: ['1','2','3','4','5','6','7','8','9',"*", '0', "#"]
    }
  },
  methods: {
    handleCancel () {
      if (this.mask) { // 只执行一次就够了
        this.$emit('cancel', false);
        this.NO = ''
      }
    },
    handleNumber(item) {
      this.NO += item;
      this.$emit('change', this.NO)
      this.$refs.inputRef.focus()
    },
    keyUpDel() {
      this.$emit('change', this.NO);
    },
    handleDelete() {
      if (this.NO.length > 0) {
        this.NO = this.NO.substring(0, this.NO.length-1);
        this.$emit('change', this.NO);
        this.$refs.inputRef.focus()
      }
    },
    handleScale() {
      this.$emit('handleScale')
    }
  }
}
</script>

<style scoped lang="scss">
.telephone-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.vue-telephone {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color: #C7C7C7;
    width:128px;
    height:25px;
    font-size:18px;
    font-family:PingFang SC;
    font-weight:400;
    line-height:25px;
    color:rgba(204,204,204,1);
    letter-spacing:12px;
    opacity:1;
  }
}

.mask-box {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  transition: all 0.3s;
  z-index: 1;
}
.mask {
  background: rgba(0, 0, 0, 0.5);
  opacity: 0.5;
  z-index: 1;
}
.content {
  width: 100%;
  height: 372px;
  position: absolute;
  bottom: -372px;
  left: 0;
  right: 0;
  transform: translateY(100px);
  transition: all .3s;
  z-index: 10;
  background: white;
  .input-wrapper {
    position: absolute;
    width: 200%;
    height: 400px;
    top: -100px;
    left: -50%;
    z-index: -1;
    border-radius: 100%;
    background: white;
    box-shadow:0px -3px 12px rgba(199,199,199,0.16);
    .input {
      position: absolute;
      top: 42px;
      left: 28%;
      display: block;
      width: 44%;
      margin: 0 auto;
      border: none;
      outline-style: none;
      height:25px;
      font-size:18px;
      font-family:PingFang SC;
      font-weight:400;
      line-height:25px;
      color:rgba(204,204,204,1);
      text-align: center;
    }
  }
  .number-box {
    /*position: absolute;*/
    /*left: 0;*/
    ul {
      display: flex;
      justify-content: space-around;
      align-content: center;
      flex-wrap: wrap;
      text-align: center;
      li {
        width: 33.33%;
        font-size: 30px;
        font-family: PingFang SC;
        font-weight: 400;
        line-height: 42px;
        color: rgba(102, 102, 102, 1);
        letter-spacing: 12px;
        opacity: 1;
        margin-bottom: 18px;
      }
    }
  }
  .btn-box {
    justify-content: space-evenly !important;
    .close-icon-li {
      line-height: 60px;
    }
    .icon {
      width: 70px;
      height: 70px;
    }
    .close-icon  {
      width: 28px;
      height: 20px;
    }
  }
}
.active-btn {
  transform: translateY(-372px);
  transition: all .3s;
}
</style>
