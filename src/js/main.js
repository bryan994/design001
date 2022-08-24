import "../styles/custom.scss";

// Chart js
var xValues = ["Italy", "France", "Spain"];
var yValues = [50, 14, 34];
var barColors = ["#efadce", "#de5c9d", "#ab296a"];

new Chart("myChart", {
    type: "doughnut",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues,
            cutout: "80%",
            radius: "70%",
        },],
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: "World Wide Wine Production 2018",
        },
    },
});

const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
        label: "My First Dataset",
        data: [10, 45, 29, 60, 50, 56, 55, 40],
        borderWidth: 3,
        borderColor: "#d63384",
        tension: 0.4,
        backgroundColor: "#d63384",
        pointRadius: 0,
    },
    {
        label: "My Second Dataset",
        data: [20, 2, 39, 40, 71, 42, 9, 40],
        borderWidth: 3,
        tension: 0.4,
        pointRadius: 0,
    },
    ],
};

new Chart("myLine", {
    type: "line",
    data: data,
    options: {
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
                grid: {
                    display: false,
                },
                tick: {
                    stepSize: 50,
                },
            },
            y: {
                ticks: {
                    count: 5,
                    stepSize: 20,
                },
            },
        },
    },
});

const barData = {
    labels: ["Mobile & Accessories", "Watches", "Health & Beauty", "Groceries & Pets", "Fashion",
        "Sports & Outdoor", "Home & Living"
    ],
    datasets: [{
        data: [11400, 30200, 14203, 20015, 5009, 20421, 42985],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
        ],
        borderWidth: 1
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
                grid: {
                    borderDash: [5, 5]
                },
                ticks: {
                    count: 6,
                },
            },
            y: {
                grid: {
                    display: false,
                },
                beginAtZero: true
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
// Navbar
function hideNav(width) {
    if (width >= 1200) {
        $("body").removeClass("navbar-hide");
        $(".navbar").removeClass("offcanvas");
        $("#navbar-toggler").attr("data-bs-target", "").attr("data-bs-toggle", "");
    } else if ($(width < 1200)) {
        $("body").addClass("navbar-hide");
        $(".navbar").addClass("offcanvas");
        $("#navbar-toggler").attr("data-bs-target", "#offcanvasNavbar").attr("data-bs-toggle", "offcanvas");
    }

    // When resize hide navbar
    $('#offcanvasNavbar').offcanvas('hide');
}

$(window).bind("resize", function () {
    hideNav($(this).width());
});
$(document).ready(function () {

    hideNav($(window).width());
});