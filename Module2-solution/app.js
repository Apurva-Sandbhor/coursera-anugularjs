(function (){

"use strict";

angular.module("ShoppingListCheckOff", [])
.controller("ToBuyShoppingController", ToBuyShoppingController)
.controller("AlreadyBoughtShoppingController", AlreadyBoughtShoppingController)
.service("ShoppingListCheckOffService", ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
	var list = this;
	list.items = ShoppingListCheckOffService.getToBuyItems();
	list.move = function(itemIndex){
		ShoppingListCheckOffService.moveItem(itemIndex);
	}

}



AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
	var list = this;
	list.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService (){
	var service = this;

	var toBuyList = [{ name: "cookies", quantity: 10 }, { name: "apples", quantity: 2 }, { name: "banana", quantity: 7 }, { name: "oranges", quantity: 4 },{ name: "crackers", quantity: 5 }, { name: "chips", quantity: 2 }];
	var boughtList = [];

	service.moveItem = function(itemIndex){
		var item = toBuyList[itemIndex];
		toBuyList.splice(itemIndex, 1);
		boughtList.push(item)

	};

	service.getToBuyItems = function(){
		return toBuyList
	};

	service.getBoughtItems = function(){
		return boughtList
	}

};


})();