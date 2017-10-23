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
					$scope.messageStyle = "color:red;";
				}
				else{
					if(getLen($scope.lunch) <= 3){
						$scope.message = "Enjoy!";
						$scope.messageStyle = "color:green;";
					}
					if(getLen($scope.lunch) > 3){
						$scope.message = "Too much!";
						$scope.messageStyle = "color:green;";
					}
				}
				
			}
		}

		function getLen(str){
			var temp = str.split(',');
			var count = 0;
			for(var i = 0; i < temp.length; i++){
				if(temp[i] != "")
					count++;
			}
			return count;
		}

})();