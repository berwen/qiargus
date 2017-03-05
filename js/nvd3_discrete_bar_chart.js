/**
 * @status TESTED
 */

var _params = $data;
// console.log(_params);

var maindiv = document.getElementById('maindiv${divnum}');
maindiv.style.height = '420px';

var colorGenerator = nbjscolor.categoryGenerator1();

var chartdata = [
{
  key: _params.key,
  values: _params.values
}
];



nv.addGraph(function() {
  var chart = nv.models.discreteBarChart()
    .x(function(d) { return d.label })
    .y(function(d) { return d.value })
    .staggerLabels(true)
    //.staggerLabels(historicalBarChart[0].values.length > 8)
    .showValues(true)
    .showLegend(true)
    .duration(1000)
    .color(function (d, i) {
      return colorGenerator('nvd3' + randomSeed + i);
    })
    .height(400)
    ;

  d3.select('#maindiv${divnum} svg')
    .datum(chartdata)
    .call(chart);

  nv.utils.windowResize(chart.update);

  return chart;
});
