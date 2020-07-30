import React from 'react';
import PropTypes from 'prop-types';

import Avatar from 'emerald-ui/lib/Avatar';
import DropdownButton from 'emerald-ui/lib/DropdownButton';
import DropdownItem from 'emerald-ui/lib/DropdownItem';
import Nav from 'emerald-ui/lib/Nav';
import Navbar from 'emerald-ui/lib/Navbar';

import './style.scss';

const NavigationComponent = () => {

    const logoImage = require('../../assets/img/logo.svg');
    
    return (
        <Navbar breakAt="md" barClassName="container" className="navbar__content">
            <Navbar.Brand className="navbar__logo">
                <a href="#foo">
                    <img src={logoImage} alt="News" />
                </a>
            </Navbar.Brand>
            <Nav grow collapsible className="navbar__menu">
                <DropdownButton title="Sections" id="dropdown-menu" className="navbar__menu__item">
                    <DropdownItem eventKey="1"><i className="fa fa-motorcycle"></i> Sports</DropdownItem>
                    <DropdownItem eventKey="2"><i className="fa fa-home"></i>Entertainment</DropdownItem>
                    <DropdownItem eventKey="3"><i className="fa fa-btc"></i>Economics</DropdownItem>
                    <DropdownItem eventKey="4"><i className="fa fa-laptop"></i>Technology</DropdownItem>
                </DropdownButton>
                <a href="#foo" className="navbar__menu__item">Editorial</a>
                <a href="#foo" className="navbar__menu__item">Contact Us</a>
            </Nav>
            <Nav className="navbar__account">
                <DropdownButton
                    noCaret
                    fromRight
                    className="navbar__account__dropdown"
                    id="dropdown-setting"
                    title={<Avatar title="JS" />}
                >
                    <DropdownItem eventKey="1">My Account</DropdownItem>
                    <DropdownItem eventKey="2">Settings</DropdownItem>
                </DropdownButton>
            </Nav>

        </Navbar>
    );
}

NavigationComponent.propTypes = {

}

export default NavigationComponent;