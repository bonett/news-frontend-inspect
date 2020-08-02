import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const HeadingComponent = (props) => {

    const { title, size, color } = props;

    const headingType = (size) => {
        switch (size) {
            case "extra-large":
                return <h1 className={`size--${size} color--${color} `}>{title}</h1>

            case "large":
                return <h2 className={`size--${size} color--${color} `}>{title}</h2>

            case "medium":
                return <h3 className={`size--${size} color--${color} `}>{title}</h3>

            case "small":
                return <h4 className={`size--${size} color--${color} `}>{title}</h4>

            case "extra-small":
                return <h5 className={`size--${size} color--${color} `}>{title}</h5>

            default:
                return <h6 className={`size--${size} color--${color} `}>{title}</h6>
        }
    }

    return (
        <>
            { headingType(size) }
        </>
    );
}

HeadingComponent.propTypes = {
    title: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

export default HeadingComponent;
