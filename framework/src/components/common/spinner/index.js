import React from 'react';
import PropTypes from 'prop-types';

import Spinner from 'emerald-ui/lib/Spinner';

import './style.scss';

const SpinnerComponent = ({ show }) => {
    return (
        <> 
            { show ? <Spinner /> : null }
        </>
    );
};

SpinnerComponent.propTypes = {
    show: PropTypes.bool.isRequired
};

export default SpinnerComponent;
