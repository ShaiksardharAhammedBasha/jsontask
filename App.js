import React, { Component } from 'react';
import Contacts from './components/contacts';

    class App extends Component {
      render() {
        return (
         <div> <Contacts contacts = {this.state.contacts} /> </div>
          );
      }
    }

    export default App;