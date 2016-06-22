// retrieving the ‘udemyAdmin’ module and registering a controller within it
angular.module('udemyAdmin').controller('articleCtrl', function($scope, pageSize){
  var title = "Learn AngularJS ";
  // $scope is a core AngularJS component available for injection to controllers, we add properties and behaviors we want to be available for use in our HTML.
  /*$scope.title = title;
  $scope.getTitle = function(){
    return title;
  };*/

  // code for ng-repeat
  $scope.articles = [
    {'title':'five pint and somemore'},
    {'title':'night shifts @ IBM'},
    {'title':'numerous mistakes of my lyf'},
    {'title':'2 cities'},
    {'title':'resolution 4 2020'}
  ];
  // getting and setting data for ng-model in index.html
  $scope.numArticles = pageSize;
});