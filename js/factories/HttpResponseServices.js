angular.module('IOHApp').factory('HttpResponseServices', HttpResponseServices);

function HttpResponseServices() {
    let checkResponseServices = {};
    checkResponseServices.checkList = checkList;
    checkResponseServices.checkNumber = checkNumber;
    checkResponseServices.checkDataResult = checkDataResult;
    checkResponseServices.getListResult = getListResult;
    checkResponseServices.getNumberResult = getNumberResult;
    checkResponseServices.getDataResult = getDataResult;
    checkResponseServices.getSchemaStruct = getSchemaStruct;

    return checkResponseServices;
    
    function checkList(response) {
        return response.data.list ? true : false;
    }

    function checkNumber(response) {
        if (response.data){
            return true;
        }
        return true;
    }

    function checkDataResult(response) {
        return response.data ? true : false;
    }

    function getListResult(response) {
        if (checkList(response)){
            return {
                list: response.data.list,
                total: response.data.total
            }
        }
        return undefined;
    }

    function getNumberResult(response) {
        return 0;
    }

    function getDataResult(response) {
        if (checkDataResult(response)){
            return response.data
        }
        return {};
    }

    function getSchemaStruct(structs) {
        structs.sort(function (a, b) {
            let create_at_a = new Date(a.created_at);
            let create_at_b = new Date(b.created_at);

            if (create_at_a.getTime() === create_at_b.getTime()) {
                return a.id - b.id;
            }
            return create_at_a.getTime() - create_at_b.getTime();
        });
        return structs[structs.length - 1];
    }
}