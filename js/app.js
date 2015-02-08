var React = require('react');
var VisibleTopWatcher = require('./components/VisibleTopWatcher.react');
var Content = require('./components/Content.react');
var ScrollingEvent = require('./actions/ScrollingEvent.js');

React.render(
	<div>
  		<VisibleTopWatcher visibleTopOnChange={ScrollingEvent}/>
  		<Content />
  	</div>,
  document.getElementsByTagName('main')[0]
);