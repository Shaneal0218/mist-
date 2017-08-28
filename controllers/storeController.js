angular
.module("mistApp")
.controller("storeController", function($scope, $state, $stateParams, gameService) {

    var _store = storeService.getStoreById($stateParams.id)
    $scope.store = _store

   storeService.getStore(function(response) {
       $scope.store = response
   })

    $scope.gameSelected = undefined;
    $scope.myGameImg = undefined;
    $scope.gamePicked = false;

    $scope.selectedGame = function(game) {
        $scope.gameSelected = game;
        $scope.myGameImg = game.gameImage;
        $scope.gamePicked = true;
    }


    $scope.deleteSelectedGame = function(game) {
        storeService.deleteSelectedGame(game.gameId);

        $state.go("home")
    }

}) 