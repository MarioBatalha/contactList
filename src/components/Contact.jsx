import React from 'react';
import '../App.scss';
import dayjs from 'dayjs';
dayjs().format();

class Contact extends React.Component {
  constructor(props){
		super(props);
		this.state = {
			error: null,
			isLoad: false,
			contacts: []
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
    
    render() {
      const {error, isLoad, contacts} =  this.state
      if(error){
        return <div className="errorProcess">Error: {error.message}</div>
      }else if(!isLoad){
        return <div className="loadProcess">Loading...</div>
      }else{
      return (
        <div>
        <div className="container">
          <section className="contacts">
            <article className="contact">
              <span className="contact__avatar"></span>
              <span className="contact__data">Nome</span>
              <span className="contact__data">Telefone</span>
              <span className="contact__data">País</span>
              <span className="contact__data">Admissão</span>
              <span className="contact__data">Empresa</span>
              <span className="contact__data">Departamento</span>
            </article>
          </section>
        </div>

      <div>
		  {contacts.map((item) => (	
		  <div className="item" key={item.id}>
          <section className="contacts">
			  <img className="contact__avatar" src={item.avatar} alt=""></img>
              <span className="contact__data">{item.name}</span>
              <span className="contact__data">{item.phone}</span>
			  <span className="contact__data">{item.country}</span>
			  <span className="contact__data">{dayjs(item.admissionDate).format('DD/MM/YY')}</span>
              <span className="contact__data">{item.company}</span>
              <span className="contact__data">{item.department}</span>
		  </section>
		</div>
		))}
		</div>
    </div>);	
    }
  }
}

export default Contact;
