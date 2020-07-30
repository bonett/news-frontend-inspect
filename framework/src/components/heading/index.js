import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const HeadingComponent = (props) => {

    const { title, size } = props;

    const headingType = (size) => {
        switch (size) {
            case "extra-large":
                return <h1>{title}</h1>

            case "large":
                return <h2>{title}</h2>

            case "medium":
                return <h3>{title}</h3>

            case "small":
                return <h4>{title}</h4>

            case "extra-small":
                return <h5>{title}</h5>

            default:
                return <h6>{title}</h6>
        }
    }

    return (
        <>
            {
                headingType(size)
            }
        </>
    );
}

HeadingComponent.propTypes = {
    title: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
}

export default HeadingComponent;
