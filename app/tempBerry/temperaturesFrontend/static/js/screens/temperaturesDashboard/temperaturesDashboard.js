(function() {
    'use strict';

    var
        module = angular.module('screens');

    module.component('temperaturesDashboard', {
        templateUrl: 'js/screens/temperaturesDashboard/temperaturesDashboard.html',
        controller: 'TemperaturesDashboardController',
        controllerAs: 'vm',
        bindings: {
        }
    });

    module.controller('TemperaturesDashboardController', function(
        $scope, $timeout, temperaturesRestService, roomsRestService
    ) {

        var
            vm = this,
            timer = undefined;

        var init = function() {

        };

        init();

        $scope.$on('$destroy', function() {
            $timeout.cancel(timer);
        });

        vm.entries = [];

        var getLatestData = function() {
            roomsRestService.getLatest().$promise.then(function (response) {
                vm.entries = response;
            });

            timer = $timeout(getLatestData, 10000);
        };

        getLatestData();
    });
})();
