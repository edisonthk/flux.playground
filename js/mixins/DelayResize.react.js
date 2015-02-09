// This mixins is used as getting windowWidth and windowHeight as two-way-binding.
// 
// if component is rendered with `windowWidth` or `windowHeight` variable will be updated
// when browser is resized. Due to windowWidth and windowHeight is two-way binding 
// variable

var DelayResizeMixin = {
	delay: 700, // delay resizing, in terms of milliseconds
	getInitialState: function(){
		return {
			windowWidth: window.innerWidth,
			windowHeight: window.innerHeight
		}
	},

	// Used this function
	// sizingEvent function
	// 
	componentDidMount: function() {
		var _this = this;
		// if(typeof _this.sizingEvent === 'function'){
		// 	_this.sizingEvent();
		// }
		window.addEventListener('resize', _this.handleResize);
	},
	handleResize: function() {
		var _this = this;
		clearTimeout(_this.timeoutId);
		_this.timeoutId = setTimeout(function(){
			_this.setState({
				windowWidth: window.innerWidth,
				windowHeight: window.innerHeight
			});

			if(typeof _this.sizingEvent === 'function'){
				_this.sizingEvent();
			}

		}, _this.delay); 
	},
	componentDidUnmount: function() {
		window.removeEventListener('resize', this.handleResize);
	}
};

module.exports = DelayResizeMixin;