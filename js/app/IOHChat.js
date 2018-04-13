(function () {
    angular.module('IOHChat', [
        'ui.router',                    // Routing
        'oc.lazyLoad',                  // ocLazyLoad
        'pascalprecht.translate',       // Angular Translate
        'ngIdle',                       // Idle timer
        'ngSanitize',                    // ngSanitize
        'ngStorage',
        'ngRoute'
    ])
})();