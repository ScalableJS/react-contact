import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';

import ContactsListPage from './pages/contacts-list-page'
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <div className="">
            <NavLink className="item" activeClassName="active" exact to="/">Contacts List</NavLink>
            <NavLink className="item" activeClassName="active" exact to="/contacts/new">Add Contact</NavLink>
          </div>
          {<Route exact path="/" component={ContactsListPage}/>}
          {/*<Route path="/contacts/call/:_id" component={CallHistoryPage}/>*/}
          {/*<Route path="/contacts/new" component={ContactsFormPage}/>*/}
          {/*<Route path="/contacts/edit/:_id" component={ContactsFormPage}/>*/}
        </div>
    );
  }
}

export default App;
