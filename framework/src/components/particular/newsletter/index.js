import React from 'react';
import PropTypes from 'prop-types';

import ButtonComponent from '../../common/button';
import HeadingComponent from '../../common/heading';
import ParagraphComponent from '../../common/paragraph';

import './style.scss';

import data from '../../../data/static';

const NewsletterComponent = () => {

    const newsletter = data && data.newsletter;

    return (
        <section id="newsletter" className="newsletter">
            <div className="container">
                <div className="newsletter__content">
                    <div className="heading">
                        <HeadingComponent
                            title={newsletter.heading}
                            size="large" />
                    </div>
                    <div className="description">
                        <ParagraphComponent color="light" text={newsletter.message} />
                    </div>
                    <div className="button">
                        <ButtonComponent
                            color="primary"
                            title={newsletter.btnSubscribe}
                            closable={false} />
                    </div>
                </div>
            </div>
        </section>
    );
}

NewsletterComponent.propTypes = {

}

export default NewsletterComponent;
