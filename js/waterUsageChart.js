/**
 * Created by tofie on 4/24/2016.
 */

window.waterData = function(){                                                                                          //Water data function.

    var data = [{                                                                                                       //Data for graph.
            label: '2013',                                                                                              //2013 Set
            gal: [1750, 1850, 2740, 3030, 4200, 4660, 5020, 4780, 4010, 3720, 2560, 1880]
        },
        {
            label: '2014',                                                                                              //2014 Set
            gal: [2190, 1620, 1840, 2280, 3560, 4160, 4310, 3980, 3420, 2880, 1840, 1500]
        },
        {
            label: '2015',                                                                                              //2015 Set
            gal: [1640, 1540, 2200, 2390, 2880, 3150, 3420, 3440, 3280, 2880, 1740, 1460]
        }];

    var avgMonthSave = function(){                                                                                      //Function to find the average monthly gallons saved to insert into web page.

        var yearlyAvg = [];                                                                                             //Setup average use array.

        for (var i = 0; i<data.length; i++){                                                                            //Iterate thought the data sets.

            var avg,                                                                                                    //Setup variables for current iteration.
                total = 0;


            for (var x = 0; x<data[i].gal.length; x++){                                                                 //Iterate through the gal data.
                total+=data[i].gal[x];                                                                                  //Add each gal amount to the total.
            }

            avg = total/data[i].gal.length;                                                                             //Average out the total.

            yearlyAvg.push(Math.round(avg));                                                                            //Add the average to the yearly average amount.
        }

        return yearlyAvg[0]-yearlyAvg[2];                                                                               //Subtract 2013's average from 2015's average.
    };

    var avgSaved = document.createTextNode(' ' + avgMonthSave() + ' gallons a month.');                                                          //Concat text to insert into website.

    document.getElementById('waterConsumption').children[1].appendChild(avgSaved);                                                              //Add to the end of the child paragraph of the waterConsumption element.

    return data;                                                                                                        //Return the data when function is called.
};

window.waterChartInit = function () {                                                                                   //Water Chart initialization function.

    var chartCan = document.getElementById("waterChart");                                                               //Get the water chart canvas.
    var chartCtx = chartCan.getContext("2d");                                                                           //Get the water charts context.
    var data = waterData();                                                                                             //Get the water data.

    var waterChartData = {                                                                                              //waterChart Data Setup
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],                   //Create labels for the bottom of the chart.
        datasets: [                                                                                                     //Array of dataset objects.
            {
                label: data[0].label,                                                                                   //Pull label from data.
                backgroundColor: 'rgba(63, 191, 150, 0.3)',                                                             //Define the background color.
                borderColor: 'rgb(63, 191, 150)',                                                                       //Define the border color.
                pointBackgroundColor: 'rgb(63, 191, 150)',                                                              //Define the point background color.
                pointBorderColor: '#fff',                                                                               //Define the point border color.
                pointHoverRadius: 6,                                                                                    //Define the radius of the point when hovered.
                pointHoverBackgroundColor: '#fff',                                                                      //Define the point background color when hovered.
                pointHoverBorderColor: 'rgb(63, 191, 150)',                                                             //Define the point border color when hovered.
                pointHoverBorderWidth: 3,                                                                               //Define the point border width when hovered.
                data: data[0].gal                                                                                       //Pull the data points from the data.
            },
            {
                label: data[1].label,                                                                                   //Repeat above for the second data set.
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
                label: data[2].label,                                                                                   //Repeat above for the third data set.
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

    var options = {                                                                                                     //Set the options for the chart.
        tooltips: {                                                                                                         //Options for the tooltips.
            backgroundColor: 'rgba(51, 61, 53, .85)'                                                                        //Set the background color for the tooltips.
        },
        animation: {                                                                                                        //Options for the chart animation.
            duration: 4000,                                                                                                 //Set the duration to 4000 ms.
            easing: 'easeOutElastic'                                                                                        //Set the animation style.
        },
        bezierCurveTension: .3,                                                                                             //Set the tension of the curves.
        pointHitDetectionRadius: 10                                                                                        //Set how far away the mouse can be before the point considers itself hovered.
    };

    var waterChart = new Chart(chartCtx, {                                                                              //Setup the new chart, passing in the context and a object with the info.
        type: "line",                                                                                                       //Set the type to line.
        data: waterChartData,                                                                                               //Pass in the water chart data.
        options: options                                                                                                    //Pass in the options.
    });

};