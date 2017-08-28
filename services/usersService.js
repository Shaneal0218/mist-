angular
    .module("mistApp")
    .service("usersService", function ($http, $state) {
        var _users = []
        var _userId = 1
        var myUser = null

        this.getUsers = function (cb) {
            if (_users.length == 0) {
                $http.get("../db/users.json")
                    .success(function (response) {
                        _users = response
                        cb(_users)
                    })
                    .error(function (error) {
                        console.log(error);
                    })
            }
            else {
                cb(_users)
            }
        }

        this.getUserById = function (id) {
            if (id === undefined || id === null || id === "") {
                var user = {
                    userName: "",
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    profilePic: "http://static-resource.np.community.playstation.net/avatar/default/DefaultAvatar.png"
                }
                return user
            }
            else {
                for (var i = 0; i < _users.length; i++) {
                    if (_users[i].id == id) {
                        return _users[i]
                    }
                }
            }
        }

        this.addUser = function (user) {
            user.id = _userId++
            _users.unshift(user)
        }

        this.updateUser = function (user) {
            _users.splice(user.id, 1, user)
        }

        this.validateUser = function (user, password, username) {
            console.log("hi")
            console.log(user)
            console.log(password)
            console.log(username)
            for (var i = 0; i < user.length; i++) {
                if (user[i].password === password && user[i].userName === username) {
                    myUser = user[i];
                    console.log(password)
                    console.log("true")
                    return true;
                }
            }
            return false;
        }

        this.deleteUser = function (userId) {
            for (var i = 0; i < _users.length; i++) {
                if (_users[i].id == userId) {
                    _users.splice(i, 1)
                }
            }
        }

        this.grabUser = function() {
            return myUser
        }

        this.backFromEdit = function() {
            $state.go("home")
          }

    })