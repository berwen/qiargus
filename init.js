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
    'chroma': ['https://cdnjs.cloudflare.com/ajax/libs/chroma-js/1.2.2/chroma.min'],
    'nvd3': ['https://cdnjs.cloudflare.com/ajax/libs/nvd3/1.8.5/nv.d3.min'],
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
    },
    'nvd3': ['d3']
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

require(['chroma'], function(chroma) {
  console.log("Chroma loaded.");    
  return {}
});

require(['nvd3'], function(chroma) {
  var head = document.getElementsByTagName('head')[0],
  cssURL = 'https://cdnjs.cloudflare.com/ajax/libs/nvd3/1.8.5/nv.d3.min.css',
  linkTag = document.createElement('link');
  linkTag.id = 'nvd3style';
  linkTag.href = cssURL;
  linkTag.setAttribute('rel','stylesheet');
  linkTag.setAttribute('media','all');
  linkTag.setAttribute('type','text/css');
  head.appendChild(linkTag);
  console.log('nvd3 loaded.');    
  return {}
});