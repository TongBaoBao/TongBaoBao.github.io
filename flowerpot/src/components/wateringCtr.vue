<template>
  <div class="wateringCtr">
   <div class="pure-u-1">
    <div class="l-box">
      <h3 class="information-head">当前浇水方式</h3>
      <p>
        {{waterType[type]}}
      </p>
    </div>
  </div>
 <!--  <div class="pure-u-1 pure-u-md-1-2">
    <div class="l-box">
      <h3 class="information-head">自动浇水</h3>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  </div> -->
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
        type:'3'
      }
    },
    methods:{
      watering:function(value){
        this.$toast('设置成功');
        this.type = value
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
</style>