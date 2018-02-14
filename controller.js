(function() {
  function FormController(){
    var vm = this;
    vm.todoList = [];
    vm.addToDo = function(task) {
    vm.todoList.push(task);
    }
    vm.removeToDo = function(index) {
    vm.todoList.splice(index, 1);
    }
    // updateInfo = function () {
    // }
  }

  angular
    .module("app")
    .controller("FormController", FormController);
})();
