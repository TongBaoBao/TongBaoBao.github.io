<template>
  <div class="homePage">
    <div class="banner" style="height:600px;margin-bottom:0">
      <h1 class="banner-head">
        智能花盆.<br>
        数据监控中...
      </h1>
      <div class="pure-u-1 pure-u-md-1-3">
       <div class="j_10086_iotapp" data-host="https://open.iot.10086.cn" data-view="e0f58143c31f8b75bd34966e67a35943" data-pid="91451" data-appid="20825" style="height:250px;width:400px;"></div>
     </div>
     <div class="pure-u-1 pure-u-md-1-3">
       <div class="j_10086_iotapp" data-host="https://open.iot.10086.cn" data-view="e0f58143c31f8b75bd34966e67a35943" data-pid="91451" data-appid="20825" style="height:250px;width:400px;"></div>
     </div>
     <div class="pure-u-1 pure-u-md-1-3">
       <div class="j_10086_iotapp" data-host="https://open.iot.10086.cn" data-view="e0f58143c31f8b75bd34966e67a35943" data-pid="91451" data-appid="20825" style="height:250px;width:400px;"></div>
     </div>
   </div>
   
    <!-- <div class="pure-u-1 pure-u-md-1-2" style="height:25rem;margin-bottom:1rem">
      <div id="HumPic" style="height:100%"></div>
    </div>
    <div class="pure-u-1 pure-u-md-1-2" style="height:25rem;margin-bottom:1rem">
      <div id="HumPic2" style="height:100%;"></div>
    </div>
    <div class="pure-u-1 pure-u-md-1-2" style="height:25rem;margin-bottom:1rem;">
      <div id="HumPic3" style="height:100%"></div>
    </div> -->
    <!-- <div class="pure-u-1 pure-u-md-1-2">
      <div class="l-box">
        <h3 class="information-head">24/7 customer support</h3>
        <p>
          Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div> -->

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
      // var api = new OneNetApi('uXIIcYS6ESXY7nP7WdaE3VqqbxI=');
      // api.getDataStreams(9749643).done(function(data){
      //   console.log('api调用完成，服务器返回data为：', data);
      // });  
},
mounted(){
  // this.pic1("HumPic","温度监控");
  // this.pic2("HumPic2","湿度监控");
  // this.pic3("HumPic3","光照强度监控");
},
methods:{
  // pic1:function(a,b){
  //          // 基于准备好的dom，初始化echarts实例
  //          var myChart = echarts.init(document.getElementById(a));

  //          var base = +new Date(1968, 9, 3);
  //          var oneDay = 24 * 3600 * 1000;
  //          var date = [];

  //          var data = [Math.random() * 300];

  //          for (var i = 1; i < 20000; i++) {
  //           var now = new Date(base += oneDay);
  //           date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
  //           data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
  //         }

  //         var option = {
  //           tooltip: {
  //             trigger: 'axis',
  //             position: function (pt) {
  //               return [pt[0], '10%'];
  //             }
  //           },
  //           title: {
  //             left: 'center',
  //             text: b,
  //           },
  //           toolbox: {
  //             feature: {
  //               dataZoom: {
  //                 yAxisIndex: 'none'
  //               },
  //               restore: {},
  //               saveAsImage: {}
  //             }
  //           },
  //           xAxis: {
  //             type: 'category',
  //             boundaryGap: false,
  //             data: date
  //           },
  //           yAxis: {
  //             type: 'value',
  //             boundaryGap: [0, '100%']
  //           },
  //           dataZoom: [{
  //             type: 'inside',
  //             start: 0,
  //             end: 10
  //           }, {
  //             start: 0,
  //             end: 10,
  //             handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
  //             handleSize: '80%',
  //             handleStyle: {
  //               color: '#fff',
  //               shadowBlur: 3,
  //               shadowColor: 'rgba(0, 0, 0, 0.6)',
  //               shadowOffsetX: 2,
  //               shadowOffsetY: 2
  //             }
  //           }],
  //           series: [
  //           {
  //             name:'模拟数据',
  //             type:'line',
  //             smooth:true,
  //             symbol: 'none',
  //             sampling: 'average',
  //             itemStyle: {
  //               normal: {
  //                 color: 'rgb(255, 70, 131)'
  //               }
  //             },
  //             areaStyle: {
  //               normal: {
  //                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
  //                   offset: 0,
  //                   color: 'rgb(255, 158, 68)'
  //                 }, {
  //                   offset: 1,
  //                   color: 'rgb(255, 70, 131)'
  //                 }])
  //               }
  //             },
  //             data: data
  //           }
  //           ]
  //         };
  //       // 使用刚指定的配置项和数据显示图表。
  //       myChart.setOption(option);
  //     },


  //     pic2:function(a,b){
  //      var myChart = echarts.init(document.getElementById(a));

  //      var option = {
  //       title: {
  //         text: b,
  //         subtext: '纯属虚构'
  //       },
  //       tooltip: {
  //         trigger: 'axis'
  //       },
  //       toolbox: {
  //         show: true,
  //         feature: {
  //           dataZoom: {
  //             yAxisIndex: 'none'
  //           },
  //           dataView: {readOnly: false},
  //           restore: {},
  //           saveAsImage: {}
  //         }
  //       },
  //       xAxis:  {
  //         type: 'category',
  //         boundaryGap: false,
  //         data: ['周一','周二','周三','周四','周五','周六','周日']
  //       },
  //       yAxis: {
  //         type: 'value',
  //         axisLabel: {
  //           formatter: '{value} °C'
  //         }
  //       },
  //       series: [
  //       {
  //         name:'最高气温',
  //         type:'line',
  //         data:[11, 11, 15, 13, 12, 13, 10],
  //         markPoint: {
  //           data: [
  //           {type: 'max', name: '最大值'},
  //           {type: 'min', name: '最小值'}
  //           ]
  //         },
  //         markLine: {
  //           data: [
  //           {type: 'average', name: '平均值'}
  //           ]
  //         }
  //       },
  //       {
  //         name:'最低气温',
  //         type:'line',
  //         data:[1, -2, 2, 5, 3, 2, 0],
  //         markPoint: {
  //           data: [
  //           {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
  //           ]
  //         },
  //         markLine: {
  //           data: [
  //           {type: 'average', name: '平均值'},
  //           [{
  //             symbol: 'none',
  //             x: '90%',
  //             yAxis: 'max'
  //           }, {
  //             symbol: 'circle',
  //             label: {
  //               normal: {
  //                 position: 'start',
  //                 formatter: '最大值'
  //               }
  //             },
  //             type: 'max',
  //             name: '最高点'
  //           }]
  //           ]
  //         }
  //       }
  //       ]
  //     };

  //     myChart.setOption(option);
  //   },

  //   pic3:function(a,b){
  //     function randomData() {
  //       now = new Date(+now + oneDay);
  //       value = value + Math.random() * 21 - 10;
  //       return {
  //         name: now.toString(),
  //         value: [
  //         [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
  //         Math.round(value)
  //         ]
  //       }
  //     }

  //     var myChart = echarts.init(document.getElementById(a));

  //     var data = [];
  //     var now = +new Date(1997, 9, 3);
  //     var oneDay = 24 * 3600 * 1000;
  //     var value = Math.random() * 1000;
  //     for (var i = 0; i < 1000; i++) {
  //       data.push(randomData());
  //     }

  //     var option = {
  //       title: {
  //         text: '动态数据 + 时间坐标轴'
  //       },
  //       tooltip: {
  //         trigger: 'axis',
  //         formatter: function (params) {
  //           params = params[0];
  //           var date = new Date(params.name);
  //           return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
  //         },
  //         axisPointer: {
  //           animation: false
  //         }
  //       },
  //       xAxis: {
  //         type: 'time',
  //         splitLine: {
  //           show: false
  //         }
  //       },
  //       yAxis: {
  //         type: 'value',
  //         boundaryGap: [0, '100%'],
  //         splitLine: {
  //           show: false
  //         }
  //       },
  //       series: [{
  //         name: '模拟数据',
  //         type: 'line',
  //         showSymbol: false,
  //         hoverAnimation: false,
  //         data: data
  //       }]
  //     };

  //     setInterval(function () {

  //       for (var i = 0; i < 5; i++) {
  //         data.shift();
  //         data.push(randomData());
  //       }

  //       myChart.setOption({
  //         series: [{
  //           data: data
  //         }]
  //       });
  //     }, 1000);

  //     myChart.setOption(option);
  //   }

}
}
</script>

<style scoped>
  .banner-head{
    display: block;
    margin-bottom: 50px;
  }
</style>