module.exports = {
    "parser": "babel-eslint",
    "extends": "eslint:recommended",
    "env": {
        "node": true,
        "es6": true,
        "browser": true,
    },
    "globals": {
        "$": false //浏览器的全局变量
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module" //es6 import
    },
    "ecmaFeatures": {},
    "rules": {
        "no-unreachable": 2
    }
};