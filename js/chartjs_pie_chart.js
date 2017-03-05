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

  var myPieChart = new Chart(ctx, {
      type: 'pie',
      data: chartjsData,
      // options: options
  });
});




// ctx.style.width = '500px';
// ctx.style.height = '500px';



// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// });