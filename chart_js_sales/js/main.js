"use strict";

// 1: data
// Array of objects with sale
let _salesData = [{
    month: 'January',
    sale: 1000000
  },
  {
    month: 'February',
    sale: 890000
  },
  {
    month: 'March',
    sale: 690000
  },
  {
    month: 'April',
    sale: 880000
  },
  {
    month: 'May',
    sale: 705000
  },
  {
    month: 'June',
    sale: 980000
  }
];

// 2: prepare data for chart
// seperating the objects to arrays: months and sales
// why? that's how chart.js reads the data :)
function prepareData(data) {
  // declaring two array to store the data 
  let months = [];
  let sales = [];
  // looping through the data array
  for (const object of data) {
    // adding the values to the different arrays
    months.push(object.month);
    sales.push(object.sale);
  }
  // returning the two arrays (months & sales) inside and object
  // we cannot return to values - that's why we have to do it inside an array
  return {
    months,
    sales
  };
}

// 3: create and append the chart
function appendChart(salesData) {
  // using prepareData() to get the excact data we want
  let data = prepareData(salesData);
  //open the developer console to inspect the result
  console.log(data);
  let chartContainer = document.getElementById('chartContainer');
  let chart = new Chart(chartContainer, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
      labels: data.months, // refering to the data object, holding data from prepareData()
      datasets: [{
        data: data.sales, // refering to the data object, holding data from prepareData()
        label: 'Revenue first 6 month',
        backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
        borderColor: 'rgb(255, 99, 132)'
      }]
    },
    // Configuration options goes here
    // Go to the docs to find more: https://www.chartjs.org/docs/latest/
    options: {
      title: {
        display: true,
        text: 'Sales'
      }
    }

  });
}

appendChart(_salesData);