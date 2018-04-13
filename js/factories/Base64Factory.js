angular.module('IOHApp').factory('Base64Factory', Base64Factory);

function Base64Factory() {

    let base64Factory = {};
    base64Factory.base64EncodingUTF8 = base64EncodingUTF8;
    base64Factory.base64Decode = base64Decode;

    return base64Factory;

    function base64EncodingUTF8(str, encoding = 'utf-8') {
        let bytes = new (TextEncoder || TextEncoderLite)(encoding).encode(str);
        return base64js.fromByteArray(bytes);
    }

    function base64Decode(str, encoding = 'utf-8') {
        let bytes = base64js.toByteArray(str);
        return new (TextDecoder || TextDecoderLite)(encoding).decode(bytes);
    }
}