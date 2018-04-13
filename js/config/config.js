/**
 * @author vungho
 * @param $stateProvider
 * @param $urlRouterProvider
 * @param $ocLazyLoadProvider
 * @param IdleProvider
 * @param KeepaliveProvider
 */
function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, IdleProvider, KeepaliveProvider) {
    // Configure Idle settings
    IdleProvider.idle(5); // in seconds
    IdleProvider.timeout(120); // in seconds

    $urlRouterProvider.otherwise("/chat/conversation");

    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: false
    });

    $stateProvider
        .state('public', {
            abstract: true,
            templateUrl: "view/common/public.html"
        })

        .state('login', {
            parent: 'public',
            url: '/login',
            templateUrl: "view/login/login.html",
            data: { pageTitle: 'Register', specialClass: 'gray-bg' }
        })

        .state('accessdenied', {
            parent: 'public',
            url: '/accessdenied',
            templateUrl: "view/accessdenied/accessdenied.html",
            data: { pageTitle: 'Login' }
        })


        .state('chat', {
            abstract: true,
            url: "/chat",
            templateUrl: "view/common/chat.html"
        })


        .state('chat.conversation', {
            url: '/conversation',
            templateUrl: "view/conversation/conversation.html",
            data: { pageTitle: 'Conversation' }
        })


        .state('chat.contacts', {
            url: '/contacts',
            templateUrl: "view/contacts/contacts.html",
            data: { pageTitle: 'Contacts' }
        })

        .state('chat.profile', {
            url: '/profile',
            templateUrl: "view/profile/profile.html",
            data: { pageTitle: 'Profile' }
        })
}

angular
    .module('IOHChat')
    .config(config)
    .run(run);

function run($rootScope, $state, $stateParams, $http, $location, $localStorage) {
    $rootScope.$state = $state;

    // keep user logged in after page refresh
    if ($localStorage.currentUser) {
        $http.defaults.headers.common.Authorization = 'Basic ' + $localStorage.currentUser.token;
    }

    // redirect to login page if not logged in and trying to access a restricted page
    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        let publicPages = ['/login', '/viewform'];
        let restrictedPage = publicPages.indexOf($location.path()) === -1;
        if (restrictedPage && !$localStorage.currentUser) {
            $location.path('/login');
        }
    });
}