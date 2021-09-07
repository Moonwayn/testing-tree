var ctx = document.getElementById('myChartBar');
var yAxesticks = [];
var highestVal;
var myChartBar = new Chart(ctx, {
		type: 'bar',
		data: {
				labels: ['1 año', '2 años', '3 años', '4 años', '5 años', '6 años', '7 años', '8 años', '9 años', '10 años'],
				datasets: [{
						label: 'Inversion anual',
						data: [25, 20, 10, 11, 6, 12, 5, 8, 19, 5 ],
						backgroundColor: [
								'rgba(1, 134, 105, 1)',
								'rgba(1, 134, 105, 1)',
								'rgba(1, 134, 105, 1)',
								'rgba(1, 134, 105, 1)',
								'rgba(1, 134, 105, 1)',
								'rgba(1, 134, 105, 1)',
								'rgba(1, 134, 105, 1)',
								'rgba(1, 134, 105, 1)',
								'rgba(1, 134, 105, 1)',
								'rgba(1, 134, 105, 1)'
						]
				}, {
						label: 'Total ingresos',
						data: [30, 25, 15, 11, 17, 10, 12, 21, 25, 10],
						backgroundColor: [
								'rgba(249, 224, 158, 1)',
								'rgba(249, 224, 158, 1)',
								'rgba(249, 224, 158, 1)',
								'rgba(249, 224, 158, 1)',
								'rgba(249, 224, 158, 1)',
								'rgba(249, 224, 158, 1)',
								'rgba(249, 224, 158, 1)',
								'rgba(249, 224, 158, 1)',
								'rgba(249, 224, 158, 1)',
								'rgba(249, 224, 158, 1)'
						]
				}],

		},
		options: {

				scales: {
						xAxes: [{
								cornerRadius: 20,
								stacked: true,
								barPercentage: 0.4
						}],
						yAxes: [{
								ticks: {
										beginAtZero: true,
										stepSize: 5,
										// Return an empty string to draw the tick line but hide the tick label
										// Return `null` or `undefined` to hide the tick line entirely
										userCallback: function(value, index, values) {
											// Convert the number to a string and splite the string every 3 charaters from the end
											yAxesticks = values;
											value = value.toString();
											value = value.split(/(?=(?:...)*$)/);

											// Convert the array to a string and format the output
											value = value.join('.');
											return '$' + value;
										}		
									}
									
								}]
							},
							tooltips: { 
								callbacks: {
												label: function(tooltipItem, data) {
													return " $ " + tooltipItem.yLabel;
												},
											}
									},
									
        legend: {
					display: false
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