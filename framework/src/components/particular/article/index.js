import React from 'react';
import PropTypes from 'prop-types';

import AlertComponent from './../../common/alert';
import ButtonComponent from './../../common/button';
import HeadingComponent from './../../common/heading';

import Panel from 'emerald-ui/lib/Panel';
import Row from 'emerald-ui/lib/Row';
import Col from 'emerald-ui/lib/Col';

import './style.scss';

import data from '../../../data/static';

const ArticleComponent = () => {

    const article = data && data.article,
        alert = data && data.alert;

    return (
        <section id="article" className="wrapper article">
            <div className="container">
                <Row className="wrapper__content article__content">
                    <Col xs={12} sm={12} md={12} lg={12} className="wrapper__content__heading">
                        <AlertComponent
                            color="info"
                            closable={true}
                            message={alert.message} />
                        <HeadingComponent
                            color="dark"
                            title={article.heading}
                            size="extra-large" />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} className="wrapper__content__body">
                        <Panel>
                            <Panel.Body>
                                <Row className="article__content__list">
                                    <Col xs={12} sm={12} md={6} lg={6} className="wrapper__content__body">
                                        <article>
                                            <a href="https://thenewdaily.com.au/news/2020/07/31/queensland-police-brisbane-teens-coronavirus/" target="_blank">
                                                <div className="media">
                                                    <img className="img--size" src="https://1v1d1e1lmiki1lgcvx32p49h8fe-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/12506738-3x2-large-2-960x600.jpg" alt="Police investigate crime syndicate involvement after teens charged" />
                                                </div>
                                                <div className="caption">
                                                    <h2 className="article--title">Police investigate crime syndicate involvement after teens c...</h2>
                                                    <p className="article--descrption">ueensland police are investigating whether young women at the centre of the state's latest coronavirus controversy were coached by an organised crime syndicate to cover their tracks at the border.</p>
                                                </div>
                                            </a>
                                        </article>
                                    </Col>
                                    <Col xs={12} sm={12} md={6} lg={6} className="wrapper__content__body">
                                        <article>
                                            <a href="https://thenewdaily.com.au/news/2020/07/31/queensland-police-brisbane-teens-coronavirus/" target="_blank">
                                                <div className="media">
                                                    <img className="img--size" src="https://1v1d1e1lmiki1lgcvx32p49h8fe-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/12506738-3x2-large-2-960x600.jpg" alt="Police investigate crime syndicate involvement after teens charged" />
                                                </div>
                                                <div className="caption">
                                                    <h2 className="article--title">Police investigate crime syndicate involvement after teens c...</h2>
                                                    <p className="article--descrption">ueensland police are investigating whether young women at the centre of the state's latest coronavirus controversy were coached by an organised crime syndicate to cover their tracks at the border.</p>
                                                </div>
                                            </a>
                                        </article>
                                    </Col>
                                    <Col xs={12} sm={12} md={6} lg={6} className="wrapper__content__body">
                                        <article>
                                            <a href="https://thenewdaily.com.au/news/2020/07/31/queensland-police-brisbane-teens-coronavirus/" target="_blank">
                                                <div className="media">
                                                    <img className="img--size" src="https://1v1d1e1lmiki1lgcvx32p49h8fe-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/12506738-3x2-large-2-960x600.jpg" alt="Police investigate crime syndicate involvement after teens charged" />
                                                </div>
                                                <div className="caption">
                                                    <h2 className="article--title">Police investigate crime syndicate involvement after teens c...</h2>
                                                    <p className="article--descrption">ueensland police are investigating whether young women at the centre of the state's latest coronavirus controversy were coached by an organised crime syndicate to cover their tracks at the border.</p>
                                                </div>
                                            </a>
                                        </article>
                                    </Col>
                                    <Col xs={12} sm={12} md={6} lg={6} className="wrapper__content__body">
                                        <article>
                                            <a href="https://thenewdaily.com.au/news/2020/07/31/queensland-police-brisbane-teens-coronavirus/" target="_blank">
                                                <div className="media">
                                                    <img className="img--size" src="https://1v1d1e1lmiki1lgcvx32p49h8fe-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/12506738-3x2-large-2-960x600.jpg" alt="Police investigate crime syndicate involvement after teens charged" />
                                                </div>
                                                <div className="caption">
                                                    <h2 className="article--title">Police investigate crime syndicate involvement after teens c...</h2>
                                                    <p className="article--descrption">ueensland police are investigating whether young women at the centre of the state's latest coronavirus controversy were coached by an organised crime syndicate to cover their tracks at the border.</p>
                                                </div>
                                            </a>
                                        </article>
                                    </Col>
                                </Row>
                            </Panel.Body>
                        </Panel>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} className="wrapper__content__footer article__content__button">
                        <ButtonComponent
                            color="primary"
                            title={article.btnLoadMore}
                            closable={false} />
                    </Col>
                </Row>
            </div>
        </section>
    );
}

ArticleComponent.propTypes = {

}

export default ArticleComponent;
