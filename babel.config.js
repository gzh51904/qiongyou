module.exports = {

  "presets": [
    '@vue/app', ["@babel/preset-env", { "modules": false }]
  ],
  "plugins": [
    ["component",

      {
        "libraryName": "mint-ui",
        "style": true
      }
    ],
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']

  ]
}

