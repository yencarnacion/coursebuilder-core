module.exports = function(config) {
  config.set({
    basePath: '../../../..',
    files: [
      'https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js',
      'tests/unit/javascript_tests/modules_core_ui/*.js',
      {
        pattern: 'tests/unit/javascript_tests/modules_core_ui/*.html',
        watched: true,
        included: false,
        served: true
      },
      'modules/core_ui/_static/*/*.js'
    ],
    exclude: ['**/karma.conf.js'],
    frameworks: ['jasmine-jquery', 'jasmine'],
    browsers: ['PhantomJS'],
    singleRun: true
  });
};
