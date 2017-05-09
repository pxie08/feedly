import React from 'react';

class HeaderSection extends React.Component {
	render() {
		return(
			<div className='container header'>
				<Header />
			</div>
		)
	}
}

class Header extends React.Component {
	render() {
		return(
			<h1>
				Report Outages for Applications
			</h1>
		)
	}
}

export default Header;
export {HeaderSection};