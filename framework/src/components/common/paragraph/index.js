import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const ParagraphComponent = (props) => {

    const { text, color } = props;

    return (
        <p className={"paragraph color--" + color}>{text}</p>
    );
}

ParagraphComponent.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

export default ParagraphComponent;
