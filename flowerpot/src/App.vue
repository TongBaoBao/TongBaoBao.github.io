<template>
  <div id="app">
   <div class="pure-menu pure-menu-horizontal">
    <a class="pure-menu-heading" @click="goHomepage()">智能花盆</a>
    <ul class="pure-menu-list">
      <li class="pure-menu-item">
      <a class="pure-menu-link" @click="goHomepage()">首页</a>
      </li>
      <li class="pure-menu-item"><router-link to="/waterpage"  class="pure-menu-link">浇水控制</router-link></li>
      <li class="pure-menu-item"><router-link to="/planpage"  class="pure-menu-link">培养计划</router-link></li>
      <li class="pure-menu-item"><router-link to="#"  class="pure-menu-link"><span class="alert"></span></router-link></li>
    </ul>
  </div>

  <router-view></router-view>

  <div class="footer l-box fixed">
    <p>
      <a href="#">Try now</a> 智能花盆
    </p>
  </div>


</div>
</template>

<script>
  export default {
    name: 'app',
    data(){
      return {
      }
    },
    methods:{
      goHomepage:function(){
        //跳转到主页页面必须刷新一次
        this.$router.push({path:'/'})
        window.location.reload();
      }
    }
  }
</script>

<style scoped>
  .alert{
    background-image: url(./assets/bell_23.275471698113px_1179205_easyicon.net.png);
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
  }
  .pure-menu-item a{
   line-height: 1.5rem;
   height: 1.5rem;
 }
</style>