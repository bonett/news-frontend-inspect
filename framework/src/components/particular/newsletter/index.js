import React from 'react';

import Row from 'emerald-ui/lib/Row';
import Col from 'emerald-ui/lib/Col';

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
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6} className="newsletter__content">
                        <div className="wrapper__content__heading">
                            <HeadingComponent
                                color="light"
                                title={newsletter.heading}
                                size="extra-large"
                            />
                        </div>
                        <div className="wrapper__content__body">
                            <ParagraphComponent color="light" text={newsletter.message} />
                        </div>
                        <div className="wrapper__content__footer">
                            <ButtonComponent
                                className="btn-inverse"
                                title={newsletter.btnSubscribe}
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default NewsletterComponent;
