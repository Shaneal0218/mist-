var app = angular.module("mistApp", ["ui.router"])

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state("home", {
            url: "/home",
            templateUrl: "./views/home.html",
            controller: "gameController"
        })

        .state("gameSnake", {
            url: "/game/HTML5_Snake",
            templateUrl: "./games/snake/snake.html",
            controller: "snakeController"
        })

        .state("gameBallDrop", {
            url: "/game/BallDrop",
            templateUrl: "./games/ballDrop.html"
        })

        .state("gameTicTacToe", {
            url: "/game/TicTacToe",
            templateUrl: "./games/ticTacToe.html"
        })

        .state("gameHangMan", {
            url: "/game/Hangman",
            templateUrl: "./games/hangman.html"
        })

        .state("gameMindGuesser", {
            url: "/game/Mindguesser",
            templateUrl: "./games/mindGuesser.html"
        })
        
        .state("gameReflexTester", {
            url: "/game/Reflextester",
            templateUrl: "./games/reflexTester.html"
        })

        .state("gameAgeCounter", {
            url: "/game/Agecounter",
            templateUrl: "./games/ageCounter.html"
        })

        .state("gamePraiser", {
            url: "/game/Priaser",
            templateUrl: "./games/praiser.html"
        })

        .state("gameRussianRoulette.html", {
            url: "/game/RussianRoulette",
            templateUrl: "./games/russianRoulette.html"
        })
        

        .state("store", {
            url: "/store",
            templateUrl: "./views/store.html",
            controller: "gameController"
        })

        .state("cart", {
            url: "/cart",
            templateUrl: "./views/cart.html",
            controller: "gameController"
        })

        .state("storeShow", {
            url: "/store/:id",
            templateUrl: "./views/bought.html",
            controller: "gameController"
        })

        .state("gamesShow", {
            url: "/game/:id",
            templateUrl: "./views/game.html",
            controller: "gameController"
        })

        .state("users", {
            url: "/",
            templateUrl: "./views/users_index.html",
            controller: "usersController"
        })

            .state("newUsers", {
                url: "/users/new",
                templateUrl: "./views/users_form.html",
                controller: "usersController"
            })
            .state("showUsers", {
                url: "/users/:id",
                templateUrl: "./views/users_show.html",
                controller: "usersController"
            })
            .state("editUsers", {
                url: "/users/:id/edit",
                templateUrl: "./views/users_edit.html",
                controller: "usersController"
            })


})