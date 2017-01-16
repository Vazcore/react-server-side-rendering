var router = require('express').Router();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var ReactRouter = require('react-router');

router.get('*', function (req, res) {
  var props = {title: 'Alexey'};
  ReactRouter.match({
    routes: require('./routes.jsx'),
    location: req.url
  }, function (err, loc, renderProps) {
    if (renderProps) {
        var html = ReactDOMServer.renderToString(
        <ReactRouter.RouterContext {...renderProps}
        createElement={function(Component, rProps) {
          return <Component {...rProps} custom={props} />
        }} />
      );
      res.send(html);
    } else {
      res.status(404).send('Not Found');
    }
    
  });
  
});

module.exports = router;