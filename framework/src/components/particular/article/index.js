import React from 'react';
import PropTypes from 'prop-types';

import AlertComponent from './../../common/alert';
import ButtonComponent from './../../common/button';
import HeadingComponent from './../../common/heading';

import './style.scss';

import data from '../../../data/static';

const ArticleComponent = () => {

    const article = data && data.article,
        alert = data && data.alert;

    return (
        <section id="article" className="article">
            <div className="container">
                <div className="article__wrapper">
                    <div className="article__wrapper__alert">
                        <AlertComponent
                            color="info"
                            closable={true}
                            message={alert.message} />
                    </div>
                    <div className="article__wrapper__content">
                        <div className="heading">
                            <HeadingComponent
                                color="dark"
                                title={article.heading}
                                size="extra-large" />
                        </div>
                        <div className="article">
                            <article className="article__item">
                                Article
                                </article>
                        </div>
                    </div>
                    <div className="article__wrapper__action">
                        <ButtonComponent
                            color="primary"
                            title={article.btnLoadMore}
                            closable={false} />
                    </div>
                </div>
            </div>
        </section>
    );
}

ArticleComponent.propTypes = {

}

export default ArticleComponent;
