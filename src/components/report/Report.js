import React from 'react';

class ReportSection extends React.Component {
	constructor(props) {
		super(props);
    	this.state = {
    		value: ''
    	}
  	}

	handleSubmit(event) {
		event.preventDefault();
        console.log(this.state.value);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
        console.log(event.target.value);
	}

	handleClick(){
		let ws = new WebSocket("ws://localhost:4000")
		console.log("Clicked!")
	}

	render() {
		return(
			<div className='container form-group report-section'>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<div>
						<input className='form-control'
			                placeholder='Application in Question...'
			                type='text'
			                onChange={this.handleChange.bind(this)} />
		            </div>
					<div>
						<button className="report-btn btn btn-default" type='submit' onClick={this.handleClick.bind(this)}>
							Report Outage
						</button>
					</div>
				</form>
			</div>
		)
	}
}

export default ReportSection;