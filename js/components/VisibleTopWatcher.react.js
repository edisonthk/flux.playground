var React = require('react');

var VisibleTopWatcher = React.createClass({

	currentTop: 0, // private data for VisibleTopWatcher Class
	intervalPeriod: 100,  // period
	componentDidMount: function(){

		// Invoked once and only in client when components is loaded into client
		// do setInterval event here
		// http://facebook.github.io/react/docs/component-specs.html
		var _this = this;
		_this.intervalId = setInterval(function(){
			if(_this.currentTop !== window.pageYOffset && window.pageYOffset >= 0){
				_this.currentTop = window.pageYOffset;

				if(typeof _this.props.visibleTopOnChange === 'function'){
					_this.props.visibleTopOnChange(_this.currentTop);
				}
			}
		}, _this.intervalPeriod);
		
	},
	componentWillUnmount: function(){
		// clearInterval event here
		// http://facebook.github.io/react/docs/component-specs.html
		var _this = this;
		clearInterval(_this.intervalId);
	},


	render: function() {
		return (
			<div />
		);
	}

});

module.exports = VisibleTopWatcher;