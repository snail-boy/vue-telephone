<template>
  <div class="vue-telephone" @click="handleCancel">
    <div :class="['mask-box', { mask: mask }]"></div>
    <div class="content">
      <div class="input-box"></div>
      <div class="number-box">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>*</li>
          <li>0</li>
          <li>#</li>
        </ul>
      </div>
      <ul class="btn-box">
        <li>

        </li>
        <li>
          <svg-icon class-name="search" icon-class="search" />
          <!--          <img src="@/assets/telephone.svg" />-->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueTelephone',
  props: {
    mask: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleCancel () {
      return false;
    }
  }
}
</script>

<style scoped lang="scss">
.vue-telephone {
  width: 100%;
  height: 100%;
}

.mask-box {
  position: fixed;
  _position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  transition: all 0.3s;
}
.mask {
  background: rgba(0, 0, 0, 0.5);
  -moz-opacity: 0.5;
  filter: alpha(opacity=50);
  z-index: 3;
}
.content {
  .number-box {
    ul {
      display: flex;
      justify-content: space-around;
      align-content: center;
      list-style: none;
      flex-wrap: wrap;
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

  }
}
</style>
