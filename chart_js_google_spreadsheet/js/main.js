"use strict";

let sheetId = "1M3g7RaWVivFchOyFxSPji_FKLe7z8bMx3HCMO7kLr3Y";
let sheetNumber = 1;
let sheetUrl = "https://spreadsheets.google.com/feeds/list/" + sheetId + "/" + sheetNumber + "/public/full?alt=json";
console.log(sheetUrl);

fetch(sheetUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    appendChart(json.feed.entry);
  });

function appendChart(data) {
  console.log(data);

  // prepare data
  let marks = [];
  let numbers = [];
  let colors = [];

  for (let mark of data) {
    marks.push(`${mark['gsx$mark']['$t']}: ${mark['gsx$explanation']['$t']}`);
    numbers.push(mark['gsx$number']['$t']);
    colors.push(mark['gsx$color']['$t']);
  }

  // generate chart
  let chart = document.getElementById('chart');
  let myDoughnutChart = new Chart(chart, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: numbers,
        backgroundColor: colors
      }],
      labels: marks
    }
  });
}