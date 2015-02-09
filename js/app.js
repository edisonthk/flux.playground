var React = require('react');

// components 
var VisibleTopWatcher = require('./components/VisibleTopWatcher.react');
var Content = require('./components/Content.react');
var ScrollDown = require('./components/ScrollDown.react');

// Handler 
var ScrollingHandler = require('./actions/ScrollingHandler.js');


React.render(
	<div>
  		<VisibleTopWatcher visibleTopOnChange={ScrollingHandler._event}/>
  		<Content />
  		<ScrollDown />
  	</div>,
  document.getElementsByTagName('main')[0]
);