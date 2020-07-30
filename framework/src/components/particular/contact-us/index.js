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

    const contactUs = data && data.contact;

    return (
        <section id="contact-us" className="contact-us">
            <div className="container">
                <div className="wrapper__content__heading contact-us__heading">
                    <HeadingComponent
                        color="dark"
                        title={contactUs.heading}
                        size="extra-large" />
                </div>
                <div className="wrapper__content__body">
                    <Panel className="contact-us__content">
                        <Panel.Body>
                            <form class="submit__form">
                                <Row className="submit__form__group">
                                    <Col xs={12} sm={6} md={6} lg={6}>
                                        <TextFieldComponent
                                            label={contactUs.firstname} />
                                    </Col>
                                    <Col xs={12} sm={6} md={6} lg={6}>
                                        <TextFieldComponent
                                            label={contactUs.lastname} />
                                    </Col>
                                </Row>
                                <Row className="submit__form__group">
                                    <Col xs={12} sm={6} md={6} lg={6}>
                                        <TextFieldComponent
                                            label={contactUs.email} />
                                    </Col>
                                    <Col xs={12} sm={6} md={6} lg={6}>
                                        <TextFieldComponent
                                            label={contactUs.phoneNumber} />
                                    </Col>
                                </Row>
                                <Row className="submit__form__group">
                                    <Col xs={12} sm={12} md={12} lg={12}>
                                        <TextFieldComponent
                                            label={contactUs.message} className="textarea" />
                                    </Col>
                                </Row>
                                <Row className="submit__form__group">
                                    <Col xs={12} sm={12} md={12} lg={12}>
                                        <CheckBoxComponent
                                            label={contactUs.checkSendEmail} />
                                    </Col>
                                </Row>
                                <Row className="submit__form__group">
                                    <Col xs={12} sm={12} md={12} lg={12}>
                                        <ButtonComponent
                                            color="primary"
                                            title={contactUs.btnSubmit}
                                            closable={false} />
                                    </Col>
                                </Row>
                            </form>
                        </Panel.Body>
                    </Panel>
                </div>
            </div>
        </section>
    );
}

ContactUsComponent.propTypes = {

}

export default ContactUsComponent;
