"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.t = void 0;
var config_1 = require("config");
var t = function (key) {
    return (config_1.sv === null || config_1.sv === void 0 ? void 0 : config_1.sv[key]) || key;
};
exports.t = t;
