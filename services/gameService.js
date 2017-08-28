angular
.module("mistApp")
.service("gameService", function ($http, $state) {

  var _games = [];
  var _gamesId = 7;

  this.getGames = function(cb) {
    if (_games.length == 0) {
      $http.get("../db/games.json")
        .success(function (response) {
          _games = response
          cb(_games)
        })
        .error(function (error) {
          console.log(error);
        })
    }
    else {
      cb(_games)
    }
  }

  this.getGameById = function(id, cb) {
    if (id === undefined || id === null || id === "") {
      var game = {
        gameId: "",
        gameName: "",
        gameSource: "",
        gameImage: "",
        gameDescription: "",
        gameAuthor: "",
        gameLastUpdated: "",
        gameCost: "",
        addToCart: "",
        purchased: ""
      }
      cb(game)
    }
    else {
      for (var i = 0; i < _games.length; i++) {
        if (_games[i].gameId == id) {
          cb(_games[i])
        }
      }
    }
  }

  this.buyGames = function() {
    for(var i = 0; i < _games.length; i++) {
      if (_games[i].addToCart == true) {
        _games[i].purchased = true
        _games[i].addToCart = false
        $state.go("home")

      }
    }
  }

  this.addToCart = function(game) {
    for(var i = 0; i < _games.length; i++) {
      if (_games[i].gameId == game.gameId) {
      
        _games[i].addToCart = true;

        $state.go("store")
      }
    }
  }

  this.removeFromCart = function(game) {
    for(var i = 0; i < _games.length; i++) {
      if (_games[i].gameId == game.gameId) {
        _games[i].addToCart = false;
        $state.go("cart")
      }
    }
  }

  this.backFromCart = function() {
    $state.go("store")
  }

})