angular
    .module("mistApp")
    .controller("usersController", function($scope, $state, $stateParams, usersService) {
        var _user = usersService.getUserById($stateParams.id)
        $scope.user = _user

        $scope.invalidUser = false;

        usersService.getUsers(function(response) {
            $scope.users = response
        })

        if ($stateParams.id === undefined || $stateParams.id === null || $stateParams.id === "") {
            $scope.formHeader = "Create A New User!"
            $scope.submitButton = true;
            $scope.updateButton = false;
        }
        else {
            $scope.formHeader = "Update User"
            $scope.submitButton = false;
            $scope.updateButton = true;
        }

        $scope.addUser = function(user) {
            usersService.addUser(user)
            $state.go("users")
        }

        $scope.updateUser = function(user) {
            usersService.updateUser(user)

            $state.go("home")
        }

        $scope.deleteUser = function() {
            usersService.deleteUser($stateParams.id)
            $state.go("users")
        }

        $scope.validateUser = function(user,password,username) {
            if (usersService.validateUser(user,password,username) === true) {
                $state.go("home")
            } else {
                $scope.invalidUser = true;

            }
        }

        $scope.backFromEdit = function() {
            usersService.backFromEdit();
          }
    })