// Reference app
angular.module('IOHChat')
    .controller('MainCtrl', MainCtrl)
    .controller('translateCtrl', translateCtrl)
    .controller('loginCtrl', loginCtrl)
    .controller('navigationCtrl', navigationCtrl);

// Defined controller
function MainCtrl() {

}

/**
 * translateCtrl - Controller for translate
 */
function translateCtrl($translate, $scope, $localStorage) {
    init();

    function init() {
        if (!$localStorage.langKey){
            $localStorage.langKey = 'en';
        }

        changeLanguage($localStorage.langKey);
    }

    $scope.changeLanguage = changeLanguage;
    function changeLanguage(langKey) {
        $translate.use(langKey);
        $scope.language = langKey;
        $localStorage.langKey = langKey;
    }
}


function loginCtrl($location, AuthorizationFactory) {
    let vm = this;
    vm.login = login;
    vm.error = undefined;

    initController();

    function initController() {
        AuthorizationFactory.logout();
    }

    function login() {
        vm.loading = true;
        AuthorizationFactory.login(vm.email, vm.password, function (result) {
            if (result === true){
                vm.error = undefined;
                $location.path('/pi/datavisualization')
            }else{
                vm.error = 'Username or password is incorrect';
                vm.loading = false;
            }
        })
    }
}

function navigationCtrl($scope, $localStorage) {
    $scope.piUser = {};

    init();

    function init() {
        $scope.piUser = $localStorage.piUser;
    }
}

