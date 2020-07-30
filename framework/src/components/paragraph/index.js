import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const ParagraphComponent = (props) => {

    const { title, color } = props;

    return (
        <p className={"paragraph " + color}>{title}</p>
    );
}

ParagraphComponent.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

export default ParagraphComponent;
