module.exports = {
  default: {
    paths: ['tests/features/*.feature'],
    require: [
      'tests/steps/hooks.js',
      'tests/steps/*.js'
    ],
    format: ['progress']
  }
};
