const path = require('path')
module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
    "jasmine": true
  },
  "plugins": [
    "react",
    "import",
    "jsx-a11y"
  ],
  "rules": {
    "react/forbid-prop-types": "off",
    "react/prop-types": ["warn"],
    "no-unused-vars": "warn",
    "react/jsx-filename-extension": ["warn", { "extensions": [".js", ".jsx"] }],
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": [path.resolve('app/javascript')],
        "extensions": [".js",".jsx"]
      }
    }
  }
}
// module.exports = {
//     "extends": "airbnb",
//     "parser": "babel-eslint",
//     "parserOptions": {
//       "sourceType": "module"
//     },
//     "env": {
//         "browser": true,
//         "commonjs": true,
//         "es6": true,
//         "node": true,
//         "jasmine": true
//     },
//     "rules": {
//         "import/no-extraneous-dependencies": [ "warn",
//             {
//               "devDependencies": false,
//               "optionalDependencies": false,
//               "peerDependencies": false
//             }
//         ],
//         "react/forbid-prop-types": "off",
//         "react/prop-types": ["warn"],
//         "no-unused-vars": "warn",
//         "function-paren-newline": "off",
//         "react/jsx-filename-extension": ["warn", { "extensions": [".js", ".jsx"] }]
//     },
//     "plugins": [
//         "react",
//         "import",
//         "jsx-a11y"
//     ],
//     "settings": {
//         "import/resolver": {
//             "packs": {
//                 "path": "app/javascript/packs"
//             },
//             "node": {
//                 "extensions": [
//                   ".js",
//                   ".jsx"
//                 ]
//               }
//         }
//     }
// }
