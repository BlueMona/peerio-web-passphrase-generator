module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "settings": {
        "import/resolver": "webpack"
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:import/errors",
        "plugin:import/warnings"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true,
            "modules": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react", "import"
    ],
    "rules": {
        "indent": ["error", 4],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "single", {"avoidEscape": true, "allowTemplateLiterals": true}],
        "semi": ["error", "always"],

        "max-nested-callbacks": [2, 15], // them its and describes...
        "max-len": [2, 240]
    },
    "globals": {}
};
