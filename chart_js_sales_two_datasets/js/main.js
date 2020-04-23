// 1: data
// Array of objects with sale
let _salesData2018 = [{
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

console.log(_salesData2018);

// Antother array of objects with sale
let _salesData2019 = [{
    month: 'January',
    sale: 900000
  },
  {
    month: 'February',
    sale: 790000
  },
  {
    month: 'March',
    sale: 790000
  },
  {
    month: 'April',
    sale: 880000
  },
  {
    month: 'May',
    sale: 705500
  },
  {
    month: 'June',
    sale: 900000
  }
];

console.log(_salesData2019);


// 2: prepare data for chart
// seperating the objects to arrays: months and sales
// why? that's how chart.js reads the data :)
function prepareData(data) {
  // declaring two array to store the data 
  let months = [];
  let sales = [];
  // looping through the global _salesData array
  for (const saleObject of data) {
    // adding the values to the different arrays
    months.push(saleObject.month);
    sales.push(saleObject.sale);
  }
  // returning the two arrays (months & sales) inside and object
  // we cannot return to values - that's why we have to do it inside an array
  return {
    months,
    sales
  };
}

// 3: create and append the chart
function appendChart() {
  // using prepareData() to get the excact data we want
  let data2018 = prepareData(_salesData2018);
  let data2019 = prepareData(_salesData2019);
  //open the developer console to inspect the result
  console.log(data2018);
  console.log(data2019);

  let chartContainer = document.getElementById('chartContainer');
  let chart = new Chart(chartContainer, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
      labels: data2018.months, // refering to the data object, holding data from prepareData()
      datasets: [
        // first dataset - 2018
        {
          data: data2018.sales, // refering to the data object, holding data from prepareData()
          label: 'Revenue first 6 month 2018',
          backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
          borderColor: '#ff6384'
        },
        // second dataset - 2019
        {
          data: data2019.sales,
          label: 'Revenue first 6 month 2019',
          backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
          borderColor: '#d863ff'
        }
      ]
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

appendChart();