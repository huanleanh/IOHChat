angular.module('IOHChat')
    .directive('addinfouser', addInfoUser);

function addInfoUser() {
    return {
        restrict: 'E',
        templateUrl: "views/pi/add_edit_records/add_info_user.html"
    };
}



    