module.exports = {
    "env": {
        "browser": true,
        "jasmine": true,
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module",
        "allowImportExportEverywhere": false
    },
    "extends": [
        "airbnb"
    ],
    "plugins": [
        "react",
        "jsx-a11y",
        "import",
    ],
    "rules": {
        "class-methods-use-this": "off",
        "import/extensions": "off",
        "import/no-extraneous-dependencies": "off",
        "import/prefer-default-export": "off",
        "import/first": "off",
        "indent": ["error", "tab", {
            "SwitchCase": 1
        }],
        "max-len": "off",
        "no-tabs": "off",
        "quotes": [2, "single", {
            "allowTemplateLiterals": true
        }],
        "react/jsx-curly-spacing": [1, "always"],
        "react/jsx-indent-props": ["error", "tab"],
        "react/jsx-indent": ["error", "tab"],
        "react/prefer-stateless-function": "off",
        "react/sort-comp": "off",
        "no-underscore-dangle": [2, {
            "allowAfterThis": true
        }],
        "no-use-before-define": "off",
        "no-shadow": "warn",
        "no-plusplus": "off",
        "no-nested-ternary": "off",
        "jsx-a11y/href-no-hash": "off",
        "jsx-a11y/anchor-is-valid": ["warn", {
            "aspects": ["invalidHref"]
        }],
        "object-curly-newline": "off",
    },
    "settings": {
        "import/resolver": {
            "babel-module": {},
        }
    },
    "globals": {
        "__DEV__": true,
        "__PRODUCTION__": true,
        "__SENTRY_VERSION__": true,
        "__VERSION__": true,
        "jest": true,
    }
};
