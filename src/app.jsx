var React = require('react'),
	ReactDOM= require('react-dom');

class App extends React.Component{
	render(){
		return <div>test</div>;
	}
}

ReactDOM.render(
	<App></App>,
	document.getElementById('container'))
