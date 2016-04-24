/**
 * Created by tofie on 4/24/2016.
 */

window.waterData = function(){
    var data = [{
            label: '2013',
            gal: [1750, 1850, 2740, 3030, 4200, 4660, 5020, 4780, 4010, 3720, 2560, 1880]
        },
        {
            label: '2014',
            gal: [2190, 1620, 1840, 2280, 3560, 4160, 4310, 3980, 3420, 2880, 1840, 1500]
        },
        {
            label: '2015',
            gal: [1640, 1540, 2200, 2390, 2880, 3150, 3420, 3440, 3280, 2880, 1740, 1460]
        }];

    var avgMonthSave = function(){
        var avgUse = [];

        for (var i = 0; i<data.length; i++){
            var avg,
                total = 0;
            for (var x = 0; x<data[i].gal.length; x++){
                total+=data[i].gal[x];
            }

            avg = total/data[i].gal.length;

            avgUse.push(Math.round(avg));
        }

        return avgUse[0]-avgUse[1];
    };

    var avgSaved = ' ' + avgMonthSave() + ' gallons a month.';

    $('#waterConsumption').children('p').append(avgSaved);

    return data;
};

window.waterChartInit = function () {
    var chartCan = document.getElementById("waterChart");
    var chartCtx = chartCan.getContext("2d");
    var data = waterData();

    var waterChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: data[0].label,
                backgroundColor: 'rgba(63, 191, 150, 0.3)',
                borderColor: 'rgb(63, 191, 150)',
                pointBackgroundColor: 'rgb(63, 191, 150)',
                pointBorderColor: '#fff',
                pointHoverRadius: 6,
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(63, 191, 150)',
                pointHoverBorderWidth: 3,
                data: data[0].gal
            },
            {
                label: data[1].label,
                backgroundColor: 'rgba(62, 114, 188, 0.3)',
                borderColor: 'rgb(62, 114, 188)',
                pointBackgroundColor: 'rgb(62, 114, 188)',
                pointBorderColor: '#fff',
                pointHoverRadius: 6,
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(62, 114, 188)',
                pointHoverBorderWidth: 3,
                data: data[1].gal
            },
            {
                label: data[2].label,
                backgroundColor: 'rgba(98, 62, 188, 0.3)',
                borderColor: 'rgb(98, 62, 188)',
                pointBackgroundColor: 'rgb(98, 62, 188)',
                pointBorderColor: '#fff',
                pointHoverRadius: 6,
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(98, 62, 188)',
                pointHoverBorderWidth: 3,
                data: data[2].gal
            }
        ]
    };

    var options = {
        tooltips: {
            backgroundColor: 'rgba(51, 61, 53, .85)'
        },
        animation: {
            duration: 4000,
            easing: 'easeOutElastic'
        },
        bezierCurveTension: .3,
        pointHitDetectionRadius: 10,
        scaleLabel: 'test'
        // onComplete: createImg
    };

    var myLineChart = new Chart(chartCtx, {
        type: "line",
        data: waterChartData,
        options: options
    });

};