const { environment } = require('@rails/webpacker')
const webpack = require('webpack')

// The ProvidePlugin helps us avoid the multiple import or 
// require statements we would normally use when working with JQuery or Popper modules.
environment.plugins.append("Provide", new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    Popper: ['pooper.js', 'default']
}))

module.exports = environment
