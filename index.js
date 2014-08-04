module.exports = function(app, urlTransform) {

	var mirror = function(verb, url, handler) {
		app[verb](url, handler)
		app[verb](urlTransform(url), function(req, res) {
			res.redirect(url)
		})
	}

	return {
		get:    mirror.bind(app, 'get'),
		post:   mirror.bind(app, 'post'),
		put:    mirror.bind(app, 'put'),
		delete: mirror.bind(app, 'delete'),
		all:    mirror.bind(app, 'all'),
	}
}
