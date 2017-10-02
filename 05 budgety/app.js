// BUDGET CONTROLLER
var budgetController = (function() {})();

// UI CONTROLLER
var uiController = (function() {})();

//DATA CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
  var ctrlAddItem = function() {
    // 1. get the field input data
    // 2. Add item to the budget controller
    // 3. Add item to the UI
    // 4. Calculate de budget
    // 5. Display the budget on the UI
  };

  document.querySelector(".add__btn").addEventListener("click", ctrlAddItem());

  document.addEventListener("keypress", function(event) {
    if (event.keycode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(budgetController, uiController);
