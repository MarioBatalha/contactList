import React from 'react';

class Filters extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			error: null,
			isLoad: false,
			contacts: [], 
			search: '',
			name: 'Rafinha'
		}
  }
  
  componentDidMount(){
		fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
		.then(res => res.json())
		.then(
			(result) => {
				this.setState({
					isLoad: true,
					contacts: result,
				});
			},
			(error) => {
				this.setState({
					isLoad: true,
					error
				});
			}
    )
  }  
	
	/*byName = () =>{
		contacts.filter((item) => {return item})
	}

	byPhone = () =>{
		const contacts = this.state;
		contacts.filter((item) => {item.name})
	}

	byCountry = () =>{
		contacts.filter((item) => {item.country})
	}

	byCompany = () =>{
		contacts.filter((item) => {item.company})
	}

	byAdmissionDate = () =>{
		contacts.filter((item) => {return item.admissionDate})
	}

	byDepartment = () =>{
		contacts.filter((item) => {return item.department})
	}*/
	handleSearch = (e) => {
		this.setState({search: e.target.search})	
	};

	emitChange = (e) => {
		this.props.onChange(this.handleSearch());
	}

	render() {
		return (
			<div className="container">
			<section className="filters">
			  <div className="filters__search">
				<input type="text" className="filters__search__input" placeholder="Pesquisar" value={this.state.search}
				onChange={this.handleSearch}/>
  
				<button className="filters__search__icon" type="submit" onClick={this.emitChange}>
				  <i className="fa fa-search"/>
				</button>
			  </div>
			   
			   <button className="filters__item" type="submit">
				  Nome <i className="fa fa-sort-down"/>
			   </button>
  
			   <button className="filters__item" type="submit" >
				  País <i className="fa fa-sort-down"/>
			   </button>
  
			   <button className="filters__item" type="submit">
				 Empresa <i className="fa fa-sort-down"/>
			   </button>
  
			   <button className="filters__item" type="submit">
				  Departamento <i className="fa fa-sort-down"/>
			   </button>
  
			   <button className="filters__item" type="submit">
				  Data de admissão<i className="fa fa-sort-down"/>
			   </button>
			</section>
		  </div>
		);
	}
  }

export default Filters;
