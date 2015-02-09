
// As we are using React.addons, use require('react/addons') instead require('react')
var React = require('react/addons');  
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var FLAG_SHOW = 1,
	FLAG_HIDE = 0;

var ScrollDown = React.createClass({
	height: 62, // scroll-down.png image height
	stateShowFlag: true,  // true when this components is show, and false when this components is hidden
	componentDidMount: function() {
		if(window.pageYOffset < 50){
			this.show();
		}else{
			this.hide();
		}
		window.addEventListener('scroll', this.onScroll, false);
	},
	componentWillUnmount: function() {
        window.removeEventListener('scroll', this.onScroll, false);
    },
    onScroll: function() {
    	if(window.pageYOffset < 50){
    		// false means, this component is in hide state
    		if(!this.stateShowFlag){
    			// doing this action when scrollDown component is hide
    			this.show();
    		}
    	}else{
    		if(this.stateShowFlag){
    			this.hide();
    		}
    	}
    },
	getInitialState: function() {
    	return {
      		bottom: '50px',
    	};
  	},
  	hide: function() {
  		this.setState({bottom: (- 2 * this.height)+'px'});
  		this.stateShowFlag = false;
  	},
  	show: function() {
  		this.setState({bottom: '50px'});	
  		this.stateShowFlag = true;
  	},
	render: function() {
		var s1 = {
			// backgroundColor: 'red'
		};
		var _style = {
			position: 'fixed',
			left: ((window.innerWidth - this.height) / 2) + 'px',
			bottom: this.state.bottom,

			// transition
			webkitTransition: '0.5s ease-in-out',
			mozTransition: '0.5s ease-in-out',
			oTransition: '0.5s ease-in-out',
			transition: '0.5s ease-in-out',
		};

		var _p_style = {
			marginTop: '5px',
		};
		var _img_style = {
			margin: '0 auto',
			display: 'block',
			width: '61px'
		};

		return (
			
          	<div className='scroll-down' style={_style}>
				<img style={_img_style} src='frames/scroll-down.png' />
				<p style={_p_style}>Scroll Down</p>
			</div>
        
		);
	},

});

module.exports = ScrollDown;