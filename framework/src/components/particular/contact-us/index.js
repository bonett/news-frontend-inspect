import React from 'react';
import PropTypes from 'prop-types';

import Panel from 'emerald-ui/lib/Panel';
import Row from 'emerald-ui/lib/Row';
import Col from 'emerald-ui/lib/Col';

import ButtonComponent from '../../common/button';
import CheckBoxComponent from '../../common/check-box';
import HeadingComponent from '../../common/heading';

import './style.scss';

import data from '../../../data/static';
import TextFieldComponent from '../../common/text-field';

const ContactUsComponent = () => {

    const contactUs = data && data.contact,
        firstname = contactUs && contactUs.firstname,
        lastname = contactUs && contactUs.lastname,
        email = contactUs && contactUs.email,
        phoneNumber = contactUs && contactUs.phoneNumber,
        message = contactUs && contactUs.message;

    return (
        <section id="contact-us" className="contact-us">
            <div className="container">
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} className="wrapper__content__heading contact-us__heading">
                        <HeadingComponent
                            color="dark"
                            title={contactUs.heading}
                            size="extra-large" />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} className="wrapper__content__body">
                        <Panel className="contact-us__content">
                            <Panel.Body>
                                <form className="form__content">
                                    <Row>
                                        <Col xs={12} sm={6} md={6} lg={6} className="form-group">
                                            <TextFieldComponent
                                                id={firstname.id}
                                                label={firstname.label}
                                                errorMessage="" />
                                        </Col>
                                        <Col xs={12} sm={6} md={6} lg={6} className="form-group">
                                            <TextFieldComponent
                                                id={lastname.id}
                                                label={lastname.label}
                                                errorMessage="" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} sm={6} md={6} lg={6} className="form-group">
                                            <TextFieldComponent
                                                id={email.id}
                                                label={email.label}
                                                errorMessage="" />
                                        </Col>
                                        <Col xs={12} sm={6} md={6} lg={6} className="form-group">
                                            <TextFieldComponent
                                                id={phoneNumber.id}
                                                label={phoneNumber.label}
                                                errorMessage="" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} sm={12} md={12} lg={12} className="form-group">
                                            <textarea name={message.id} id={message.id} cols="30" rows="10"></textarea>
                                            <label htmlFor={message.id}>{message.label}</label>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} sm={12} md={12} lg={12} className="form-group">
                                            <CheckBoxComponent
                                                label={contactUs.checkSendEmail} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} sm={12} md={12} lg={12} className="form-group">
                                            <ButtonComponent
                                                color="primary"
                                                title={contactUs.btnSubmit}
                                                closable={false} />
                                        </Col>
                                    </Row>
                                </form>
                            </Panel.Body>
                        </Panel>
                    </Col>
                </Row>
            </div>
        </section>
    );
}

ContactUsComponent.propTypes = {

}

export default ContactUsComponent;
