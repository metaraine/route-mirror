module.exports = function(app, urlTransform) {

	var mirror = function(verb, url, handler) {
		app[verb](url, handler)
		app[verb](urlTransform(url), function(req, res) {
			res.redirect(url)
		})
	}

	return {
		get:    mirror.bind(null, 'get'),
		post:   mirror.bind(null, 'post'),
		put:    mirror.bind(null, 'put'),
		delete: mirror.bind(null, 'delete'),
		all:    mirror.bind(null, 'all'),
	}
}
