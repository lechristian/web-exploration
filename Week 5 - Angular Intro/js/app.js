var app = angular.module('appName', ['ngTouch']);

app.controller('MainCtrl', ['$scope', function($scope) {
    $scope.logForm = function() {
        var info = {
            first: $scope.first,
            last: $scope.last,
            email: $scope.email,
            num: $scope.num
        };

        console.log(info);

        // console.log({
        //     name: $scope.first + ' ' + $scope.last,
        //     email: $scope.email,
        //     num: $scope.num
        // });
    };
}]);
