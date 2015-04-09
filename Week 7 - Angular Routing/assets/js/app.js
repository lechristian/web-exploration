var baseUrl = 'http://localhost:3000/';

var app = angular.module('outcomes', ['ui.router', 'ngTouch']);

app.config(['$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: '/', // Required
                templateUrl: './views/pages/home.html', // Required
                data: {
                    name: 'Hello',
                    pageTitle: 'Home'
                }
            })
            .state('about', {
                url: '/about',
                templateUrl: './views/pages/about.html',
                data: {
                    name: 'World',
                    pageTitle: 'About'
                }
            })
                .state('about.age', {
                    url: '/age',
                    templateUrl: './views/pages/about-age.html',
                    data: {
                        name: 'Age',
                        pageTitle: 'About - Age'
                    }
                })
                .state('about.home', {
                    url: '/home',
                    templateUrl: './views/pages/about-home.html',
                    data: {
                        name: 'Home',
                        pageTitle: 'About - Home'
                    }
                });
    }
]);

app.run(['$rootScope',
    '$state',
    '$location',
    '$window',
    function ($rootScope, $state, $location, $window) {
        $rootScope.$state = $state;

        // Check if page requires login
        $rootScope.$on('$stateChangeStart',
            function (event, toState, toParams, fromState, fromParams) {
                var toName = toState.data.name;
                var fromName = fromState.data.name;

                console.log(toName + ' ' + fromName);
            }
        );

        // Get Page Title on successful page change
        $rootScope.$on('$stateChangeSuccess', function (event, toState) {
            $rootScope.currentPage = toState.name;

            if (toState.data && toState.data.pageTitle) {
                $rootScope.pageTitle = toState.data.pageTitle;
            } else {
                $rootScope.pageTitle = 'Title';
            }
        });

        // Scroll to top of page on page change
        $rootScope.$on('$viewContentLoaded', function() {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        });
    }
]);

app.controller('MainCtrl', ['$scope', '$state', function($scope, $state) {

}]);

app.controller('HomeCtrl', ['$scope', '$state', function($scope, $state) {
    $scope.ages = [1, 2, 3, 4, 5, 6, 7];

    $scope.addAge = function() {
        console.log($scope.num);
        console.log($scope.ages);
        $scope.ages.push($scope.num);
        $scope.num = null;
    };
}]);

app.controller('AboutCtrl', ['$scope', function($scope) {
    $scope.names = ['Sarah', 'Zach', 'Patrick', 'Stevie', 'Eric', 'Jeff', 'Daniel'];
}]);
