/**
 * @status TESTED
 */
require(['Chart', 'chroma'], function(Chart, chroma) {
  // var chroma = require('chroma');

  var _params = $data;

  // console.log('debug', _params);

  var canvas = document.createElement("canvas");
  canvas.id = "canvas${divnum}";

  var divWrapper = document.createElement("div");
  divWrapper.id = 'wrapper${divnum}';
  divWrapper.style.width = '550px';
  divWrapper.style.height = '550px';


  document.getElementById("maindiv${divnum}").appendChild(divWrapper);
  document.getElementById("wrapper${divnum}").appendChild(canvas);

  var ctx = document.getElementById("canvas${divnum}");
  // ctx.width = 600;
  // ctx.height = 600;

  var colorGenerator = nbjscolor.categoryGenerator1();

  var data = _params.data;
  var labels = [];
  var counts = [];
  var basicColors = [];
  var hoverColors = [];
  for (var label in data) {
    labels.push(label);
    counts.push(data[label]);
    var basciColor = colorGenerator(label);
    basicColors.push(basciColor);
    hoverColors.push(chroma(basciColor).darken(0.3).hex());
  }


  var chartjsData = {
    labels: labels,
    datasets: [{
      data: counts,
      backgroundColor: basicColors,
      hoverBackgroundColor: hoverColors
    }]
  };

  var myDoughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: chartjsData,
      // options: options
  });
});
