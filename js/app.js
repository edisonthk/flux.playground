var React = require('react');
var VisibleTopWatcher = require('./components/VisibleTopWatcher.react');
var Content = require('./components/Content.react');
var ScrollingHandler = require('./actions/ScrollingHandler.js');

React.render(
	<div>
  		<VisibleTopWatcher visibleTopOnChange={ScrollingHandler._event}/>
  		<Content />
  	</div>,
  document.getElementsByTagName('main')[0]
);