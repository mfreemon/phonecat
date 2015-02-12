'use strict';


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
phonecatController.controller('PhoneListCtrl',['$scope', 'Phone', 
	function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = "age";
}]);

phonecatController.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone){
    $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl){
      $scope.mainImageUrl = imageUrl;
    };
  }]);



//console.log(access);


