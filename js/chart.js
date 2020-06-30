function renderChart() {

  var usersNames = ["temp"];
  var usersWeights = [100];

  if (users.length){
    usersNames = users.map((user) => user.name);
    usersWeights = users.map((user) => user.weight);
  }

const ctx = document.getElementById('myChart').getContext('2d');
const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: usersNames,
        datasets: [{
            label: 'Shown',
            backgroundColor: ['rgb(51, 51, 51)', "green", "red", "blue", "pink", 'yellow', "gray"],
            borderColor: 'rgb(255, 99, 132)',
            data: usersWeights
        }]
    },

    // Configuration options go here
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


// load users to show them in pie chart;
User.load();

console.log("users", users);

renderChart();

const resetChartButton = document.getElementById("resetChart");
resetChartButton.addEventListener("click", function() {
  User.reset();
  User.save();
  renderChart();
});
