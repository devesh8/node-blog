var app = angular.module('BlogApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/admin/templates/index.html",
        controller : "MainController"
    })
    .when("/addPost", {
        templateUrl : "/admin/templates/posts.html",
        controller : "PostController"
    })
    .when("/managePost", {
        templateUrl : "/admin/templates/mposts.html",
        controller : "ManagePostController"
    })
    .when("/addCategory", {
        templateUrl : "/admin/templates/addcategory.html",
        controller : "CategoryController"
    })
    .when("/404", {
        templateUrl : "/admin/templates/error.html",
        controller : "ErrorController"
    })
    .otherwise({
    	redirectTo : '/404'
    })
});

app.controller('MainController', ['$scope', function($scope){
	$scope.title = "HomePage";
}]);

app.controller('PostController', ['$scope', 'APIService', function($scope, APIService){
	$scope.title = "Add Post";
    $scope.message = false;
    $scope.addPost = function(post) {
        console.log(post);
        APIService.addPost(post).then(function(response) {
            if(response){
                $scope.message = true;
            }
        },function(error) {
            if(error){
                $scope.message = false;
            }
        })
    };
        APIService.getCategory().then(function(response) {
            if (response) {
                $scope.category = response.data;
                console.log($scope);
            }
        })
}]);

app.controller('ManagePostController', ['$scope', function($scope){
    $scope.title = "Manage Post";
}]);

app.controller('CategoryController', ['$scope', 'APIService', function($scope, APIService){
	$scope.title = "Add Category";
    $scope.addCategory = function(category) {
        APIService.addCategory(category).then(function(response) {
            if(response){
                $scope.message = "Category Added Successfully."
            }
        })
    }
}]);

app.controller('ErrorController', ['$scope', function($scope){
	$scope.title = "Page Not Found";
}]);

app.service('APIService', ['$http',function($http) {
    this.addCategory = function(data) {
        return $http({
            method: 'POST',
            url:'/api/category',
            data: data
        })
    };
    this.addPost = function(data) {
        return $http({
            method: 'POST',
            url:'/api/post',
            data: data
        })
    }
    this.getCategory = function(data) {
        return $http({
            method: 'GET',
            url:'/api/category'
        })
    }
}]);
