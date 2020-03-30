"use strict";
// ========== GLOBAL VARIABLES ========== //
// Your web app's Firebase configuration
const _db = firebase.firestore();
const _dataRef = _db.collection("sustainabilityData");
let _sustainabilityData;

// listen for changes on _dataRef
_dataRef.orderBy("year").onSnapshot(function(snapshotData) {
  _sustainabilityData = []; // reset _sustainabilityData
  snapshotData.forEach(doc => { // loop through snapshotData - like for of loop
    let data = doc.data(); // save the data in a variable
    data.id = doc.id; // add the id to the data variable
    _sustainabilityData.push(data); // push the data object to the global array _sustainabilityData
  });
  console.log(_sustainabilityData);
  appendCows(_sustainabilityData); // call appendCows with _sustainabilityData as function argument
  appendCarbonFootprint(_sustainabilityData); //call appendCarbonFootprint with _sustainabilityData as function argument
  appendMilkProduction(_sustainabilityData); //call appendMilkProduction with _sustainabilityData as function argument
});

function appendCows(sustainabilityData) {
  // prepare data
  let cows = [];
  let years = [];
  sustainabilityData.forEach(data => {
    if (data.region === 'north') {
      cows.push(data.herdYearCows);
      years.push(data.year);
    }
  });

  console.log(cows);
  console.log(years);

  // generate chart
  let chart = document.querySelector('#cows');
  let myDoughnutChart = new Chart(chart, {
    type: 'bar',
    data: {
      datasets: [{
        data: cows,
        label: 'Number of Cows',
        fill: false,
        borderColor: "#e755ba",
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
            min: (Math.min(...cows) - 5),
            max: (Math.max(...cows) + 1)
          }
        }]
      }
    }
  });
}

function appendCarbonFootprint(sustainabilityData) {
  // prepare data
  let carbonFootprint = [];
  let years = [];
  sustainabilityData.forEach(data => {
    if (data.region === 'north') {
      carbonFootprint.push(data.carbonFootprintWholeFarm.replace(',', '.'));
      years.push(data.year);
    }
  });

  console.log(carbonFootprint);
  console.log(years);

  // generate chart
  let chart = document.querySelector('#carbonFootprint');
  let myDoughnutChart = new Chart(chart, {
    type: 'line',
    data: {
      datasets: [{
        data: carbonFootprint,
        label: 'Carbon Footprint WholeFarm',
        fill: false,
        borderColor: "#e755ba",
        backgroundColor: "#e755ba",
        pointBackgroundColor: "#55bae7",
        pointBorderColor: "#55bae7",
        pointHoverBackgroundColor: "#55bae7",
        pointHoverBorderColor: "#55bae7",
      }],
      labels: years
    }
  });
}

function appendMilkProduction(sustainabilityData) {
  let years = [];
  let milkNorth = [];
  let milkSouth = [];
  sustainabilityData.forEach(data => {
    if (data.region === 'north') {
      milkNorth.push(data.herdMilkProduction.replace(',', '.'));
      years.push(data.year);
    } else if (data.region === 'south') {
      milkSouth.push(data.herdMilkProduction.replace(',', '.'));
    }
  });

  console.log(years);
  console.log(milkNorth);
  console.log(milkSouth);

  // generate chart
  let chart = document.querySelector('#milkProduction');
  let myDoughnutChart = new Chart(chart, {
    type: 'line',
    data: {
      datasets: [{
        data: milkNorth,
        label: 'Milk Production North',
        fill: false,
        borderColor: "#e755ba",
        backgroundColor: "#e755ba",
        pointBackgroundColor: "#55bae7",
        pointBorderColor: "#55bae7",
        pointHoverBackgroundColor: "#55bae7",
        pointHoverBorderColor: "#55bae7",
      }, {
        label: 'Milk Production South',
        data: milkSouth,
        fill: false,
        borderColor: "#55bae7",
        backgroundColor: "#55bae7",
        pointBackgroundColor: "#e755ba",
        pointBorderColor: "#e755ba",
        pointHoverBackgroundColor: "#e755ba",
        pointHoverBorderColor: "#e755ba",
        type: 'line'
      }],
      labels: years
    }
  });
}