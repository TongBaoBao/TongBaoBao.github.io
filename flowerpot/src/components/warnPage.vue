<template>
  <div class="warnpage">
    <div class="pure-u-1 content">
      <div class="warning" v-if="warning.length==0">
        <span>没有报警</span>
      </div>
      <div v-for="e in warning" class="warning">
        <span class="pure-u-md-1-4">{{e.title}}</span>
        <span class="pure-u-md-1-4">{{e.content}}</span> 
        <span class="pure-u-md-1-4">{{e.time|toDateTime}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import { get,unset}  from '../assets/cookieUtil.js'
  export default {
    name: 'warnpage',
    data(){
      return {
      }
    },
    computed: mapState(['warning','humPlan','illPlan','tpmPlan']),
    created(){
        //开启监控
        window.setTimeout(this.warn,5000);
      },
      methods:{
        warn:function(){
          var _self = this;
          var api = new OneNetApi('N0gT8l3CJq3=33JGETmy0khYrq0=');
          api.getDataStreams(9970922).done(function(data){
            console.log('api调用完成，服务器返回data为：', data);
            if (data.errno == '0') {
            //温度报警
            if (_self.tpmPlan=='') {
              //如果未设置阈值则不进行检测
            } else {
              var tpms = _self.tpmPlan.split('-');

              var tpm = data.data['6'].current_value;
              if (tpm < tpms[0]) {
                console.log(tpms[0])
                _self.warning.push({'title':'温度报警','content':'温度过低','time':Date()})
              } else if (tpm > tpms[1]) {
                _self.warning.push({'title':'温度报警','content':'温度过高','time':Date()})
              }
            }

            //湿度报警
            if (_self.humPlan) {
              var hum = data.data['4'].current_value;
              if (_self.humPlan == '0') {
                if (hum>90) {
                  _self.warning.push({'title':'湿度报警','content':'湿度过大','time':Date()})
                } else if (hum<70){
                  _self.warning.push({'title':'湿度报警','content':'过干','time':Date()})
                }
              } else if (_self.humPlan == '1') {
                if (hum<50) {
                  _self.warning.push({'title':'湿度报警','content':'过干','time':Date()})
                } else if (hum>80) {
                  _self.warning.push({'title':'湿度报警','content':'湿度过大','time':Date()})
                }
              } else if(_self.humPlan == '2'){
                if (hum<40) {
                  _self.warning.push({'title':'湿度报警','content':'过干','time':Date()})
                } else if (hum>60) {
                  _self.warning.push({'title':'湿度报警','content':'湿度过大','time':Date()})
                }
              }
            };

            //光照强度报警
            if (_self.illPlan) {
              var ill = data.data['5'].current_value;
              if (_self.illPlan == '0') {
                if (ill>5500) {
                  _self.warning.push({'title':'光照强度报警','content':'过强','time':Date()})
                } else if (ill<500) {};{
                  _self.warning.push({'title':'光照强度报警','content':'过弱','time':Date()})
                }
              } else if (_self.illPlan == '1') {
                if (ill>10000) {
                  _self.warning.push({'title':'光照强度报警','content':'过强','time':Date()})
                } else if (ill<500) {
                  _self.warning.push({'title':'光照强度报警','content':'过弱','time':Date()})
                }
              } else if (_self.illPlan == '2'){

                if (ill>100000) {
                  _self.warning.push({'title':'光照强度报警','content':'过强','time':Date()})
                } else if (ill<2000) {
                  _self.warning.push({'title':'光照强度报警','content':'过弱','time':Date()})
                }
              }
            };
          };
        });
}
}
}
</script>

<style scoped>
  .content{
    min-height: 600px;
  }
  .warning{
   text-align: center;
   border: 1px solid #ccc8c8;
   height: 40px;
   width: 90%;
   line-height: 40px;
   margin: 0 auto;
   margin-top: 20px;
   border-radius: 5px;
   background-color: whitesmoke;
   transition:background-color linear 0.3s;
 }
 .warning:hover {
  background-color: #f1b1b1;
}
.warning span{
  margin-right: 10px
}
</style>