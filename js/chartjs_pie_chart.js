var chroma = require('chroma');

var rawdata = $data;

var canvas = document.createElement("canvas");
canvas.id = "canvas${divnum}";

var divWrapper = document.createElement("div");
divWrapper.id = 'wrapper${divnum}';
divWrapper.style.width = '400px';
divWrapper.style.height = '400px';


document.getElementById("maindiv${divnum}").appendChild(divWrapper);
document.getElementById("wrapper${divnum}").appendChild(canvas);

var ctx = document.getElementById("canvas${divnum}");
// ctx.width = 600;
// ctx.height = 600;

var colorGenerator = nbjscolor.category21();

var colors = [];
var hoverColors = [];
for (var i=1; i<=3; i++) {
  colors.push(colorGenerator(i+5));
  hoverColors.push(chroma(colors[i-1]).darken(0.3).hex());
}


var data = {
    labels: [
        "Red",
        "Blue",
        "Yellow"
    ],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                colors[0],
                colors[1],
                colors[2],
            ],
            hoverBackgroundColor: [
                hoverColors[0],
                hoverColors[1],
                hoverColors[2],
            ]
        }]
};

var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    // options: options
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