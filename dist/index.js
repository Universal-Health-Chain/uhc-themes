"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var theme = {
    color: {
        black: "#313639",
        white: "#ffffff",
        gray: "#999999",
        primary: "#66cc66",
        secondary: "#33a8d5",
        tertiary: "#46B5AD",
        dangerPrimary: "#D9984F",
        dangerSecondary: "#D9534F"
    }
};
exports.setPrimaryColor = function (color) {
    theme.color.primary = color;
};
exports.setSecondaryColor = function (color) {
    theme.color.secondary = color;
};
exports.default = theme;
