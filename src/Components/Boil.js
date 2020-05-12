import React from 'react'

class Boil extends React.Component{
	constructor(props){
		super(props);
		this.state=({
			celcius:'',
			text:''
		});
		this.handleChange=this.handleChange.bind(this);
	}
	handleChange= (e) =>{
		this.setState({
			celcius:e.target.value,
			text: e.target.value > 37 ? 'not cool. Yeah you are freaking hot.' 
			: e.target.value < 30 ? 'O M G You are cold. Go to the hospital pleaseeeee!' 
			: 'cool. Wow, I guess...' 
		});
	}

	render(){
		return(
			<div className="_content">
				<h1>Temperature Testing</h1>
				<h3>Please fill in the input, you will find out you are cool or not :3</h3>
				<form>
					<input type="text" value={this.state.celcius} onChange={this.handleChange} /><br />
				</form>
				<h3>The moment of truth...</h3>
				<h4>You are officially ... {this.state.text}</h4>
			</div>
		);
	}
}

export default Boil