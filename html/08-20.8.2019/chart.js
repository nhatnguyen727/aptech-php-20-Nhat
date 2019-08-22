new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: ["sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday"],
      datasets: [{ 
          data: [15560,21850,18250,24000,23599,24005,12000  ],
          borderColor: "#3e95cd",
          fill: false,
          lineTension: 0,
        }
      ]
    },
    options: {
        
      title: {
        display: true,
      }
    }
  });