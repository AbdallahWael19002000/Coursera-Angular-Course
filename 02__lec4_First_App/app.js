(function(){
  'use strict';
  angular.module('MyFirstApp',[])
  .controller('control1', function($scope){
    $scope.name="Abdallah Mustafa.";
    $scope.SayHelloWorld=function(){return "Hello World ...";};
    $scope.value = 10;
  })
})();
