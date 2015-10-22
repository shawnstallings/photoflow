var app = angular.module('myApp', ['ngAnimate']);

app.controller('MyCtrl', ['$scope', '$timeout', '$q', '$http', function($scope, $timeout, $q, $http) {
	function wait() {
		return $q(function(resolve, reject) {
			$timeout(function() {
				resolve();
			}, 2000);
		});
	}

	function emptyImageData() {
		$scope.imageData = [];		
	}

	$scope.searchMsg = false;
	$scope.successMsg = false;
	$scope.errorMsg = false;

	$scope.search = function(searchInput) {
		emptyImageData();
		$scope.searchMsg = true;
		$scope.successMsg = false;
		$scope.errorMsg = false;
		$scope.data.searchValue = searchInput || null;
		$scope.data.searchTag = null;
		var searchTag = $scope.data.searchTag;
		var url = 'https://api.instagram.com/v1/tags/' + searchInput + '/media/recent';
		var request = {
			callback: 'JSON_CALLBACK',
			client_id: '60cb16fb5fa2446cb4e25add2fd87c94'
		};
		$http({
			method: 'JSONP',
			url: url,
			params: request			
		})
		.success(function(results) {
			console.log(results);
			$scope.imageData = results.data;
		})
		.error(function() {
			console.log("error no data");
			$scope.searchMsg = false;
			$scope.errorMsg = true;
		})
		.then(wait)
		.then(function() {
			$scope.searchMsg = false;
			$scope.successMsg = true;
		})
		
	};

}]);