"use strict";

// 1: data
// Array of objects colors
let _colorData = [{
  color: "Red",
  numberOfVotes: 12,
  backgroundColor: "rgba(255, 99, 132, 0.2)",
  borderColor: "rgba(255, 99, 132, 1)"
}, {
  color: "Blue",
  numberOfVotes: 19,
  backgroundColor: "rgba(54, 162, 235, 0.2)",
  borderColor: "rgba(54, 162, 235, 1)"
}, {
  color: "Yellow",
  numberOfVotes: 3,
  backgroundColor: "rgba(255, 206, 86, 0.2)",
  borderColor: "rgba(255, 206, 86, 1)"
}, {
  color: "Green",
  numberOfVotes: 5,
  backgroundColor: "rgba(75, 192, 192, 0.2)",
  borderColor: "rgba(75, 192, 192, 1)"
}, {
  color: "Purple",
  numberOfVotes: 2,
  backgroundColor: "rgba(153, 102, 255, 0.2)",
  borderColor: "rgba(153, 102, 255, 1)"
}, {
  color: "Orange",
  numberOfVotes: 3,
  backgroundColor: "rgba(255, 159, 64, 0.2)",
  borderColor: "rgba(255, 159, 64, 1)"
}];

// 2: prepare data for chart
function prepareData(data) {
  let colors = [];
  let votes = [];
  let backgroundColors = [];
  let borderColors = [];

  for (const dataObject of data) {
    colors.push(dataObject.color);
    votes.push(dataObject.numberOfVotes);
    backgroundColors.push(dataObject.backgroundColor);
    borderColors.push(dataObject.borderColor);
  }

  return {
    colors,
    votes,
    backgroundColors,
    borderColors
  };
}

// 3: create and append the chart
function appendChart(data) {
  // create a new chart
  let chart = new Chart(document.querySelector('#chartContainer'), {
    type: 'bar',
    data: {
      labels: data.colors,
      datasets: [{
        label: 'Number of Votes',
        data: data.votes,
        backgroundColor: data.backgroundColors,
        borderColor: data.borderColors,
        borderWidth: 1
      }]
    },
    // Options and configuration options goes here
    // Go to the docs to find more: https://www.chartjs.org/docs/latest/
    // Bar chart: https://www.chartjs.org/docs/latest/charts/bar.html 
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}
let data = prepareData(_colorData);
appendChart(data);