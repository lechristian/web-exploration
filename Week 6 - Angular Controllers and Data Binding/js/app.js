var app = angular.module('appName', ['ngTouch']);

app.controller('MainCtrl', ['$scope', function($scope) {
    $scope.color = "green";

    $scope.visible = false;

    $scope.hide = function() {
        $scope.visible = true;
    };

    $scope.show = function() {
        $scope.visible = false;
    };
}]);
