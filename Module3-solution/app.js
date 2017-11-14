(function (){

"use strict";

angular.module("ShoppingListCheckOff", [])
.controller("NarrowItDownController", NarrowItDownController)
.service("MenuSearchService", MenuSearchService)
.directive("foundItems", FoundItemsDirective);


NarrowItDownController.$inejct = ['MenuSearchService']
function NarrowItDownController(MenuSearchService){
	var ctrl = this;
	ctrl.searchTerm = "";
	ctrl.narrowIt = function(){
		if(ctrl.searchTerm === ""){
			ctrl.items = [];
			return;
		}
		var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
		promise.then(function(response){
			ctrl.items = response;
		})
		.catch(function(err){
			console.log("Error", err);
		})

		ctrl.removeItem = function(index){
			ctrl.items.splice(index, 1);
		}
	}
}

MenuSearchService.$inject = ['$http']
function MenuSearchService($http){
	var service = this;

	service.getMatchedMenuItems = function(searchTerm){
		return $http({
			url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
		}).then(function(result){
			var items = result.data.menu_items;
			var foundItems = [];
			for(var i = 0; i < items.length; i++){
				if(items[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0){
					foundItems.push(items[i]);
				}
			}
			return foundItems;
		});
	}
}

function FoundItemsDirective(){
	var ddo = {
		templateUrl: 'foundItems.html',
		scope: {
			found: '<',
			onRemove: '&'
		},
		controller: FoundItemsDirectiveController,
		controllerAs: 'list',
		bindToController: true
	};
	return ddo;
}

function FoundItemsDirectiveController(){
	var list = this;
	list.isEmpty = function(){
		return list.found != undefined && list.found.length === 0;
	}
}

})();