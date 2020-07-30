import React from 'react';

import AlertComponent from './../../components/alert';
import ButtonComponent from '../../components/button';

import data from '../../data/static';

const HomeContainer = () => {

    const alertMessage = data && data.ALERT_MESSAGE;

    return (
        <main>
            <section className="stories">
                <div className="container">
                    <div className="stories__wrapper">
                        <div className="stories__wrapper__alert">
                            <AlertComponent
                                color="info"
                                closable={true}
                                message={alertMessage} />
                        </div>
                        <div className="stories__wrapper__content">
                            <div className="heading">
                                <h1 className="heading__title">Tops news</h1>
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
                                title="View more stories"
                                closable={false} />
                        </div>
                    </div>
                </div>
            </section>

            <section id="newsletter" className="newsletter">
                <div className="container">
                    <div className="newsletter__content">
                        <h2 className="newsletter__title--size color--white">Subscribe to our newsletter.</h2>
                        <p className="newsletter__paragraph--size color--white">Subscribe to our newsletter to receive
                        weekly digests of the best and most
                        ground-breaking news.
                        Also receive a discount on your monthly subscription.</p>
                        <button type="button"
                            className="newsletter__button--unlog primary">subscribe</button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default HomeContainer;