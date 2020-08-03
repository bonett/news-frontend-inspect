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

const initialStatus = { value: '', verified: false, message: '' },
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
          [checked, setChecked]       = useState(false);

    const handleControlValidation = (value, id) => {
        switch (id) {
        case 'firstname':
            setFname(validateTextField(value, id));
            break;
        case 'lastname':
            setLname(validateTextField(value, id))
            break;
        case 'email':
            setMail(validateTextField(value, id))
            break;
        case 'phonenumber':
            setPnumber(validateTextField(value, id))
            break;
        case 'message':
            setMssge(validateTextField(value, id));
            break;
        default:
            break;
        }
    };

    const handleCheckboxCheked = (value) => {
        setChecked(value);
    }

    const submitFormVerified = () => {
        const payload = {
            firstname: fname.value,
            lastname: lname.value,
            email: mail.value,
            phoneNumber: pnumber.value,
            message: mssge.value,
            checked: false,
        };

        setSubmitData(payload);
        handleControlDialog(false);

    };

    const handleControlDialog = (isClear) => {
        setShowDialog(!showDialog);
        if (isClear) clearForm();
    }

    const clearForm = () => {
        setFname(initialStatus);
        setLname(initialStatus);
        setMail(initialStatus);
        setPnumber(initialStatus);
        setMssge(initialStatus);
        setSubmitData(initForm);
        setChecked(false);
    }

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
                                            <TextFieldComponent
                                                id={message.id}
                                                label={message.label}
                                                value={mssge.value}
                                                handleInputControl={handleControlValidation}
                                                errorMessage={mssge.message}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} sm={12} md={12} lg={12} className="form-group">
                                            <CheckBoxComponent
                                                label={contactUs.checkSendEmail}
                                                isChecked={checked}
                                                handleClickCheckbox={handleCheckboxCheked} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} sm={12} md={12} lg={12} className="form-group">
                                            <ButtonComponent
                                                color="primary"
                                                handleClickButton={submitFormVerified}
                                                isDisabled={(
                                                    fname.verified &&
                                                    lname.verified &&
                                                    mail.verified &&
                                                    pnumber.verified &&
                                                    mssge.verified) === false
                                                }
                                                title={contactUs.btnSubmit}
                                                closable={false}
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
