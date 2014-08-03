module.exports = function(app) {

	var mirror = function(verb, url, handler) {
		app[verb](url, handler)
		app[verb](url.replace(/-/g,''), function(req, res) {
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
