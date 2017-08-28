angular
.module("mistApp")
.controller("gameController", function($scope, $state, $stateParams, gameService, usersService) {

gameService.getGames(function(games) {
    $scope.games = games
})

  if($stateParams.id == undefined || $stateParams.id == "" || $stateParams.id == null) {
    gameService.getGameById($stateParams.id, function(response) {
        $scope.game = response
    })
  }
  else {
    gameService.getGameById($stateParams.id, function(response) {
        $scope.game = response
    })
  }

  $scope.buyGames = function() {
    gameService.buyGames();
}

$scope.addToCart = function(game) {
  gameService.addToCart(game);
}

$scope.removeFromCart = function(game) {
  gameService.removeFromCart(game);
}

$scope.backFromCart = function() {
  gameService.backFromCart();
}

  $scope.validatedUser = usersService.grabUser();
})