var app = angular.module('myApp', []);

app.controller('MyCtrl', function($scope, $http) {
	

	$scope.submit = function() {

		var url = 'https://api.instagram.com/v1/tags/red/media/recent';
		var request = {
			callback: 'JSON_CALLBACK',
			client_id: '60cb16fb5fa2446cb4e25add2fd87c94'
		};
		$http({
			method: 'JSONP',
			url: url,
			params: request			
		})
		.success(function(data) {
			console.log(data);
		})
		.error(function() {
			console.log("error no data");
			//create error message
		})
	};

});