import React from 'react';
import PropTypes from 'prop-types';

import Avatar from 'emerald-ui/lib/Avatar';
import DropdownButton from 'emerald-ui/lib/DropdownButton';
import DropdownItem from 'emerald-ui/lib/DropdownItem';
import Icon from 'emerald-ui/lib/Icon';
import Nav from 'emerald-ui/lib/Nav';
import Navbar from 'emerald-ui/lib/Navbar';

import './style.scss';

const Navigation = () => {

    const logoImage = require('../../assets/img/logo.svg');
    
    return (
        <Navbar breakAt="sm" barClassName="container">
            <Navbar.Brand>
                <a href="#foo">
                    <img src={logoImage} alt="News" />
                </a>
            </Navbar.Brand>
            <Nav grow collapsible>
                <DropdownButton title="Sections" id="dd1">
                    <DropdownItem eventKey="1">Action</DropdownItem>
                    <DropdownItem eventKey="2">Another action</DropdownItem>
                    <DropdownItem eventKey="3" active>
                        Active Item
            </DropdownItem>
                    <DropdownItem separator />
                    <DropdownItem eventKey="4">Separated link</DropdownItem>
                </DropdownButton>
                <a href="#foo">Editorial</a>
                <a href="#foo">Contact Us</a>
            </Nav>
            <Nav>
                <DropdownButton
                    noCaret
                    fromRight
                    id="dd2"
                    title={<Avatar title="JS" />}
                >
                    <DropdownItem eventKey="1">Action</DropdownItem>
                    <DropdownItem eventKey="2">Another action</DropdownItem>
                    <DropdownItem eventKey="3" active>
                        Active Item
            </DropdownItem>
                    <DropdownItem separator />
                    <DropdownItem eventKey="4">Separated link</DropdownItem>
                </DropdownButton>
            </Nav>

        </Navbar>
    );
}

Navigation.propTypes = {

}

export default Navigation;