(function() {
    'use strict';

    var
        module = angular.module('screens');

    module.component('temperaturesDetail', {
        templateUrl: 'js/screens/temperaturesDetail/temperaturesDetail.html',
        controller: 'TemperaturesDetailController',
        controllerAs: 'vm',
        bindings: {
            sensorId: '<'
        }
    });

    module.controller('TemperaturesDetailController', function($scope, temperaturesRestService) {

        var
            vm = this;


        vm.data = [];

        vm.chartOptions =  {
            chart: {
                type: 'lineChart',
                height: '800',
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 100,
                    left: 55
                },
                x: function(d){ return d.x; },
                y: function(d){ return d.y; },
                useInteractiveGuideline: true,
                dispatch: {
                    stateChange: function(e){ console.log("stateChange"); },
                    changeState: function(e){ console.log("changeState"); },
                    tooltipShow: function(e){ console.log("tooltipShow"); },
                    tooltipHide: function(e){ console.log("tooltipHide"); }
                },
                yDomain: [10, 80],
                xAxis: {
                    axisLabel: 'Time (h)',
                    tickFormat: function(d) {
                        return d3.time.format('%x %H:%M')(new Date(d))
                    },
                    rotateLabels: 45,
                    showMaxMin: false
                },
                yAxis1: {
                    axisLabel: 'Temperature (°C)',
                    tickFormat: function(d){
                        return d3.format('.01f')(d);
                    },
                    axisLabelDistance: -10
                },
                yAxis2: {
                    axisLabel: 'Relative Humidity (%)',
                    tickFormat: function(d){
                        return d3.format('.01f')(d);
                    },
                    axisLabelDistance: -10
                },
                callback: function(chart){
                    console.log("!!! lineChart callback !!!");
                }
            },
            title: {
                enable: true,
                text: 'Temperatures'
            },
            // subtitle: {
            //     enable: true,
            //     text: 'Subtitle for simple line chart. Lorem ipsum dolor sit amet, at eam blandit sadipscing, vim adhuc sanctus disputando ex, cu usu affert alienum urbanitas.',
            //     css: {
            //         'text-align': 'center',
            //         'margin': '10px 13px 0px 7px'
            //     }
            // },
            // caption: {
            //     enable: true,
            //     html: '<b>Figure 1.</b> Lorem ipsum dolor sit amet, at eam blandit sadipscing, <span style="text-decoration: underline;">vim adhuc sanctus disputando ex</span>, cu usu affert alienum urbanitas. <i>Cum in purto erat, mea ne nominavi persecuti reformidans.</i> Docendi blandit abhorreant ea has, minim tantas alterum pro eu. <span style="color: darkred;">Exerci graeci ad vix, elit tacimates ea duo</span>. Id mel eruditi fuisset. Stet vidit patrioque in pro, eum ex veri verterem abhorreant, id unum oportere intellegam nec<sup>[1, <a href="https://github.com/krispo/angular-nvd3" target="_blank">2</a>, 3]</sup>.',
            //     css: {
            //         'text-align': 'justify',
            //         'margin': '10px 13px 0px 7px'
            //     }
            // }
        };


        temperaturesRestService.query({'sensor_id': vm.sensorId}).$promise.then(
            function success(response) {
                var temperatures = [];
                var humidities = [];

                for (var i = 0; i < response.length; i++) {
                    if (i % 3) {
                        temperatures.push(
                            {
                                x: moment(response[i].created_at),
                                y: response[i].temperature
                            }
                        );
                        humidities.push(
                            {
                                x: moment(response[i].created_at),
                                y: response[i].humidity
                            }
                        );
                    }
                }

                vm.data = [
                    {
                        yAxis: 1,
                        values: temperatures,      //values - represents the array of {x,y} data points
                        key: 'Temperatures', //key  - the name of the series.
                        color: '#ff7f0e',  //color - optional: choose your own line color.
                        strokeWidth: 2,
                        classed: 'dashed'
                    },
                     {
                        yAxis: 2,
                        values: humidities,      //values - represents the array of {x,y} data points
                        key: 'Humidity', //key  - the name of the series.
                        color: '#135dab',  //color - optional: choose your own line color.
                        strokeWidth: 2,
                        classed: 'dashed'
                    },
                ];
                // for (var i = 0; i < response.length; i++) {
                //     var xy = response[i];
                //     vm.data.push(xy.temperature);
                //     vm.labels.push(moment(xy.created_at));
                // }
            },
            function rejection(error) {

            }
        );

    });
})();
