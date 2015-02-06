
var phonecatController = angular.module('phonecatController', []);

/** One method of preventing depreciation of services during minification issues using $inject**/
//function PhoneListCtrl($scope, $http){
//    $http.get('phones/phones.json').success(function(data){
//        $scope.phones = data;
//    });
//    $scope.orderProp = 'age';
//}
//PhoneListCtrl.$inject = ['$scope', '$http'];
//phonecatController.controller('PhoneListCtrl', PhoneListCtrl);




/** another means of preventing depreciation of services during minification issues**/
phonecatController.controller('PhoneListCtrl',['$scope', '$http', function($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
        $scope.phones = data;
    });
    $scope.orderProp = "age";
}]);

phonecatController.controller('PhoneDetailCtrl', ['$scope','$routeParams', '$http', function($scope, $http, $routeParams){
    $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data){
        $scope.phone = data;
    });
}]);

