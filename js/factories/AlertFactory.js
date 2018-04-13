angular.module('IOHApp').factory('AlertFactory', AlertFactory);

function AlertFactory($localStorage) {

    let alertFactory = {};
    alertFactory.createSuccessAlert = createSuccessAlert;
    alertFactory.createErrorAlert = createErrorAlert;
    alertFactory.createFailAlert = createFailAlert;

    return alertFactory;

    function createSuccessAlert(text) {
        swal(AlertTranslation[$localStorage.langKey.toString()].success, text, "success");
    }

    function createErrorAlert(text) {
        swal(AlertTranslation[$localStorage.langKey.toString()].error, text, "error");
    }

    function createFailAlert(text) {
        swal(AlertTranslation[$localStorage.langKey.toString()].fail, text, "error");
    }
}