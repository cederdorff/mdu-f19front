/*
For more info about chart.js visit the website -
Chart.js | Open source HTML5 Charts for your website
https://www.chartjs.org
*/
let chartContainer = document.getElementById('chartContainer').getContext('2d');
let chart = new Chart(chartContainer, {
  // The type of chart we want to create
  type: 'line',
  // The data for our dataset
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      label: 'Revenue first 6 month',
      backgroundColor: '#f1f1f1',
      borderColor: 'rgb(255, 99, 132)',
      data: [1000000, 890000, 690000, 880000, 705000, 980000]
    }]
  },
  // Configuration options go here
  options: {
    title: {
      display: true,
      text: 'Sales'
    }
  }

});