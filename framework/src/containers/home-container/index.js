import React from 'react';

import AlertComponent from './../../components/alert';
import ButtonComponent from '../../components/button';
import HeadingComponent from '../../components/heading';
import ParagraphComponent from '../../components/paragraph';

import data from '../../data/static';

const HomeContainer = () => {

    const alert = data && data.alert,
        stories = data && data.stories,
        newsletter = data && data.newsletter;

    return (
        <main>
            <section id="stories" className="stories">
                <div className="container">
                    <div className="stories__wrapper">
                        <div className="stories__wrapper__alert">
                            <AlertComponent
                                color="info"
                                closable={true}
                                message={alert.message} />
                        </div>
                        <div className="stories__wrapper__content">
                            <div className="heading">
                                <HeadingComponent
                                    title={stories.heading}
                                    size="extra-large" />
                            </div>
                            <div className="article">
                                <article className="article__item">
                                    Article
                                </article>
                            </div>
                        </div>
                        <div className="stories__wrapper__action">
                            <ButtonComponent
                                color="primary"
                                title={stories.btnLoadMore}
                                closable={false} />
                        </div>
                    </div>
                </div>
            </section>

            <section id="newsletter" className="newsletter">
                <div className="container">
                    <div className="newsletter__content">
                        <div className="heading">
                            <HeadingComponent
                                title={newsletter.heading}
                                size="large" />
                        </div>
                        <div className="description">
                            <ParagraphComponent color ="light" text={newsletter.message} />
                        </div>
                        <div className="footer">
                            <ButtonComponent
                                color="primary"
                                title={newsletter.btnSubscribe}
                                closable={false} />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default HomeContainer;