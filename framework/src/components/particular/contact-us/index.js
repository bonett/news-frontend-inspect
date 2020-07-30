import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

import data from '../../../data/static';

const ContactUsComponent = () => {

    const newsletter = data && data.newsletter;

    return (
        <section id="contact-us" className="contact-us">
            <div className="container">
                <h2>Contact is</h2>
            </div>
        </section>
    );
}

ContactUsComponent.propTypes = {

}

export default ContactUsComponent;
