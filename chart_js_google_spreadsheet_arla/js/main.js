"use strict";

let sheetId = "1iS2cJk1CoGY1bqN8KgH_oGMxBuGK3RIPJ32rgon4ECg";
let sheetNumber = 1;
let sheetUrl = "https://spreadsheets.google.com/feeds/list/" + sheetId + "/" + sheetNumber + "/public/full?alt=json";
console.log(sheetUrl);

fetch(sheetUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    appendChart(json.feed.entry);
  });

function appendChart(data) {
  console.log(data);

  // prepare data
  let cows = [];
  let years = [];

  for (let object of data) {
    cows.push(object.gsx$cows.$t);
    years.push(object.gsx$year.$t);
  }

  console.log(cows);
  console.log(years);

  // generate chart
  let chart = document.getElementById('chart');
  let myDoughnutChart = new Chart(chart, {
    type: 'line',
    data: {
      datasets: [{
        data: cows,
        label: 'Number of Cows',
        fill: false,
        borderColor: "#e755ba",
        borderDash: [5, 5],
        backgroundColor: "#e755ba",
        pointBackgroundColor: "#55bae7",
        pointBorderColor: "#55bae7",
        pointHoverBackgroundColor: "#55bae7",
        pointHoverBorderColor: "#55bae7",
      }],
      labels: years
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            min: 45,
            max: 55
          }
        }]
      }
    }
  });
}