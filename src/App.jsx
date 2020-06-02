import React from 'react';
import './App.scss';
import Contacts from './components/Contacts';

class App extends React.Component {

  render() {
    return (
     <Contacts  contacts={this.props.contacts} 
                error={this.props.error}/>
    )
    }
  } 

export default App;
