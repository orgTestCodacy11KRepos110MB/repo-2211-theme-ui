module.exports = require('babel-jest').default.createTransformer({
  presets: [['@babel/preset-react', { runtime: 'automatic' }]],
})
