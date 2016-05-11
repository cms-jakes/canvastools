//<reference path="angular.min.js" />

(function(angular) {
  'use strict';
angular.module('scopeExample', [])
  .controller('MyController', ['$scope', function($scope) {
    $scope.url = '';
    $scope.embedCode = 'Paste your shared Drive Folder URL in the box above to get the embed code.'
    $scope.getCode = function() {
        $scope.slice1 = $scope.url.search("=")+1;
        $scope.testAMP = $scope.url.search("&");
        if ($scope.testAMP >0){
            $scope.slice2 = $scope.textAMP;
        }else{
            $scope.slice2 = $scope.url.length;
        }
        $scope.searchSS = $scope.url.search("spreadsheet");
        $scope.searchDoc = $scope.url.search("docs");
        $scope.searchPres = $scope.url.search("presentation");
        $scope.folderID = $scope.url.slice($scope.slice1,$scope.slice2);
        $scope.testID = $scope.folderID.search("://");
        if ($scope.searchDoc < 0 && $scope.searchPres < 0 && $scope.searchSS < 0 && $scope.testID <0){
         $scope.embedCode = '<iframe src="https://drive.google.com/embeddedfolderview?id=' +$scope.folderID + '#list" width="100%" height="600" frameborder="0">Loading...</iframe>' ;    
        } else {
            $scope.embedCode = 'Your Folder Embed Code cannot be genereated.  Please make sure you have shared the Google Drive FOLDER with your domain or anyone with the link. Try Again.  {'+ $scope.searchDoc + "," + $scope.searchPres + ","+ $scope.searchSS + ","+ $scope.testID+"}";
        }
        
        
        
    };
  }]);
})(window.angular);