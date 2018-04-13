angular.module('IOHApp')
    .service('FormServices', FormServices);

function FormServices($http, $q, ServerUrl, ProjectVa, SectionVa, FormsVa) {
    function Form(){
        let sv = this;

        sv.getListForm = getListForm;
        sv.getFormById = getFormById;
        sv.createForm = createForm;
        sv.updateForm = updateForm;
        sv.deleteForm = deleteForm;

        function getListForm(projectId) {
            let deferred  = $q.defer();

            $http({
                method: 'get',
                url: ServerUrl
                    + '/' + ProjectVa +'/' + projectId
                    + '/' + FormsVa
            }).then(
                function success(response) {
                    if (response.data.total > 10){
                        $http({
                            method: 'get',
                            url: ServerUrl
                            + '/' + ProjectVa +'/' + projectId
                            + '/' + FormsVa + '?limit=' + response.data.total
                        }).then(
                            function success(response) {
                                deferred.resolve(response);
                            },
                            function error(error) {
                                deferred.reject(error)
                            }
                        );
                    }else{
                        deferred.resolve(response);
                    }

                },
                function error(error) {
                    deferred.reject(error)
                }
            );
            return deferred.promise;
        }

        function getFormById(projectId, formId) {
            let deferred  = $q.defer();

            $http({
                method: 'get',
                url: ServerUrl
                + '/' + ProjectVa +'/' + projectId
                + '/' + FormsVa + '/' + formId
            }).then(
                function success(response) {
                    deferred.resolve(response);
                },
                function error(error) {
                    deferred.reject(error)
                }
            );
            return deferred.promise;
        }

        function createForm(projectId, form) {
            let deferred  = $q.defer();

            $http({
                method: 'post',
                url: ServerUrl
                + '/' + ProjectVa +'/' + projectId
                + '/' + FormsVa,
                data: form
            }).then(
                function success(response) {
                    deferred.resolve(response);
                },
                function error(error) {
                    deferred.reject(error)
                }
            );
            return deferred.promise;
        }

        function updateForm(projectId, formId, form) {
            let deferred  = $q.defer();

            $http({
                method: 'put',
                url: ServerUrl
                + '/' + ProjectVa +'/' + projectId
                + '/' + FormsVa + '/' + formId,
                data: form
            }).then(
                function success(response) {
                    deferred.resolve(response);
                },
                function error(error) {
                    deferred.reject(error)
                }
            );
            return deferred.promise;
        }

        function deleteForm(projectId, formId) {
            let deferred  = $q.defer();

            $http({
                method: 'delete',
                url: ServerUrl
                + '/' + ProjectVa +'/' + projectId
                + '/' + FormsVa + '/' + formId
            }).then(
                function success(response) {
                    deferred.resolve(response);
                },
                function error(error) {
                    deferred.reject(error)
                }
            );
            return deferred.promise;
        }

        // ----------------------------------------------------->

        sv.getListSessionForm = getListSessionForm;
        sv.getListSessionFormTmp = getListSessionFormTmp;
        sv.getSessionFormById = getSessionFormById;
        sv.createSessionForm = createSessionForm;
        sv.updateSessionForm = updateSessionForm;
        sv.deleteSessionForm = deleteSessionForm;

        function getListSessionForm(projectId, formId) {
            let deferred  = $q.defer();

            $http({
                method: 'get',
                url: ServerUrl
                + '/' + ProjectVa +'/' + projectId
                + '/' + FormsVa + '/' + formId
                + '/' + SectionVa
            }).then(
                function success(response) {
                    if (response.data.total > 10){
                        $http({
                            method: 'get',
                            url: ServerUrl
                            + '/' + ProjectVa +'/' + projectId
                            + '/' + FormsVa + '/' + formId
                            + '/' + SectionVa
                            + '?limit=' + response.data.total
                            + '&&offset=0'
                        }).then(
                            function success(response) {
                                deferred.resolve(response);
                            },
                            function error(error) {
                                deferred.reject(error)
                            }
                        );
                    }else{
                        deferred.resolve(response);
                    }
                },
                function error(error) {
                    deferred.reject(error)
                }
            );
            return deferred.promise;
        }

        function getListSessionFormTmp(projectId, formId) {
            let deferred  = $q.defer();

            $http({
                method: 'get',
                url: ServerUrl
                + '/' + ProjectVa +'/' + projectId
                + '/sections?form_id=' + formId
            }).then(
                function success(response) {
                    deferred.resolve(response);
                },
                function error(error) {
                    deferred.reject(error)
                }
            );
            return deferred.promise;
        }

        function getSessionFormById(projectId, formId, sessionId) {
            let deferred  = $q.defer();

            $http({
                method: 'get',
                url: ServerUrl
                + '/' + ProjectVa +'/' + projectId
                + '/' + FormsVa + '/' + formId
                + '/' + SectionVa + '/' + sessionId
            }).then(
                function success(response) {
                    deferred.resolve(response);
                },
                function error(error) {
                    deferred.reject(error)
                }
            );
            return deferred.promise;
        }

        function createSessionForm(projectId, formId, session) {
            let deferred  = $q.defer();

            $http({
                method: 'post',
                url: ServerUrl
                + '/' + ProjectVa +'/' + projectId
                + '/' + FormsVa + '/' + formId
                + '/' + SectionVa,
                data: session
            }).then(
                function success(response) {
                    deferred.resolve(response);
                },
                function error(error) {
                    deferred.reject(error)
                }
            );
            return deferred.promise;
        }

        function updateSessionForm(projectId, formId, sessionId, session) {
            let deferred  = $q.defer();

            $http({
                method: 'get',
                url: ServerUrl
                + '/' + ProjectVa +'/' + projectId
                + '/' + FormsVa + '/' + formId
                + '/' + SectionVa + '/' + sessionId,
                data: session
            }).then(
                function success(response) {
                    deferred.resolve(response);
                },
                function error(error) {
                    deferred.reject(error)
                }
            );
            return deferred.promise;
        }


        function deleteSessionForm(projectId, formId, sessionId) {
            let deferred  = $q.defer();

            $http({
                method: 'delete',
                url: ServerUrl
                + '/' + ProjectVa +'/' + projectId
                + '/' + FormsVa + '/' + formId
                + '/' + SectionVa + '/' + sessionId
            }).then(
                function success(response) {
                    deferred.resolve(response);
                },
                function error(error) {
                    deferred.reject(error)
                }
            );
            return deferred.promise;
        }

        // ----------------------------------------------------->

        function success(response, deferred) {
            deferred.resolve(response);
        }

        function error(response, deferred) {
            deferred.reject(response);
        }
    }

    return new Form();
}



