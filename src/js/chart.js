// Chart js
import Chart from 'chart.js/auto'
const primaryColor = "#6495ed";
const fontFamily = "Nunito,sans-serif";

// Doughnut Chart
var xValues = ["Total Revenue", "Target Revenue"];
var yValues = [80, 20];
var barColors = ["#1434a4", primaryColor];

const counter = {
    id: 'counter',
    beforeDraw(chart, args, options) {
        const { ctx, chartArea: { top, right, bottom, left, width, height } } = chart;
        const fontHeight = (options.fontSize * 16 / 2) + 5;
        ctx.save();
        ctx.font = options.fontSize + 'rem ' + options.fontFamily;
        ctx.textAlign = 'center';
        ctx.fillStyle = options.fontColor;
        ctx.fillText('Total Revenue', width / 2, (height / 2) + top - fontHeight + 3);
        ctx.restore();
        ctx.font = options.fontSize + 'rem ' + options.fontFamily;
        ctx.textAlign = 'center';
        ctx.fillStyle = options.fontColor;
        ctx.fillText('$12,935', width / 2, (height / 2) + top + fontHeight + 3);
        ctx.restore();
    }
}
new Chart("myChart", {
    type: "doughnut",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues,
            cutout: "75%",
            radius: "90%",
        },],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    font: {
                        family: fontFamily,
                    }
                }
            },
            tooltip: {
                mode: "index",
                intersect: false,
                usePointStyle: true,
                titleMarginBottom: 10,
                bodySpacing: 10,
                padding: 15,
                boxPadding: 6,
            },
            title: {
                display: false,
                text: "This month revenue",
            },
            counter: {
                fontSize: 1.2,
                fontFamily: fontFamily,
                fontColor: "#212529",
            }
        },
    },
    plugins: [counter]
});

// Line Chart
const data = [10, 45, 29, 60, 50, 56, 55, 40, 10, 45, 29, 60, 50, 56, 55, 40];
const data2 = [20, 2, 39, 40, 71, 42, 9, 40, 20, 2, 39, 40, 71, 42, 9, 40];
const dataset = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
        label: "My First Dataset",
        data: data,
        borderColor: "#50C878",
        backgroundColor: "#50C878",
        tension: 0.4,
        pointRadius: 0.001,
        pointHoverBorderWidth: 2,
        pointHoverBorderColor: "#fff",
        pointHoverRadius: 6,
        fill: {
            target: 'start',
            above: 'rgb(80, 200, 120, .1)',
        },
    },
    {
        label: "My Second Dataset",
        data: data2,
        borderColor: primaryColor,
        backgroundColor: primaryColor,
        tension: 0.4,
        pointRadius: 0.001,
        pointHoverBorderWidth: 2,
        pointHoverBorderColor: "#fff",
        pointHoverRadius: 6,
        fill: {
            target: 'start',
            above: 'rgb(100, 149, 237, .1)',
        },
    },
    ],
};
const delayBetweenPoints = 40;
const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
const animation = {
    x: {
        type: 'number',
        easing: 'linear',
        duration: delayBetweenPoints,
        from: NaN, // the point is initially skipped
        delay(ctx) {
            if (ctx.type !== 'data' || ctx.xStarted) {
                return 0;
            }
            ctx.xStarted = true;
            return ctx.index * delayBetweenPoints;
        }
    },
    y: {
        type: 'number',
        easing: 'linear',
        duration: delayBetweenPoints,
        from: previousY,
        delay(ctx) {
            if (ctx.type !== 'data' || ctx.yStarted) {
                return 0;
            }
            ctx.yStarted = true;
            return ctx.index * delayBetweenPoints;
        }
    }
};
const toolTipLine = {
    id: 'toolTipLine',
    beforeDraw: chart => {
        if (chart.tooltip._active && chart.tooltip._active.length) {
            const ctx = chart.ctx;
            ctx.save();
            const activePoint = chart.tooltip._active[0];
            const chartArea = chart.chartArea;

            ctx.beginPath();
            ctx.setLineDash([5, 7]);
            ctx.moveTo(activePoint.element.x, chartArea.top);
            ctx.lineTo(activePoint.element.x, chartArea.bottom);
            ctx.lineWidth = 2;
            ctx.strokeStyle = "#dee2e7";
            ctx.stroke();
            ctx.restore();
        }

    }
}
new Chart("myLine", {
    type: "line",
    data: dataset,
    options: {
        animation,
        hover: {
            mode: 'index',
            intersect: false,
        },
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                mode: "index",
                intersect: false,
                usePointStyle: true,
                titleMarginBottom: 10,
                bodySpacing: 10,
                padding: 15,
                boxPadding: 6,
            },
            title: {
                display: false,
                text: "Revenue Chart",
            },
        },
        scales: {
            x: {
                title: {
                    font: {
                        family: fontFamily,
                    }
                },
                grid: {
                    display: false,
                },
            },
            y: {
                title: {
                    font: {
                        family: fontFamily,
                    }
                },
                ticks: {
                    count: 5,
                },
            },
        },
    },
    plugins: [toolTipLine]
});

// Bar Chart
const barData = {
    labels: ["Mobile & Accessories", "Watches", "Health & Beauty", "Groceries & Pets", "Fashion",
        "Sports & Outdoor", "Home & Living"
    ],
    datasets: [{
        data: [11400, 15200, 8420, 5001, 4009, 21042, 14298],
        backgroundColor: ['#6495ed'],
        barThickness: 8,
        borderRadius: 8,
    }]
};
new Chart("myBar", {
    type: "bar",
    data: barData,
    options: {
        responsive: true,
        indexAxis: 'y',
        scales: {
            x: {
                title: {
                    font: {
                        family: fontFamily,
                    }
                },
                grid: {
                    borderDash: [5, 5]
                },
                ticks: {
                    count: 5,
                },
            },
            y: {
                title: {
                    font: {
                        family: fontFamily,
                    }
                },
                grid: {
                    display: false,
                },
            }
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                mode: "index",
                intersect: false,
                usePointStyle: true,
                titleMarginBottom: 10,
                bodySpacing: 10,
                padding: 15,
                boxPadding: 6,
            },
            title: {
                display: false,
                text: "Bar Chart",
            },
        },
    },
});

