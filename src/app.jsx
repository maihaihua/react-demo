var React = require('react'),
	ReactDOM= require('react-dom');

import Navigator from './components/Navigator.jsx';
class App extends React.Component{
	render(){
		return <Navigator tabs={[1,2,3]}></Navigator>;
	}
}

ReactDOM.render(
	<App></App>,
	document.getElementById('container'))
