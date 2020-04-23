"use strict";

let _data = [{
  year: "year1",
  numberOfCows: 51
}, {
  year: "year2",
  numberOfCows: 50
}, {
  year: "year3",
  numberOfCows: 49
}, {
  year: "year4",
  numberOfCows: 51
}, {
  year: "year5",
  numberOfCows: 50
}];

function prepareData(data) {
  let cows = [];
  let years = [];

  for (let object of data) {
    cows.push(object.numberOfCows);
    years.push(object.year);
  }
  console.log(cows);
  console.log(years);

  return {
    cows,
    years
  }
}

function appendChart(data) {
  let chartData = prepareData(data);
  // console.log(chartData);

  // generate chart
  let chartContainer = document.getElementById('chart');
  let chart = new Chart(chartContainer, {
    type: 'line',
    data: {
      datasets: [{
        data: chartData.cows,
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
      labels: chartData.years
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

appendChart(_data);