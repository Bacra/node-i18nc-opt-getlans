'use strict';

var commonConfig = require('karma-config-brcjs');

require('./test/prev_test_files')();

module.exports = function(config)
{
	commonConfig(config, require('./package.json'));

	config.set(
	{
		basePath: 'test/',
		files: ['test_*.js'],
		preprocessors: {'test_*.js': ['browserify']},
	});
};
