(function(){
	'use strict';

	angular.module('LunchCheck', [])
		.controller('LunchCheckController', LunchCheckController);

		LunchCheckController.$inject = ['$scope'];

		function LunchCheckController($scope){
			$scope.message = "";

			$scope.checkLunch = function(){
				
				if($scope.lunch == undefined || $scope.lunch == ""){
					$scope.message = "Please enter data first!";
				}
				else{
					var lunch_arr = $scope.lunch.split(',');
					if(lunch_arr.length <= 3){
						$scope.message = "Enjoy!";
					}
					if(lunch_arr.length > 3){
						$scope.message = "Too much!";
					}
				}
				
			}
		}

})();