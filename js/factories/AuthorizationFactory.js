angular.module('IOHApp').factory('AuthorizationFactory', AuthorizationFactory);


function AuthorizationFactory($http, $localStorage, Base64Factory) {
    let authorizationFactory = {};
    authorizationFactory.login = login;
    authorizationFactory.logout = logout;
    authorizationFactory.identify = identify;
    const server = 'http://gateway.ioh.cloud:3000/api';

    return authorizationFactory;
    
    function login(email, password, callback) {
        let token = Base64Factory.base64EncodingUTF8(email + ':' + password, undefined);

        // store username and token in local storage to keep user logged in between page refreshes
        $localStorage.currentUser = { email: email, token: token };

        // add jwt token to auth header for all requests made by the $http service
        $http.defaults.headers.common.Authorization = 'Basic ' + token;

        $http({
            method: 'get',
            url: server + '/users/login',

        }).then(
            function success(response) {
                $http({
                    method: 'get',
                    url: server + '/users/me',
                }).then(
                    function (response) {
                        console.log(response);
                        $localStorage.piUser = response.data;
                        $localStorage.userId = response.data.id;
                        callback(true);
                    },
                    function (error) {
                        console.log(error)
                    }
                );
            },
            function error(response) {
                logout();
                callback(false);
            }
        );
    }

    function identify(callback) {
        $http({
            method: 'get',
            url: server + '/users/me',
        }).then(
            function (response) {
                $localStorage.piUser = response.data;
                $localStorage.userId = response.data.id;
                callback(true);
            },
            function (error) {
                callback(false);
            }
        );
    }
    
    function logout() {
        delete $localStorage.currentUser;
        delete $localStorage.piUser;
        delete $localStorage.newProject;

        $http.defaults.headers.common.Authorization = '';
    }
}

