(function () {
'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyShoppingController', ToBuyShoppingController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOff', ShoppingListCheckOffService);

    ToBuyShoppingController.$inject = ['ShoppingListCheckOff'];
    function ToBuyShoppingController(ShoppingListCheckOff){
    
        var buyList = this;

        buyList.items= ShoppingListCheckOff.getItemsToBuy();

        buyList.bought = function (itemIndex) {
          ShoppingListCheckOff.bought(itemIndex);
        }   
    } 

    AlreadyBoughtController.$inject = ['ShoppingListCheckOff'];
    function AlreadyBoughtController(ShoppingListCheckOff){
      var boughtList=this;
      boughtList.items=ShoppingListCheckOff.getItemsBought();
    
    }

    function ShoppingListCheckOffService() {
      var service = this;

      var shoppingList = [
          { name: "Cookies",  quantity: "10" },
          { name: "Cookies1", quantity: "11" },
          { name: "Cookies2", quantity: "22" },
          { name: "Cookies3", quantity: "33" },
          { name: "Cookies4", quantity: "44" },
          { name: "Cookies5", quantity: "55" }
      ];
  

      var itemsBuy = shoppingList; 
      var itemsBought=[];          
      
      service.bought = function (itemIndex) {
        var item = {
        
        name: itemsBuy[itemIndex].name,
        quantity: itemsBuy[itemIndex].quantity
      };

        itemsBought.push(item); 
        itemsBuy.splice(itemIndex, 1); 
      };

     
    service.getItemsToBuy = function () {
      return itemsBuy;
    };

    service.getItemsBought = function () {
      return itemsBought;
    };
  }

})();