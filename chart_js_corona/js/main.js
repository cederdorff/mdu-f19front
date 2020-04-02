"use strict";

// 1: data
// Array of objects
let _data = [{
    date: '2020-02-26',
    numberOfInfected: 0
  },
  {
    date: '2020-02-27',
    numberOfInfected: 1
  },
  {
    date: '2020-02-28',
    numberOfInfected: 2
  },
  {
    date: '2020-02-29',
    numberOfInfected: 3
  },
  {
    date: '2020-03-01',
    numberOfInfected: 4
  },
  {
    date: '2020-03-02',
    numberOfInfected: 4
  },
  {
    date: '2020-03-03',
    numberOfInfected: 10
  },
  {
    date: '2020-03-04',
    numberOfInfected: 15
  },
  {
    date: '2020-03-05',
    numberOfInfected: 20
  },
  {
    date: '2020-03-06',
    numberOfInfected: 20
  },
  {
    date: '2020-03-07',
    numberOfInfected: 27
  },
  {
    date: '2020-03-08',
    numberOfInfected: 35
  },
  {
    date: '2020-03-09',
    numberOfInfected: 90
  },
  {
    date: '2020-03-10',
    numberOfInfected: 262
  },
  {
    date: '2020-03-11',
    numberOfInfected: 514
  },
  {
    date: '2020-03-12',
    numberOfInfected: 674
  },
  {
    date: '2020-03-13',
    numberOfInfected: 801
  },
  {
    date: '2020-03-14',
    numberOfInfected: 827
  },
  {
    date: '2020-03-15',
    numberOfInfected: 864
  },
  {
    date: '2020-03-16',
    numberOfInfected: 914
  },
  {
    date: '2020-03-17',
    numberOfInfected: 977
  },
  {
    date: '2020-03-18',
    numberOfInfected: 1044
  },
  {
    date: '2020-03-19',
    numberOfInfected: 1151
  },
  {
    date: '2020-03-20',
    numberOfInfected: 1255
  },
  {
    date: '2020-03-21',
    numberOfInfected: 1326
  },
  {
    date: '2020-03-22',
    numberOfInfected: 1395
  },
  {
    date: '2020-03-23',
    numberOfInfected: 1450
  },
  {
    date: '2020-03-24',
    numberOfInfected: 1591
  },
  {
    date: '2020-03-25',
    numberOfInfected: 1734
  },
  {
    date: '2020-03-26',
    numberOfInfected: 1877
  },
  {
    date: '2020-03-27',
    numberOfInfected: 2046
  },
  {
    date: '2020-03-28',
    numberOfInfected: 2201
  },
  {
    date: '2020-03-29',
    numberOfInfected: 2395
  },
  {
    date: '2020-03-30',
    numberOfInfected: 2577
  },
  {
    date: '2020-03-31',
    numberOfInfected: 2860
  },
  {
    date: '2020-04-01',
    numberOfInfected: 3107
  },
  {
    date: '2020-04-02',
    numberOfInfected: 3355
  }

];

// 2: prepare data for chart
// seperating the objects to arrays: months and sales
// why? that's how chart.js reads the data :)
function prepareData(data) {
  // declaring two array to store the data 
  let dates = [];
  let infected = [];
  // looping through the data array
  for (const object of data) {
    // adding the values to the different arrays
    dates.push(object.date);
    infected.push(object.numberOfInfected);
  }
  // returning the two arrays inside and object
  // we cannot return to values - that's why we have to do it inside an array
  return {
    dates,
    infected
  };
}

// 3: create and append the chart
function appendChart() {
  // using prepareData() to get the excact data we want
  let data = prepareData(_data);
  //open the developer console to inspect the result
  console.log(data);
  let chartContainer = document.getElementById('chartContainer');
  let chart = new Chart(chartContainer, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
      labels: data.dates, // refering to the data object, holding data from prepareData()
      datasets: [{
        data: data.infected, // refering to the data object, holding data from prepareData()
        label: 'Antal Smittede',
        backgroundColor: 'rgb(172, 198, 201)', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
        borderColor: 'rgb(38, 76, 89)'
      }]
    },
    // Configuration options goes here
    // Go to the docs to find more: https://www.chartjs.org/docs/latest/
    options: {
      title: {
        display: true,
        text: 'Coronasmitte'
      }
    }

  });
}

appendChart();