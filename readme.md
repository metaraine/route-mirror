# route-mirror
[![Build Status](https://travis-ci.org/metaraine/route-mirror.svg?branch=master)](https://travis-ci.org/metaraine/route-mirror)
[![NPM version](https://badge.fury.io/js/route-mirror.svg)](http://badge.fury.io/js/route-mirror)

> Auto generate redirects for similar urls in express.


## Install

```sh
$ npm install --save route-mirror
```


## Usage

```js
var routeMirror = require('route-mirror')

var app = express()

// create a mirror that can be used to set up redirects for non-slugified urls.
var mirror = routeMirror(app, function(url) {
	return url.replace(/-/g, '')
})

// this will set up two routes:
//   '/this-is-a-test'
//   '/thisisatest' which will redirect to '/this-is-a-test'
mirror.get('/this-is-a-test', function(req, res) {
	res.render('test')
})
```


## License

ISC © [Raine Lourie](https://github.com/metaraine)
