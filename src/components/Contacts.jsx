import React from "react";
import Topbar from './Topbar';
import Filters from './Filters';
import Contact from './Contact';
import dayjs from "dayjs";
dayjs().format();

class Contacts extends React.Component {

	render() {
		return(
			<div>
				<Topbar />

				<Filters  name='Carlos'
						  />

				<Contact  result={this.props.contacts}/>
			
			</div>
		);
	  }
	}

export default Contacts;
