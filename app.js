(function () {
  "use strict";

  angular.module("MsgApp", []).controller("MsgController", MsgController);

  MsgController.$inject = ["$scope"];
  function MsgController($scope) {
    $scope.message = "";
    $scope.menuInput = "";

    $scope.checkTooMuch = function () {
      let s = $scope.menuInput;
      let anz = 0;
      if (s.length > 0) anz++;
      for (let i = 1; i < s.length; i++) {
        if (s.charAt(i) == ",") {
          anz++;
        }
      }
      if (anz == 0) {
        $scope.message = "Please enter data first";
      } else if (anz <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    };
  }
})();
