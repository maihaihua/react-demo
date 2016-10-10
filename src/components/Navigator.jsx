import React,{Component} from 'react';

class Navigator extends Component{
	render(){
		return <div>{this.props.tabs.map(function(val){
			return <div>{val}</div>
		})}</div>;
	}
}

export default Navigator;