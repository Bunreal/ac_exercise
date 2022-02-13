<template>
  <div id="header">
    <div id="navBlock">
      <ul>
        <li>男款</li>
        <li>女款</li>
        <li>最新消息</li>
        <li>客製商品</li>
        <li>聯絡我們</li>
      </ul>
    </div>
    <div id="logo">
      <img :src="LogoUrl">
    </div>
    <div id="helpBlock">
      <img :src="Icon1">
      <img :src="Icon2">
      <img :src="Icon3">
    </div>
  </div>
</template>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  ul,ol,li {
    list-style: none;
  }

  #header {
    display: flex;
    justify-content: center;
    padding-top: 15px;
  }
  #navBlock, #helpBlock {
    flex: 1;
    justify-content: space-between;
  }
  #logo {
    flex: none
  }
  #navBlock > ul{
    display: flex;
  }
  #navBlock li {
    margin-right: 30px;
  }
  #logo {
    position: relative;
  }
  #logo > img {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 170px;
    height: 30px;
  }
  #helpBlock {
    display: flex;
    justify-content: flex-end;
  }
  #helpBlock > img {
    width: 24px;
    height: 24px;
    margin-left: 30px;
  }
</style>

<script>
import LogoUrl from './../images/Logo@2x.png'
import Icon1 from './../images/icon@2x_1.png'
import Icon2 from './../images/icon@2x_2.png'
import Icon3 from './../images/icon@2x_3.png'


export default {
  data(){
    return{
      "LogoUrl": LogoUrl,
      "Icon1": Icon1,
      "Icon2": Icon2,
      "Icon3": Icon3
    }
  }
}
</script>