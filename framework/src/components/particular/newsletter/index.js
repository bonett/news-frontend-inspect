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
        <section id="newsletter" className="wrapper newsletter">
            <div className="container">
                <div className="wrapper__content newsletter__content">
                    <div className="wrapper__content__heading">
                        <HeadingComponent
                            color="light"
                            title={newsletter.heading}
                            size="extra-large" />
                    </div>
                    <div className="wrapper__content__body">
                        <ParagraphComponent
                            color="light"
                            text={newsletter.message} />
                    </div>
                    <div className="wrapper__content__footer">
                        <ButtonComponent
                            className="btn-inverse"
                            closable={false}
                            title={newsletter.btnSubscribe} />
                    </div>
                </div>
            </div>
        </section>
    );
}

NewsletterComponent.propTypes = {

}

export default NewsletterComponent;
