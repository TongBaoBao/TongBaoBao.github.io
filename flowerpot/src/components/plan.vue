<template>
  <div class="plan">
    <div class="pure-u-1">
      <div class="l-box">
        <h3 class="information-head">当前培养计划</h3>
        <p v-if="humValue==''&&illValue==''&&tpmValue==''">未设置培养计划</p>
        <p>
          {{humValue}} 
          <span v-if="illValue!=''&&humValue!=''">|</span>
          {{illValue}}
          <span v-if="illValue!=''&&tpmValue!=''">|</span>
          {{tpmValue}}
        </p>
      </div>
    </div>
    <div class="l-content">
      <div class="pricing-tables pure-g">
        <div class="pure-u-1 pure-u-md-1-3">
          <div class="pricing-table pricing-table-biz pricing-table-selected">
            <div class="pricing-table-header">
              <h2>Humidity</h2>

              <span class="pricing-table-price">
                湿度 <span>土壤湿度计划</span>
              </span>
            </div>

            <ul class="pricing-table-list">
              <li @click="addHumValue(0)"  v-bind:class="humLevel=='0'?'check':''">
               <span>喜湿</span>
               <span v-if="humLevel=='0'" class="gou">√</span>
             </li>
             <li @click="addHumValue(1)" v-bind:class="humLevel=='1'?'check':''">
              <span>一般</span>
              <span v-if="humLevel=='1'" class="gou">√</span>
            </li>
            <li @click="addHumValue(2)" v-bind:class="humLevel=='2'?'check':''">
              <span>喜干</span>
              <span v-if="humLevel=='2'" class="gou">√</span>
            </li>
          </ul>

          <button class="button-choose pure-button" @click="chooseHumValue()">确定</button>
        </div>
      </div>

      <div class="pure-u-1 pure-u-md-1-3">
        <div class="pricing-table  pricing-table-free">
          <div class="pricing-table-header">
            <h2>Illumination</h2>

            <span class="pricing-table-price">
              光照 <span>光照强度计划</span>
            </span>
          </div>

          <ul class="pricing-table-list">
            <li @click="addIllValue(0)"  v-bind:class="illLevel=='0'?'check':''">
              <span>喜阴</span>
              <span v-if="illLevel=='0'" class="gou">√</span>
            </li>
            <li @click="addIllValue(1)" v-bind:class="illLevel=='1'?'check':''">
              <span>一般</span>
              <span v-if="illLevel=='1'" class="gou">√</span>
            </li>
            <li @click="addIllValue(2)" v-bind:class="illLevel=='2'?'check':''">
              <span>喜阳</span>
              <span v-if="illLevel=='2'" class="gou">√</span>
            </li>
          </ul>

          <button class="button-choose pure-button" @click="chooseIllValue()">确定</button>
        </div>
      </div>

      <div class="pure-u-1 pure-u-md-1-3">
        <div class="pricing-table pricing-table-enterprise">
          <div class="pricing-table-header">
            <h2>Temperature</h2>

            <span class="pricing-table-price">
              温度 <span>温度计划</span>
            </span>
          </div>

          <ul class="pricing-table-list">
            <li class="tmp">
            <input type="text" name="" id="" class="tepValue pure-u-md-1-4" placeholder="不小于10" v-model="tpmLevel1">
              <span class="pure-u-md-1-4">到</span>
              <input type="text" name="" id="" class="tepValue pure-u-md-1-4"  v-model="tpmLevel2" placeholder="不大于50">
            </li>
          </ul>

          <button class="button-choose pure-button" @click="chooseTpmValue()">确定</button>
        </div>
      </div>
    </div> 
  </div>
</div>
</div>
</template>

<script>
  export default {
    name: 'plan',
    data(){
      return {
        humLevel:'',
        humValue:"",
        illLevel:'',
        illValue:"",
        tpmLevel1:'',
        tpmLevel2:'',
        tpmValue:''
      }
    },
    methods:{
      addHumValue:function(value){
        switch(value){
          case 0: 
          this.humLevel = '0'
          break;
          case 1:
          this.humLevel = '1'
          break;
          case 2:
          this.humLevel = '2'
          break;
        }
      },
      chooseHumValue:function(){
        if (this.humLevel=='') {
          this.$toast("请选择湿度模式")
        } else {
          this.humValue = this.humLevel=='0'?"湿度：喜湿":(this.humLevel=='1'?"湿度：一般":"湿度：喜干");
          this.$toast("湿度设置成功");
          this.humLevel = '';
        }
      },
      addIllValue:function(value){
        switch(value){
          case 0: 
          this.illLevel = '0'
          break;
          case 1:
          this.illLevel = '1'
          break;
          case 2:
          this.illLevel = '2'
          break;
        }
      },
      chooseIllValue:function(){
        if (this.illLevel=='') {
          this.$toast("请选择光照强度模式")
        } else {
          this.illValue = this.illLevel=='0'?"光照：喜阴":(this.illLevel=='1'?"光照：一般":"光照：喜阳");
          this.$toast("光照强度设置成功");
          this.illLevel = '';
        }
      },
      chooseTpmValue:function(){
        if (this.tpmLevel1==''||this.tpmLevel2=='') {
          this.$toast("请设置温度数值");
        } else {
          this.tpmValue = "温度：" + this.tpmLevel1 + '-' + this.tpmLevel2;
          this.tpmLevel1 = '';
          this.tpmLevel2 = '';
        }
      }
    }
  }
</script>

<style scoped>
  .l-content{
    margin-top: 30px;
  }
  .tepValue{
    display: inline-block;
  }
  .hum {
    display: inline-block;
    border: 1px solid gray;
  }
  li:hover{
    background-color: #dad4d4;
  }
  .gou{
    position: absolute;
    margin-left: 30px;
  }
  .check{
    background-color: #dad4d4;
  }
  .tmp{
    height: 100px;
    line-height: 100px;
  }
  .tmp > input{
    vertical-align: middle;
  }
</style>