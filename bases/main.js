"use strict";
var Validations;
(function (Validations) {
    const validateText = (text) => {
        return (text.length > 3) ? true : false;
    };
    const validaDate = (fecha) => {
        return (isNaN(fecha.valueOf())) ? false : true;
    };
})(Validations || (Validations = {}));
//# sourceMappingURL=main.js.map