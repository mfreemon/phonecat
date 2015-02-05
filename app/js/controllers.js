
var phonecatApp = angular.module('phonecatApp', []);

/** One method of preventing depreciation of services during minification issues using $inject**/
//function PhoneListCtrl($scope, $http){
//    $http.get('phones/phones.json').success(function(data){
//        $scope.phones = data;
//    });
//    $scope.orderProp = 'age';
//}
//PhoneListCtrl.$inject = ['$scope', '$http'];
//phonecatApp.controller('PhoneListCtrl', PhoneListCtrl);


/** another means of preventing depreciation of services during minification issues**/

phonecatApp.controller('PhoneListCtrl',['$scope', '$http', function($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
        $scope.phones = data;
    });
    $scope.orderProp = "age";
}]);

