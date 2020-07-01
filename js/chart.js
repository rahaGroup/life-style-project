function renderChart() {

    var usersNames = [];
    var usersBMIs = [];

    if (users.length) {
        usersNames = users.map((user) => user.name);
        usersBMIs = users.map((user) => user.bmi);
    }

    const ctx = document.getElementById('myChart').getContext('2d');
    const chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: usersNames,
            datasets: [{
                    label: 'BMI',
                    backgroundColor: ['rgb(55, 37, 73, 0.5)', 'rgb(87, 57, 85, 0.5)', 'rgb(119, 76, 96, 0.5)', 'rgb(151, 85, 101, 0.5)', 'rgb(183, 93, 105, 0.5)', ],
                    borderColor: 'rgb(26, 20, 35 , 0.75)',
                    data: usersBMIs
                },

            ]
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