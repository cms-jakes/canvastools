//<reference path="angular.min.js" />

(function(angular) {
  'use strict';
angular.module('scopeExample', [])
  .controller('MyController', ['$scope', function($scope) {
    $scope.url = '';
    $scope.embedCode = 'Paste your shared Google Drive resource URL in the box above to get the embed code.'
    $scope.getCode = function() {
        $scope.folder = $scope.url.search('id=');
        $scope.file = $scope.url.search('/d/');
        $scope.shared = $scope.url.search("usp=sharing");
        if ($scope.folder > 0){
            $scope.slice1 = $scope.folder + 3;
            if($scope.shared > 0){
                $scope.slice2 = $scope.url.search("usp=sharing")-1
            }else{
                $scope.slice2 = $scope.url.length
            }
        } else {
            if ($scope.file > 0){
                if ($scope.shared >0){
                    $scope.slice1 = $scope.file + 3;
                    $scope.slice2 = $scope.shared - 6;
                }
            }else{
                $scope.slice1 = 0;
                $scope.slice2 = $scope.url.length;
            }
        }
        if ($scope.shared >0){
        }else {
                $scope.slice2 = $scope.url.length;
            }
        $scope.searchSS = $scope.url.search("spreadsheet");
        $scope.searchDoc = $scope.url.search("document");
        $scope.searchPres = $scope.url.search("presentation");
        $scope.folderID = $scope.url.slice($scope.slice1,$scope.slice2);
        $scope.testID = $scope.folderID.search("/");
        if ($scope.searchDoc > 0 && $scope.shared > 0){
            $scope.embedCode = '<iframe src="https://docs.google.com/document/d/'+$scope.folderID +'/preview" width="100%" height="1500px" >Loading...</iframe>';
        }else {
            if($scope.searchPres > 0 && $scope.shared > 0){
                $scope.embedCode = '<iframe src="https://docs.google.com/presentation/d/'+$scope.folderID +'/preview" width="100%" height="700px" >Loading...</iframe>';
            } else {
                if($scope.searchSS > 0 && $scope.shared > 0){
                    $scope.embedCode = '<iframe src="https://docs.google.com/spreadsheets/d/'+$scope.folderID +'/preview" width="100%" height="700px" >Loading...</iframe>';
                }else{
                    if ($scope.testID < 0){
                        $scope.embedCode = '<iframe src="https://drive.google.com/embeddedfolderview?id=' +$scope.folderID + '#list" width="100%" height="600" frameborder="0">Loading...</iframe>'
                    }
                    else {
                        $scope.embedCode = "Not a SHARED Google Resource URL! "; 
                    }
                } 
        }        
    };
  }}]);
})(window.angular);