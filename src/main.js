import { createApp } from 'vue'
import App from './App.vue'

import * as RongIMLib from '@rongcloud/imlib-next'

// 应用初始化，请务必保证此过程只被执行一次
RongIMLib.init({ appkey: 'bmdehs6pbf1xs' });
// 添加事件监听
const Events = RongIMLib.Events

RongIMLib.addEventListener(Events.CONNECTING, () => {
    console.log('正在连接服务器')
})

RongIMLib.addEventListener(Events.CONNECTED, () => {
    console.log('已经连接到服务器')
})

RongIMLib.addEventListener(Events.MESSAGES, (evt) => {
    console.log(evt.messages)
})

RongIMLib.connect('fyhssMkB7/nrfntu/xTUSUXiuCp5diV5@pryy.cn.rongnav.com;pryy.cn.rongcfg.com').then(res => {
  if (res.code === RongIMLib.ErrorCode.SUCCESS) {
    console.log('连接成功, 连接用户 id 为: ', res.data.userId);
  } else {
    console.warn('连接失败, code:', res.code)
  }
})

window.RCCppEngine ? console.log('当前运行环境是 electron'):console.log('当前运行环境是 web')
createApp(App).mount('#app')
