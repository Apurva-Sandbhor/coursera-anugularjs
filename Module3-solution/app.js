(function (){

"use strict";

angular.module("ShoppingListCheckOff", [])
.controller("NarrowItDownController", NarrowItDownController)
.service("MenuSearchService", MenuSearchService)
.directive("foundItems", FoundItemsDirective);


NarrowItDownController.$inejct = ['MenuSearchService']
function NarrowItDownController(MenuSearchService){

}

MenuSearchService.$inject = ['$http']
function MenuSearchService($http){

}

function FoundItemsDirective(){
	
}

})();