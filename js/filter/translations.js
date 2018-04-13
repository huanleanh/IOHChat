angular.module('IOHChat').config(config);
function config($translateProvider) {
    $translateProvider
        .translations('en', {
            // Define all menu elements
            DataVisualization: 'Data visualization',


        })
        .translations('vi', {
            // Define all menu elements
            DataVisualization: 'Trực quan hóa dữ liệu',


        });

    $translateProvider.preferredLanguage('en');

}
