// This puts a <style> tag in <head> of page with transpiled css.
require('../sass/main.scss')

// Import bootstrap (which requires jQuery)
require('imports?jQuery=jquery!bootstrap-sass')

require('./wordpressTheme.js')
