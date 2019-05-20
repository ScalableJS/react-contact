import React, {Component} from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';
import {Container, Nav, NavItem} from 'react-bootstrap';

import ContactsListPage from './pages/contacts-list-page'
import ContactsFormPage from './pages/contacts-form-page'
import ContactsCallPage from './pages/contacts-call-page'


import './App.css';

class App extends Component {
    render() {
        const Page404 = ({ location }) => (
            <div>
                <h2>No match found for <code>{location.pathname}</code></h2>
            </div>
        );
        return (
            <Container>
                <Nav className="ml-auto" variant="pills">
                    <NavItem>
                        <NavLink className="nav-link" activeClassName="active" exact to="/">Contacts List</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" activeClassName="active" exact to="/contacts/new">Add
                            Contact</NavLink>
                    </NavItem>
                </Nav>
                <Switch>
                    <Route exact path="/" component={ContactsListPage}/>
                    <Route path="/contacts/new" component={ContactsFormPage}/>
                    <Route path="/contacts/edit/:_id" component={ContactsFormPage}/>
                    <Route path="/contacts/calls/:_id" component={ContactsCallPage}/>
                    <Route component={Page404}/> {/* The Default not found component */}
                </Switch>



            </Container>
        );
    }
}

export default App;
