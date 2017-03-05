var chroma = require('chroma');

var rawdata = $data;

var maindiv = document.getElementById('maindiv${divnum}');
maindiv.style.height = '420px';

var colorGenerator = nbjscolor.category21();

var historicalBarChart = [
{
  key: 'Cumulative Return',
  values: [
  {
    'label' : 'A' ,
    'value' : 29.765957771107
  } ,
  {
    'label' : 'B' ,
    'value' : 0
  } ,
  {
    'label' : 'C' ,
    'value' : 32.807804682612
  } ,
  {
    'label' : 'D' ,
    'value' : 196.45946739256
  } ,
  {
    'label' : 'E' ,
    'value' : 0.19434030906893
  } ,
  {
    'label' : 'F' ,
    'value' : 98.079782601442
  } ,
  {
    'label' : 'G' ,
    'value' : 13.925743130903
  } ,
  {
    'label' : 'H' ,
    'value' : 5.1387322875705
  }
  ]
}
];


randomSeed = 1 + Math.floor(Math.random() * 10);

nv.addGraph(function() {
  var chart = nv.models.discreteBarChart()
    .x(function(d) { return d.label })
    .y(function(d) { return d.value })
    .staggerLabels(true)
    //.staggerLabels(historicalBarChart[0].values.length > 8)
    .showValues(true)
    .duration(250)
    .color(function (d, i) {
      return colorGenerator('nvd3' + randomSeed + i);
    })
    .height(400)
    ;

  d3.select('#maindiv${divnum} svg')
    .datum(historicalBarChart)
    .call(chart);

  nv.utils.windowResize(chart.update);

  return chart;
});
