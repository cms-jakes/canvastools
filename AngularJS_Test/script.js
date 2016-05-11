// <reference path="angular.min.js" />

var myApp = angular 
                .module('myModule', [])
                .controller('myController', ['$scope',function ($scope) {
                    $scope.message = 'message';
                    $scope.getCode = function(){
                        $scope.embedCode = $scope.message + ' added';
                    }
                }
            )
