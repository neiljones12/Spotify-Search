// App
var app = angular.module('app', []);


// App controller
app.controller('appController', ['$scope', '$http', function ($scope, $http) {
	
    $scope.init = function () {
        $scope.search = "";
        $scope.invalid = false;
        $scope.showResults = false;
        $scope.results = [];
    };

    $scope.searchSpotify = function () {
        if ($scope.search == "")
        {
            $scope.invalid = true;
        }
        else
        {
            $http({
                url: "/data",
                method: "GET",
                params: { search: $scope.search }
            }).then(function successCallback(response) { 
                $scope.showResults = true;
                $scope.results = response;
            }, function errorCallback(response) {
                console.log(response);
            });;
        }
    };

}]);