function renderChart(labels, shownDataset, clickedDataset) {
const ctx = document.getElementById('myChart').getContext('2d');
const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: labels,
        datasets: [{
            label: 'Shown',
            backgroundColor: ['rgb(51, 51, 51)', "green", "red", "blue", "pink", 'yellow', "gray"],
            borderColor: 'rgb(255, 99, 132)',
            data: shownDataset
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


const labels = ["label1", "label2", "label3", "labe4", "label1", "label2", "label3", "labe4"];
const shownDataset = [1, 2, 3, 4, 1, 2, 3, 4];
const clickedDataset = [4, 3, 2, 1, 4, 3, 2, 1]
renderChart(labels, shownDataset, clickedDataset);
