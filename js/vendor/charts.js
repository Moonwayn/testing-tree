var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun' , 'Jul', 'Ago' , 'Sep'],
        datasets: [{
            label: '# of Votes',
            data: [12, 10, 3, 5, 2, 3, 11, 5, 6],
            backgroundColor: [
                'rgba(255,255,255)'
            ],
            borderColor: [
                'rgba(255,255,255)'
            ],
            pointBackgroundColor: 'rgba(255,255,255)' ,
            fill: false
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
                display: false
            }],
            xAxes:[{
                ticks: {
                    fontColor: '#fff',
                    fontFamily: 'Comfortaa-bold'
                },
                gridLines: {
                    display:false
                }
            }]
        },
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
               label: function(tooltipItem) {
                      return tooltipItem.yLabel;
               }
            }
        }
    }
});



var ctx = document.getElementById('myChart2');

var myChart2 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['M', 'T', 'W', 'T', 'F', 'S' , 'S'],
        datasets: [{
            label: '# of Votes',
            data: [12, 10, 3, 5, 2, 3, 11, 5, 6],
            backgroundColor: [
                'rgba(242, 98, 46, 0.1)'
            ],
            borderColor: [
                '#FF715B'
            ],
            pointBackgroundColor: '#FF715B'
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontColor: '#7C828A',
                    fontFamily: 'Comfortaa-bold',
                    fontSize: 12
                }
            }],
            xAxes:[{
                ticks: {
                    fontColor: '#7C828A',
                    fontFamily: 'Comfortaa-bold',
                    fontSize: 12
                },
                gridLines: {
                }
            }]
        },
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
               label: function(tooltipItem) {
                      return tooltipItem.yLabel;
               }
            }
        }
    }
});

var ctx = document.getElementById('myChartPie');
var myChartPie = new Chart(ctx, {
		type: 'pie',
		data: {
				labels: ["Inversión Inicial", "Intereses ganados"],
				datasets: [{
						label: "Ganancias totales)",
						backgroundColor: ["#018669", "#F9E09E"],
						data: [50, 150]
				}]
		},
		options: {
				title: {
						display: false
				},
				legend: {
						position: 'bottom',
				}
		}
});

