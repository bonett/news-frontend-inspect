import React, { useState } from 'react';

import Panel from 'emerald-ui/lib/Panel';
import Row from 'emerald-ui/lib/Row';
import Col from 'emerald-ui/lib/Col';

import ButtonComponent from '../../common/button';
import CheckBoxComponent from '../../common/check-box';
import HeadingComponent from '../../common/heading';

import './style.scss';

import data from '../../../data/static';
import TextFieldComponent from '../../common/text-field';


const emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phoneNumberRegexp = /^([0-9]{10})$/;

const ContactUsComponent = () => {

    const [fname, setFname] = useState({
        value: '',
        verified: false,
        message: ''
    });
    const [lname, setLname] = useState({
        value: '',
        verified: false,
        message: ''
    });
    const [mail, setMail] = useState({
        value: '',
        verified: false,
        message: ''
    });
    const [pnumber, setPnumber] = useState({
        value: '',
        verified: false,
        message: ''
    });
    const [mssge, setMssge] = useState({
        value: '',
        verified: false,
        message: ''
    });

    const contactUs = data && data.contact,
        firstname = contactUs && contactUs.firstname,
        lastname = contactUs && contactUs.lastname,
        email = contactUs && contactUs.email,
        phoneNumber = contactUs && contactUs.phoneNumber,
        message = contactUs && contactUs.message;

    const handleControlValidation = (input) => {
        console.log('input', input.id)
        switch (input.id) {
            case "firstname":
                checkField(input);
                break;
            case "message":
                checkField(input);
                break;
            case "lastname":
                checkField(input);
                break;
            case "email":
                checkEmail(input);
                break;
            case "phonenumber":
                checkPhoneNumber(input);
                break;
            default:
                break;
        }
    }

    const checkPhoneNumber = (field) => {

        if (field.value != "") {
            if (field.value.length > 0 && phoneNumberRegexp.test(field.value)) {
                setPnumber({
                    value: field.value,
                    verified: true,
                    message: ''
                });
            } else {
                setPnumber({
                    value: field.value,
                    verified: false,
                    message: 'Phone number is required (10 digits)'
                });
            }
        } else {
            setPnumber({
                value: field.value,
                verified: false,
                message: 'Phone number is required (10 digits)'
            });
        }
    }


    const checkEmail = (field) => {
        if (field.value != "") {
            if (field.value.length > 0 && emailRegexp.test(field.value)) {
                setMail({
                    value: field.value,
                    verified: true,
                    message: ''
                });
            } else {
                setMail({
                    value: field.value,
                    verified: false,
                    message: 'Email is required'
                });
            }
        } else {
            setMail({
                value: field.value,
                verified: false,
                message: 'Email is required'
            });
        }
    }

    const checkField = (field) => {

        console.log(field)
        if (field.id === "firstname") {
            if (field.value != "" || fname.value !== '') {
                if (field.value.length > 0) {
                    setFname({
                        value: field.value,
                        verified: true,
                        message: ''
                    });
                } else {
                    setFname({
                        value: field.value,
                        verified: false,
                        message: 'Firstname is required'
                    })
                }
            } else {
                setFname({
                    value: field.value,
                    verified: false,
                    message: 'Firstname is required'
                })
            }
        }

        if (field.id === "lastname") {
            if (field.value != "" || lname.value !== '') {
                if (field.value.length > 0) {
                    setLname({
                        value: field.value,
                        verified: true,
                        message: ''
                    });
                } else {
                    setLname({
                        value: field.value,
                        verified: false,
                        message: 'Lastname is required'
                    })
                }
            } else {
                setLname({
                    value: field.value,
                    verified: false,
                    message: 'Lastname is required'
                })
            }
        }

        if (field.id === "message") {
            if (field.value != "") {
                if (field.value.length > 0 || mssge.value != '') {
                    setMssge({
                        value: field.value,
                        verified: true,
                        message: ''
                    });
                } else {
                    setMssge({
                        value: field.value,
                        verified: false,
                        message: 'Message is required'
                    });
                }
            } else {
                setMssge({
                    value: field.value,
                    verified: false,
                    message: 'Message is required'
                });
            }
        }
    }

    const submitFormVerified = () => {
        const payload = {
            firstname: fname.value,
            lastname: lname.value,
            email: mail.value,
            phoneNumber: pnumber.value,
            message: mssge.value,
            checked: false,
        }
        console.log(payload)
    }

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
                                                value={fname.value}
                                                handleInputControl={handleControlValidation}
                                                errorMessage={fname.message} />
                                        </Col>
                                        <Col xs={12} sm={6} md={6} lg={6} className="form-group">
                                            <TextFieldComponent
                                                id={lastname.id}
                                                label={lastname.label}
                                                value={lname.value}
                                                handleInputControl={handleControlValidation}
                                                errorMessage={lname.message} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} sm={6} md={6} lg={6} className="form-group">
                                            <TextFieldComponent
                                                id={email.id}
                                                label={email.label}
                                                value={mail.value}
                                                handleInputControl={handleControlValidation}
                                                errorMessage={mail.message} />
                                        </Col>
                                        <Col xs={12} sm={6} md={6} lg={6} className="form-group">
                                            <TextFieldComponent
                                                id={phoneNumber.id}
                                                label={phoneNumber.label}
                                                value={pnumber.value}
                                                handleInputControl={handleControlValidation}
                                                errorMessage={pnumber.message} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} sm={12} md={12} lg={12} className="form-group">
                                            {
                                                !mssge.verified && mssge.value !== '' ?
                                                <div className="eui-text-footer">
                                                    <span id="lastnameErrorMessage" class="eui-text-field-message eui-text-field-error-message has-message" role="alert">{mssge.message}</span>
                                                    <span class="eui-text-field-message eui-text-field-help-text"></span>
                                                </div> : null
                                            }
                                            <textarea name={message.id} id={message.id} value={mssge.value} onChange={(e) => handleControlValidation(e.target)} cols="30" rows="10"></textarea>
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
                                                handleClickButton={submitFormVerified}
                                                isDisabled={!fname.verified || !lname.verified || !mail.verified || !pnumber.verified || !mssge.verified}
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

export default ContactUsComponent;
