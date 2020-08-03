import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from 'emerald-ui/lib/Checkbox';

import './style.scss';

const CheckBoxComponent = props => {
    const { label } = props;

    return <Checkbox label={label} />;
};

CheckBoxComponent.propTypes = {
    label: PropTypes.string.isRequired,
};

export default CheckBoxComponent;
