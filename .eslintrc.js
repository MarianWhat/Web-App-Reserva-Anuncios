module.exports = {
  "extends": [
    "airbnb-base",
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "rules" : {
    "linebreak-style": 0,
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
  },
  "plugins": [ "react"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  }      
};

