"use strict";

// 1: data
// Array of objects with grades
let _gradeData = [{
  label: "12: For an excellent performance",
  count: 7,
  color: "#ff200d"
}, {
  label: "10: For a very good performance",
  count: 7,
  color: "#FF4F40"
}, {
  label: "7: For a good performance",
  count: 10,
  color: "#FF7061"
}, {
  label: "4: For a fair performance",
  count: 4,
  color: "#FF998F"
}, {
  label: "2: For an adequate performance",
  count: 7,
  color: "#ffdede"
}, {
  label: "0: For an inadequate performance",
  count: 3,
  color: "#FFE6E3"
}, {
  label: "-3: For an unacceptable performance",
  count: 3,
  color: "#FFF2F2"
}];

console.log(_gradeData);

// 2: prepare data for chart
// seperating the objects to arrays: labels, counts and colors
// why? that's how chart.js reads the data :)
function prepareData(data) {
  // declaring two array to store the data 
  let labels = [];
  let counts = [];
  let colors = [];
  // looping through the global _salesData array
  for (const gradeObject of data) {
    // adding the values to the different arrays
    labels.push(gradeObject.label);
    counts.push(gradeObject.count);
    colors.push(gradeObject.color);
  }
  // returning the two arrays (months & sales) inside and object
  // we cannot return to values - that's why we have to do it inside an array
  return {
    labels,
    counts,
    colors
  };
}

// 3: create and append the chart
function appendChart(data) {
  // generate chart
  let chartContainer = document.getElementById('chart');
  let chart = new Chart(chartContainer, {
    type: 'doughnut',
    data: {
      labels: data.labels,
      datasets: [{
        data: data.counts,
        backgroundColor: data.colors
      }]
    }
  });
  // Doughnut and Pie Charts: https://www.chartjs.org/docs/latest/charts/doughnut.html 
}

let preparedData = prepareData(_gradeData);
console.log(preparedData);
appendChart(preparedData);