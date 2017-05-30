exports.DATABASE_URL = (process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      'mongodb://localhost/mythica-creative');
exports.TEST_DATABASE_URL = (process.env.TEST_DATABASE_URL ||
	'mongodb://localhost/test-mythica-creative');

exports.PORT = process.env.PORT || 7498;
