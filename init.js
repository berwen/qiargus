requirejs.config({
  paths: { 
    'jquery': ['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min'],
    'd3': ['//cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3'],
    'd3-cloud': ['//cdn.rawgit.com/jasondavies/d3-cloud/f00a5113/build/d3.layout.cloud'],
    'Chart': ['//cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart'],
    'echarts': ['//cdn.bootcss.com/echarts/3.4.0/echarts.min'],
  },
  shim: {
    'd3-cloud': {
      deps: ['d3'],
      exports: 'd3Cloud'
    }
  }
});

require(['jquery', 'd3', 'Chart'], function(data) {
  console.log("Basic dependencies loaded.");    
  return {};
});

require(['d3-cloud'], function(d3Cloud) {
  window.d3.layout.cloud = d3Cloud;
  console.log("d3-cloud loaded.");    
  return {}
});

require(['echarts'], function(echarts) {
  window.echarts = echarts;
  console.log("echarts loaded.");    
  return {}
});