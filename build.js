var fs = require('fs')
var path = require('path')
var minify = require('minify')

minify.optimize('index.js', { returnName: true, callback: save('build/zynpass.min.js') })
fs.writeFileSync( 'build/zynpass.js', fs.readFileSync('index.js') )

function save (filename) {
	return function (p) {
		console.log('Renaming ' + path.basename(p.name) + ' to ' + filename)
		fs.renameSync( p.name, filename )
	}
}
