import React, { useState } from 'react';

import Panel from 'emerald-ui/lib/Panel';
import Row from 'emerald-ui/lib/Row';
import Col from 'emerald-ui/lib/Col';

import ButtonComponent from '../../common/button';
import CheckBoxComponent from '../../common/check-box';
import HeadingComponent from '../../common/heading';
import TextFieldComponent from '../../common/text-field';
import ModalComponent from '../../common/modal';

import data from '../../../data/static';
import validateTextField from '../../../utils';

import './style.scss';

const initialStatus = { value: '', verified: false, message: '', customized: false },
    initForm      = { firstname: '', lastname: '', email: '', phoneNumber: '', message: '', checked: false };

const ContactUsComponent = () => {

    const contactUs                   = data && data.contact,
        firstname                   = contactUs && contactUs.firstname,
        lastname                    = contactUs && contactUs.lastname,
        email                       = contactUs && contactUs.email,
        phoneNumber                 = contactUs && contactUs.phoneNumber,
        message                     = contactUs && contactUs.message,
        [fname, setFname]           = useState(initialStatus),
        [lname, setLname]           = useState(initialStatus),
        [mail, setMail]             = useState(initialStatus),
        [pnumber, setPnumber]       = useState(initialStatus),
        [mssge, setMssge]           = useState(initialStatus),
        [submitData, setSubmitData] = useState(initForm),
        [showDialog, setShowDialog] = useState(false),
        [inputChecked, setinputChecked] = useState(false);

    const handleControlValidation = (value, id) => {
        switch (id) {
        case 'firstname':
            setFname(validateTextField(value, id));
            break;
        case 'lastname':
            setLname(validateTextField(value, id));
            break;
        case 'email':
            setMail(validateTextField(value, id));
            break;
        case 'phonenumber':
            setPnumber(validateTextField(value, id));
            break;
        case 'message':
            setMssge(validateTextField(value, id));
            break;
        default:
            break;
        }
    };

    const handleCheckboxChecked = (e) => {
        const isChecked = e.target.checked;
        setinputChecked(isChecked);
    };

    const submitFormVerified = () => {
        if ((fname.verified && lname.verified && mail.verified && pnumber.verified && mssge.verified) === false) {
            handleControlValidation(fname.value, 'firstname');
            handleControlValidation(lname.value, 'lastname');
            handleControlValidation(mail.value, 'email');
            handleControlValidation(pnumber.value, 'phonenumber');
            handleControlValidation(mssge.value, 'message');
        } else {
            const payload = {
                firstname: fname.value,
                lastname: lname.value,
                email: mail.value,
                phoneNumber: pnumber.value,
                message: mssge.value,
                checked: inputChecked,
            };
    
            setSubmitData(payload);
            handleControlDialog(false);
        }
    };

    const handleControlDialog = (isClear) => {
        setShowDialog(!showDialog);
        if (isClear) clearForm();
    };

    const clearForm = () => {
        setFname(initialStatus);
        setLname(initialStatus);
        setMail(initialStatus);
        setPnumber(initialStatus);
        setMssge(initialStatus);
        setSubmitData(initForm);
        setinputChecked(false);
    };

    return (
        <section id="contact-us" className="contact-us">
            <div className="container">
                <ModalComponent
                    title="Submit form"
                    payload={submitData}
                    show={showDialog}
                    handleControl={handleControlDialog} />
                <Row>
                    <Col
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        className="wrapper__content__heading contact-us__heading"
                    >
                        <HeadingComponent
                            color="dark"
                            title={contactUs.heading}
                            size="extra-large"
                        />
                    </Col>
                    <Col
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        className="wrapper__content__body"
                    >
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
                                                errorMessage={fname.message}
                                            />
                                        </Col>
                                        <Col xs={12} sm={6} md={6} lg={6} className="form-group">
                                            <TextFieldComponent
                                                id={lastname.id}
                                                label={lastname.label}
                                                value={lname.value}
                                                handleInputControl={handleControlValidation}
                                                errorMessage={lname.message}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} sm={6} md={6} lg={6} className="form-group">
                                            <TextFieldComponent
                                                id={email.id}
                                                label={email.label}
                                                value={mail.value}
                                                handleInputControl={handleControlValidation}
                                                errorMessage={mail.message}
                                            />
                                        </Col>
                                        <Col xs={12} sm={6} md={6} lg={6} className="form-group">
                                            <TextFieldComponent
                                                id={phoneNumber.id}
                                                label={phoneNumber.label}
                                                value={pnumber.value}
                                                handleInputControl={handleControlValidation}
                                                errorMessage={pnumber.message}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} sm={12} md={12} lg={12} className="form-group">
                                            <div className="form-group-customized">
                                                {
                                                    mssge.customized ?
                                                        <div className="error-footer">
                                                            <span id="messageErrorMessage" className="has-error-message has-message" role="alert">
                                                                {mssge.message}
                                                            </span>
                                                            <span className="eui-text-field-message eui-text-field-help-text"></span>
                                                        </div> : null

                                                }
                                                <textarea
                                                    id={message.id}
                                                    label={message.label}
                                                    className={!mssge.customized ? 'area-customized' : 'area-customized error--border'}
                                                    value={mssge.value}
                                                    onChange={(e) => handleControlValidation(e.target.value, e.target.id)} >
                                                </textarea>
                                                <label
                                                    htmlFor={message.id}
                                                    id="label-message"
                                                    className={!mssge.customized ? 'label-customized' : 'label-customized error--text'} >Message</label>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} sm={12} md={12} lg={12} className="form-group">
                                            <CheckBoxComponent
                                                label={contactUs.checkSendEmail}
                                                isChecked={inputChecked}
                                                handleClickCheckbox={handleCheckboxChecked} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} sm={12} md={12} lg={12} className="form-group">
                                            <ButtonComponent
                                                color="primary"
                                                handleClickButton={submitFormVerified}
                                                title={contactUs.btnSubmit}
                                            />
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
};

export default ContactUsComponent;
