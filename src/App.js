import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom';
import {Container, Navbar, Nav, NavItem} from 'react-bootstrap';

import ContactsListPage from './pages/contacts-list-page'
import ContactsFormPage from './pages/contacts-form-page'

import './App.css';

class App extends Component {
    render() {
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

                <Route exact path="/" component={ContactsListPage}/>
                <Route path="/contacts/new" component={ContactsFormPage}/>
                {/*<Route path="/contacts/edit/:_id" component={ContactsFormPage}/>*/}
                {/*<Route path="/contacts/call/:_id" component={CallHistoryPage}/>*/}


            </Container>
        );
    }
}

export default App;
