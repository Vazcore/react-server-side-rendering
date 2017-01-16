var React = require('react');

module.exports = React.createClass({
  
  render: function () {
    var custom = this.props.custom;
    return (
      <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h1 className="page-header">Page Heading
                    <small>Secondary Text</small>
                </h1>
            </div>
        </div>

        <div className="row">
            <div className="col-md-3 portfolio-item">
                <a href="#">
                    <img className="img-responsive" src="http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images/recent-images-11.jpg" alt="" />
                    
                </a>
                <h4>Title</h4>
                <p>Exmaple Text</p>
            </div>
            
        </div>

        <hr />

        <footer>
            <div className="row">
                <div className="col-lg-12">
                    <p>Copyright © Your Website 2014</p>
                </div>
            </div>
        </footer>
      </div>
    );
  }
});