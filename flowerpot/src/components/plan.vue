<template>
  <div class="plan">
    <div class="pure-u-1">
      <div class="l-box pure-u-md-1-2">
        <h2 class="information-head">当前培养计划</h2>
        <h3>你的植物 
          <span v-if="nowPlantType!==''">{{plans[nowPlantType].name}}</span>
        </h3>
        <p>
          湿度：
          <span v-if="humValue==''">未设置</span> 
          {{humType[humValue]}} 
          <span>|</span>
          光照：
          <span v-if="illValue==''">未设置</span> 
          {{illType[illValue]}}
          <span>|</span>
          温度：
          <span v-if="tpmValue==''">未设置</span> 
          <span v-if="tpmValue!=''">{{tpmValue}}</span> 
        </p>
      </div>
      <div class="l-box pure-u-md-1-3">
        <h2>设定植物类型</h2>
        <select class="plans" v-model="plantType">
          <option value="0">发财树</option>
          <option value="1">绿萝</option>
          <option value="2">紫背竹</option>
          <option value="3">巴西木</option>
          <option value="4">其他</option>
        </select>
        <button class="btn" @click="setPlantType()">设置</button>
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
              <input type="number" name="" id="" class="tepValue pure-u-md-1-3" v-model.number="tpmLevel1">
              <span>℃</span>  
              <span class="pure-u-1">到</span>
              <input type="number" name="" id="" class="tepValue pure-u-md-1-3"  v-model.number="tpmLevel2">
              <span>℃</span>  
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
  import {mapState, mapActions} from 'vuex'
  import { get,unset}  from '../assets/cookieUtil.js'
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
        tpmValue:'',
        humType:{
          '0':'喜湿',
          '1':'一般',
          '2':'喜干'
        },
        illType:{
          '0':'喜阴',
          '1':'一般',
          '2':'喜阳'
        },
        plantType:"",
        nowPlantType:"",
        plans:{
          '0':{
            'name':'发财树',
            'humValue':'0',
            'illValue':'1',
            'tpmValue':'15-30'
          },
          '1':{
            'name':'绿萝',
            'humValue':'0',
            'illValue':'0',
            'tpmValue':'18-22'
          },
          '2':{
            'name':'紫青竹',
            'humValue':'0',
            'illValue':'0',
            'tpmValue':'20-35'
          },
          '3':{
            'name':'巴西木',
            'humValue':'2',
            'illValue':'0',
            'tpmValue':'16-26'
          },
          '4':{
            'name':'其他',
            'humValue':'',
            'illValue':'',
            'tpmValue':''
          }
        }
      }
    },
    computed: mapState(['humPlan','illPlan','tpmPlan','plant']),
    created(){
     if (this.humPlan) {
      this.humValue = this.humPlan;
    }
    if (this.illPlan) {
      this.illValue = this.illPlan;
    }
    if (this.tpmPlan) {
      this.tpmValue = this.tpmPlan;
    }
    if (this.plant) {
      this.nowPlantType = this.plant;
    };
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
        this.humValue = this.humLevel;
        this.$store.dispatch('setHumPlan',this.humLevel)
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
        this.illValue = this.illLevel;
        this.$store.dispatch('setIllPlan',this.illLevel)
        this.$toast("光照强度设置成功");
        this.illLevel = '';
      }
    },
    chooseTpmValue:function(){
      if (this.tpmLevel1==''||this.tpmLevel2=='') {
        this.$toast("请设置温度数值");
      } else {
        if (this.tpmLevel1) {};
        this.tpmValue = this.tpmLevel1 + '-' + this.tpmLevel2;
        this.$store.dispatch('setTpmPlan',this.tpmValue);
        this.tpmLevel1 = '';
        this.tpmLevel2 = '';
      }
    },
    setPlantType:function(){
      if (this.plantType) {
        this.$toast("植物类型设置成功")
        this.nowPlantType = this.plantType;
        this.$store.dispatch('setPlant',this.plantType);
        this.humValue = this.plans[this.plantType].humValue;
        this.illValue = this.plans[this.plantType].illValue;
        this.tpmValue = this.plans[this.plantType].tpmValue;
      };
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
    line-height: 30px;
  }
  .tmp > input{
    vertical-align: middle;
  }
  .btn {
    margin-left: 30px;
    height: 30px;
    width: 80px;
    background-color: #2c4985;
    color: white;
    border: none;
    border-radius: 5px;
    outline: none;
  }
  .btn:hover{
    background-color: gray;
  }
  .plans{
    width: 150px;
    height: 25px;
    border: 1px solid gray;
  }
</style>