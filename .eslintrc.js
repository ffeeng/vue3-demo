module.exports = {
    "root":true,
    "env": {
        "node": true,
        "es6": true
    },
    "plugins": ['unused-imports'],
    "extends": [
        "eslint:recommended",
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2021,
        "sourceType": "module"
    },
    "rules": {
        "semi": ["error", "never"],
        'unused-imports/no-unused-imports': ['error'],
    }
};
