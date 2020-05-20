# vue-telephone


### 1， npm install vue-telephone --save

### 2， main.js中引入
import VueTelephone from './plugin/vue-telephone'
 Vue.use(VueTelephone)
 
###3， 组件中使用

 ```$xslt
 <vue-telephone
            v-model="telephoneNumber" // 自定义键盘数字
            :isMask="true" // 是否显示遮罩层
            :mask="mask" // 遮罩层显示隐藏，type: Boolean
            opacity="0.05" // 遮罩层背景透明度
            @cancel="cancel" // 键盘隐藏取消函数
            @handleScale="handleScale" // 扫描方法
    />
    
```
    
### github.io
[github.io](htttp://websmallrabbit.github.io)

[简书地址](https://www.jianshu.com/u/5c516e381a3a)
    
[技术公众号]：程序员蜗牛
