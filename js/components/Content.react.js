var React = require('react');
var DelayResizeMixin = require('../mixins/DelayResize.react');

var _animator = false;
var Content = React.createClass({

	statics: {
		// static variable is declared here
		// getAnimator is static variable and can be called by Content.getAnimator()
		getAnimator: function() {
			if(!_animator){
				_animator = document.getElementById('animator');
			}
			return _animator;
		}
	},

	// When components are sharing common functionality, using mixins to recycle code
	// DelayResizeMixin will create windowWidth and windowHeight state and make them update as 
	// two-way binding everytime when window is resized.
	// 
	// Learn more about mixins, check out following link
	// http://facebook.github.io/react/docs/reusable-components.html#mixins
	mixins: [DelayResizeMixin],

	componentDidMount: function() {
		// carry out initial canvas animatin here
		// As ScrollingHandler is using Content component static methods, it needs to be 
		// used when components is mounted.
		// console.log(Content.getAnimator());
		var ScrollingHandler = require('../actions/ScrollingHandler.js');
		ScrollingHandler.initial();
	},
	render: function() {
		var s1 = {
			// backgroundColor: 'red'
		};
		var _canvas_style = {
			position: 'fixed',
			top: 0,
			left: 0,
			zIndex: -1,
		};
		return (
			<div>
				<div className='section'>
				fsdfds	
				</div>
				<div className='section' style={s1}>
				fsdfds	
				</div>
				<div className='section'>
				fsdfds	
				</div>
				<canvas id='animator' style={_canvas_style} width={this.state.windowWidth} height={this.state.windowHeight}></canvas>
			</div>
		);
	},

});

module.exports = Content;