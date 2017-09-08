<template>
  <div class="wateringCtr">
   <div class="pure-u-1">
    <div class="l-box">
      <h3 class="information-head">当前浇水方式</h3>
      <p>
        {{waterType[type]}}
      </p>
      <div class="waterButton">
        <p>浇水开关</p>
        <div v-bind:class="buttonLeft" @click="waterOn()"></div>
        <div v-bind:class="buttonRight" @click="waterOff()"></div>
      </div>
    </div>
  </div> 
  <div class="l-content">
    <div class="pricing-tables pure-g">
      <div class="pure-u-1 pure-u-md-1-3">
        <div class="pricing-table pricing-table-free">
          <div class="pricing-table-header">
            <h2>Manual</h2>

            <span class="pricing-table-price">
              手动 <span>浇水</span>
            </span>
          </div>

          <ul class="pricing-table-list">
            <li class="waterIntro">
              我是手动浇水！<br>
              选了我以后我既不提醒你该浇水也不会自动浇水！<br>
              我就啥也不干！<br>
              我可能是个废花盆了！
            </li>
          </ul>
          <button class="button-choose pure-button" @click="watering(0)">Choose</button>
        </div>
      </div>

      <div class="pure-u-1 pure-u-md-1-3">
        <div class="pricing-table pricing-table-biz pricing-table-selected">
          <div class="pricing-table-header">
            <h2>Semi-automatic</h2>

            <span class="pricing-table-price">
              半自动 <span>浇水</span>
            </span>
          </div>

          <ul class="pricing-table-list">
            <li class="waterIntro">
              我是半自动浇水！<br>
              选了我之后我就提醒是否浇水，然后主人你自己选择是在这里远程浇水，还是用浇水壶浇水哈！<br>
              么么哒！
            </li>
          </ul>

          <button class="button-choose pure-button" @click="watering(1)">Choose</button>
        </div>
      </div>

      <div class="pure-u-1 pure-u-md-1-3">
        <div class="pricing-table pricing-table-enterprise">
          <div class="pricing-table-header">
            <h2>automatic</h2>

            <span class="pricing-table-price">
              自动 <span>浇水</span>
            </span>
          </div>

          <ul class="pricing-table-list">
            <li class="waterIntro">
              我是自动浇水！<br>
              选了我之后我就不需要向主人你汇报就自动浇水了哦！<br>
              相信我一定不会让小花渴死的嘻嘻！
            </li>
          </ul>

          <button class="button-choose pure-button" @click="watering(2)">Choose</button>
        </div>
      </div>
    </div> <!-- end pricing-tables -->

  </div> <!-- end l-content -->


</div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import { get,unset}  from '../assets/cookieUtil.js'
  export default {
    name: 'wateringCtr',
    data(){
      return {
        waterType:{
          '0':"手动浇水",
          '1':"半自动浇水",
          '2':"自动浇水",
          '3':"未设置浇水方式"
        },
        type:'3',
        buttonLeft:"button-left",
        buttonRight:"button-right-active"
      }
    },
    computed: mapState(['waterCtrType']),
    created(){
      if (this.waterCtrType != undefined) {
        this.type = this.waterCtrType
      };
    },
    methods:{
      watering:function(value){
        this.$toast('设置成功');
        this.type = value;
        this.$store.dispatch('setWaterCtrType',value)
        console.log(value)
      },
      waterOn:function(){
        var _self = this;
        var api = new OneNetApi('N0gT8l3CJq3=33JGETmy0khYrq0=');
        api.sendCommand(9970922, 'motor_on').done(function(data){
          console.log('api调用完成，服务器返回data为：', data);
          if (data.errno == '0') {
            _self.buttonLeft = "button-left-active";
            _self.buttonRight = "button-right";
          } else {
            _self.$toast(data.error);
            _self.buttonLeft = "button-left";
          }
        });
      },
      waterOff:function(){
        var _self = this;
        var api = new OneNetApi('N0gT8l3CJq3=33JGETmy0khYrq0=');
        api.sendCommand(9970922, 'motor_off').done(function(data){
          console.log('api调用完成，服务器返回data为：', data);
          if (data.errno == '0') {
            _self.buttonLeft = "button-left";
            _self.buttonRight = "button-right-active";
          } else {
            _self.$toast(data.error);
          } 
        });
      }
    }
  }
</script>

<style scoped>
  .l-content{
    margin-top: 10px;
  }
  .waterIntro{
    letter-spacing: 2px;
    line-height: 30px;
    padding: 10px 20px;
  }
  .waterButton{
    position: absolute;
    right: 30px;
    top: 70px;
  }
  .waterButton p {
    padding: 0;
    margin: 0;
    letter-spacing: 5px;
    width: 120px;
    text-align: center;
  }
  .button-left{
    display: inline-block;
    height: 60px;
    width: 56px;
    background: url(../assets/button-left.png) no-repeat;
    background-size:100% 100%;
  }
  .button-left-active,.button-left:hover{
    display: inline-block;
    height: 60px;
    width: 56px;
    background:url(../assets/button-left-active.png) no-repeat;
    background-size:100% 100%;
  }
  .button-right{
    display: inline-block;
    height: 60px;
    width: 56px;
    background: url(../assets/button-right.png) no-repeat;
    background-size:100% 100%;
  }
  .button-right-active,.button-right:hover{
    display: inline-block;
    height: 60px;
    width: 56px;
    background:url(../assets/button-right-active.png) no-repeat;
    background-size:100% 100%;
  }
</style>