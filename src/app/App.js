import React from 'react';
import {HeaderSection} from '../components/header/Header.js';
import ReportSection from '../components/report/Report.js';

class App extends React.Component {
	render() {
		return (
			<div className='container-fluid'>
				<HeaderSection />
				<ReportSection />
			</div>
		)
	}
}

export default App;