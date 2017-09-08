<template>
  <div class="homePage">
    <div class="banner" style="height:600px;margin-bottom:0">
      <h1 class="banner-head">
        智能花盆.<br>
        数据监控中...
      </h1>
      <div class="pure-u-md-1-3 forecast">
       <iframe name="weather_inc" src="http://i.tianqi.com/index.php?c=code&id=48" width="300" height="45" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
     </div>
     <div class="pure-u-1">
      <div class="j_10086_iotapp pure-u-md-1-3" data-host="https://open.iot.10086.cn" data-view="6f8b9ad6cbb7715696e3933af75bd788" data-pid="91851" data-appid="21382" style="height:300px;width:320px;margin-left: 25px;"></div>
      <div class="j_10086_iotapp pure-u-md-1-3" data-host="https://open.iot.10086.cn" data-view="7fa71a55d7c52e6ec09e7dcf141f3556" data-pid="91851" data-appid="21383" style="height:300px;width:320px;margin-left: 25px;"></div>
      <div class="j_10086_iotapp pure-u-md-1-3" data-host="https://open.iot.10086.cn" data-view="563d15ef394ad9519fdf8fb85cf9bcf2" data-pid="91851" data-appid="21384" style="height:300px;width:320px;margin-left: 25px;"></div>
    </div>
  </div>
</div>
</template>

<script>
  //import echarts from "../../dist/echarts.min.js"
  export default {
    name: 'homePage',
    data(){
      return {
      }
    },
    created(){
    },
    mounted(){
      var iframe = document.getElementById('test');

      window.setInterval(this.getData,5000)
      // var body = iframe.contentWindow.document.body;
      // body.style.backgroundColor = 'red';
    },
    methods:{
      getData:function(){
        var api = new OneNetApi('N0gT8l3CJq3=33JGETmy0khYrq0=');
        api.sendCommand(9970922, 'get_data').done(function(data){
          console.log('api调用完成，服务器返回data为：', data);
        });
      }
    }
  }
</script>

<style scoped>
  .banner-head{
    display: block;
    margin-bottom: 50px;
  }
  .skin-blue{
    background-color: rgba(255, 255, 255, 0.69);
  }
  .forecast{
    background-color: rgba(235, 229, 229, 0.61);
    margin-bottom: 30px;
  }
</style>