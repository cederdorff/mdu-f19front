"use strict";
// ========== GLOBAL VARIABLES ========== //
const _db = firebase.firestore();
const _dataRef = _db.collection("sustainabilityData");
let _sustainabilityData;

// listen for changes on _dataRef
_dataRef.where('region', '==', 'north').orderBy("year").onSnapshot(function(snapshotData) {
  _sustainabilityData = []; // reset _sustainabilityData
  for (let doc of snapshotData.docs) { // loop trough the docs
    let docData = doc.data(); // save the doc data in the variable docData
    docData.id = doc.id; // add the doc id to the docData object
    _sustainabilityData.push(docData); // push docData to the global variable _sustainabilityData
  }
  appendCows(_sustainabilityData); // call appendCows with _sustainabilityData as function argument
  appendCarbonFootprint(_sustainabilityData); //call appendCarbonFootprint with _sustainabilityData as function argument
  appendMilkProduction(_sustainabilityData); //call appendMilkProduction with _sustainabilityData as function argument
});

function appendCows(sustainabilityData) {
  console.log(sustainabilityData);
  // TODO: prepare data for the chart
  // TODO: create the chart with options
  let chart = document.querySelector('#cows');
  // let myDoughnutChart = new Chart(chart, {...}
}

function appendCarbonFootprint(sustainabilityData) {
  console.log(sustainabilityData);
  // TODO: prepare data for the chart
  // TODO: create the chart with options
  let chart = document.querySelector('#carbonFootprint');
  // let myDoughnutChart = new Chart(chart, {...}
}

function appendMilkProduction(sustainabilityData) {
  console.log(sustainabilityData);
  // TODO: prepare data for the chart
  // TODO: create the chart with options
  let chart = document.querySelector('#milkProduction');
  // let myDoughnutChart = new Chart(chart, {...}
}