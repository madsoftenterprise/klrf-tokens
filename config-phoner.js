const {  sassFormatVariables, cssFormatVariables} = require('./css-style-config');




module.exports = {
    format: {
        cssFormatVariables,
        sassFormatVariables,
    },

    source: ['tokens/phoner/**/*.json'],
    platforms: {
        "css": {
            "transformGroup": "css",
            "buildPath": "./css/",
            "files": [{
                "destination": "variables-phoner.css",
                "format": "cssFormatVariables",
                "options": {
                    "outputReferences": true
                }
            }, {
                "destination": "variables-phoner.scss",
                "format": "sassFormatVariables",
                "options": {
                    "outputReferences": true
                }
            }]
        }
    }
};