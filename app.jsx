var React = require('react');
var Link = require('react-router').Link;
var Header = require('./views/header.jsx');
var Articles = require('./views/articles.jsx');

module.exports = React.createClass({
  handle: function () {
    
  },
  render: function () {
    var custom = this.props.custom;
    return (
      <html>
        <head>
          <title>App</title>
          <link rel="stylesheet" type="text/css" href="/style.css" />
        </head>
        <body>
          <Header />
          <ul>
            <li><Link to='about'>About</Link></li>
          </ul>
          <Articles />
          <h1 onClick={this.handle}>{custom.title}</h1>
          {this.props.children}
          <script dangerouslySetInnerHTML={{
            __html: 'window.PROPS=' + JSON.stringify(custom) 
          }}></script>
          <script src="/bundle.js"></script>
        </body>
      </html>
    );
  }
});