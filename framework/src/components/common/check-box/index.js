import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from 'emerald-ui/lib/Checkbox';

import './style.scss';

const CheckBoxComponent = ({ label, isChecked, handleClickCheckbox }) => {

    return <Checkbox label={label} checked={isChecked} onChange={(e) => handleClickCheckbox(e.target.checked)} />;
};

CheckBoxComponent.propTypes = {
    label: PropTypes.string.isRequired,
    handleClickCheckbox: PropTypes.func,
    isChecked: PropTypes.bool.isRequired,
};

export default CheckBoxComponent;
