import Vue from 'vue'
import {set,get}  from '../assets/cookieUtil.js'

Promise.prototype.finally = function (callback) {
  return this.then(
    value => Promise.resolve(callback()).then(() => value),
    reason => Promise.resolve(callback()).then(() => {
      throw reason
    })
    )
}

const plans = {
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

export default {
  getPlan ({commit}) {
    console.log('vvv')
    return Vue.http.get('http://localhost:3000/api/getPlan',{}).then(
      function(response){
        if (response.body.state=='1') {
          var data = response.body.data;
          console.log(data['0'])
          set('id',data['0']._id);
          commit('SET_HumPlan',data['0'].humvalue);
          commit('SET_IllPlan',data['0'].illvalue);
          commit('SET_TpmPlan',data['0'].tpmvalue);
          commit('SET_Plant',data['0'].plantype);
        }else{
        }  
      }, function(response){
        console.error("dddddddd");
      });
  },
  getWaterCtrType ({commit}) {
    return Vue.http.get('http://localhost:3000/api/getWaterType',{}).then(
      function(response){
        if (response.body.state=='1') {
          var data = response.body.data;
          console.log(data['0'])
          set('waterid',data['0']._id);
          commit('SET_WaterCtrType',data['0'].type);
        }else{
        }  
      }, function(response){
        console.error("dddddddd");
      });
  },
  setWaterCtrType ({commit}, value ) {
    return Vue.http.post('http://localhost:3000/api/setWaterType',{'id':get('waterid'),'type':value}).then(
      function(response){
        if (response.body.state=='1') {
          commit('SET_WaterCtrType',value);
          set('waterCtrType',value);
        }else{
        }  
      }, function(response){
        console.error("dddddddd");
      });
  },
  setHumPlan ({commit}, value ) {
    return Vue.http.post('http://localhost:3000/api/setPlan',{'id':get('id'),'key':'1','humvalue':value}).then(
      function(response){
        if (response.body.state=='1') {
          commit('SET_HumPlan',value);
          set('humPlan',value);
        }else{
        }  
      }, function(response){
        console.error("dddddddd");
      });
  },
  setIllPlan ({commit}, value ) {
    return Vue.http.post('http://localhost:3000/api/setPlan',{'id':get('id'),'key':'2','illvalue':value}).then(
      function(response){
        if (response.body.state=='1') {
          commit('SET_IllPlan',value);
          set('illPlan',value);
        }else{
        }  
      }, function(response){
        console.error("dddddddd");
      });
  },
  setTpmPlan ({commit}, value ) {
    return Vue.http.post('http://localhost:3000/api/setPlan',{'id':get('id'),'key':'3','tpmvalue':value}).then(
      function(response){
        if (response.body.state=='1') {
          commit('SET_TpmPlan',value);
          set('tpmPlan',value);
        }else{
        }  
      }, function(response){
        console.error("dddddddd");
      });
  },
  setWarning ({commit}, value ) {
    commit('SET_Warning',value);
    set('warning',value);
  },
  setPlant ({commit}, value ) {
    return Vue.http.post('http://localhost:3000/api/setPlan',{'id':get('id'),'key':'0','plantype':value,'tpmvalue':plans[value].tpmValue,'humvalue':plans[value].humValue,'illvalue':plans[value].illValue}).then(
      function(response){
        if (response.body.state=='1') {
          console.log(plans[value])
          commit('SET_TpmPlan',plans[value].tpmValue);
          set('tpmPlan',plans[value].tpmValue);
          commit('SET_Plant',value);
          set('plant',value);
          commit('SET_IllPlan',plans[value].illValue);
          set('illPlan',plans[value].illValue);
          commit('SET_HumPlan',plans[value].humValue);
          set('humPlan',plans[value].humValue);
        }else{
        }  
      }, function(response){
        console.error("dddddddd");
      });
  }
}