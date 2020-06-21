import ApexCharts from 'apexcharts'

let options = {
    series: [130, 65, 65, 0],
    colors: ['#FFE39C', '#6FCF97', '#BC9CFF', '#919191'],
    labels: ['Великолепно', 'Хорошо', 'Удовлетворительно', 'Разочарован'],
    chart: {
        type: 'donut',
    },
    legend: {
        position: 'right',        
        floating: true,
        fontFamily: "Montserrat, OpenSans, sans-serif",
        fontSize: "14px",
        offsetX: -15,
        offsetY: 15,
        markers: {
            width: 10,
            height: 10,
            
        },
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            type: "vertical",
            shadeIntensity: 0.5,
            gradientToColors: ["#FFBA9C","#66D2EA","#8BA4F9","#3D4975"],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 90, 100],
        },
    },
    dataLabels: {
        enabled: false,
    },
    plotOptions: {
        pie: {
            offsetY: -65,
            offsetX: -100,
            customScale: 0.45,
            startAngle: 180,
            donut: {
                size: "90%",
                labels: {
                    show: true,
                    value: {
                        show: true,
                        fontSize: '3rem',
                        fontWeight: 'bold',
                        fontFamily: 'Quicksand, OpenSans, sans-serif',
                        color: '#BC9CFF',                        
                        offsetY: -20,
                    },
                    name: {
                        offsetY: 33,
                        formatter: function () {
                            let vote = 'голосов';
                            return vote;
                        }
                        
                    },
                    total: {
                        show: true,
                        fontSize: '2.3rem',
                        fontFamily: 'Montserrat',
                        color: '#BC9CFF',
                        showAlways: false,
                        formatter: function (w) {
                            return w.globals.seriesTotals.reduce((a, b) => {
                                return a + b
                            }, 0)
                        },
                        label: 'голосов',
                        
                        
                    }
                }   
            },
        },
    },
};
function initChart(node, options) {
    let _chart = new ApexCharts(node, options);
    _chart.render();     
};
window.addEventListener('DOMContentLoaded', () => {
    let charts = document.querySelectorAll('.js-donut-chart');
    
    charts.forEach(item => {
        initChart(item, options);
    })
    
});