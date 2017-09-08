import Vue        from 'vue'
import Vuex       from 'vuex'
import actions    from './actions'
import mutations  from './mutations'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    waterCtrType:'3',
    humPlan:'',
    illPlan:'',
    tpmPlan:[],
    warning:[],
    plant:''
  },
  mutations,
  actions
})
export default store