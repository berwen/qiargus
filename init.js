requirejs.config({
  paths: { 
    'jquery': ['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min'],
    'd3': ['//cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3'],
    'd3-cloud': ['//cdn.rawgit.com/jasondavies/d3-cloud/f00a5113/build/d3.layout.cloud'],
    'd3-color': ['https://d3js.org/d3-color.v1.min'],
    'd3-interpolate': ['https://d3js.org/d3-interpolate.v1.min'],
    'd3-scale-chromatic': ['https://d3js.org/d3-scale-chromatic.v1.min'],
    'Chart': ['//cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart'],
    'echarts': ['//cdn.bootcss.com/echarts/3.4.0/echarts.min'],
  },
  shim: {
    'd3-cloud': {
      deps: ['d3'],
      exports: 'd3Cloud'
    },
    'd3-color': {
      deps: ['d3'],
      exports: 'd3Color'
    },
    'd3-interpolate': {
      deps: ['d3'],
      exports: 'd3Interpolate'
    },
    'd3-scale-chromatic': {
      deps: ['d3'],
      exports: 'd3ScaleChromatic'
    }
  }
});

require(['jquery', 'd3', 'Chart'], function($, d3, Chart) {
  console.log("Basic dependencies loaded.");    
  window.d3 = d3;
  return {};
});

require(['d3-cloud', 'd3-color', 'd3-interpolate', 'd3-scale-chromatic'], function(d3Cloud) {
  window.d3.layout.cloud = d3Cloud;
  console.log("d3-cloud loaded.");    
  return {}
});

require(['echarts'], function(echarts) {
  window.echarts = echarts;
  console.log("echarts loaded.");    
  return {}
});