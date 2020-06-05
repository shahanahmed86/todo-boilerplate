const plugins = [
	[
		'babel-plugin-transform-imports',
		{
			'@material-ui/core': {
				// Use "transform: '@material-ui/core/${member}'," if your bundler does not support ES modules
				transform: '@material-ui/core/esm/${member}',
				preventFullImport: true
			},
			'@material-ui/icons': {
				// Use "transform: '@material-ui/icons/${member}'," if your bundler does not support ES modules
				transform: '@material-ui/icons/esm/${member}',
				preventFullImport: true
			},
			'@material-ui/lab': {
				// Use "transform: '@material-ui/lab/${member}'," if your bundler does not support ES modules
				transform: '@material-ui/lab/esm/${member}',
				preventFullImport: true
			}
		}
	]
];

module.exports = { plugins };
