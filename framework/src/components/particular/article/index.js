import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AlertComponent from './../../common/alert';
import ArticleComponent from './../../common/article';
import ButtonComponent from './../../common/button';
import HeadingComponent from './../../common/heading';
import SkeletonComponent from '../../common/skeleton';
import SpinnerComponent from '../../common/spinner';

import Panel from 'emerald-ui/lib/Panel';
import Row from 'emerald-ui/lib/Row';
import Col from 'emerald-ui/lib/Col';

import './style.scss';

import data from '../../../data/static';

const ArticlesComponent = ({ articles, onloadMoreData, disableLoadMoreBtn, loading }) => {

    const article = data && data.article,
          alert   = data && data.alert;

    const loaderSkeleton = () => {
        return [1, 2, 3, 4].map(index => {
            return <SkeletonComponent key={index} />;
        });
    };

    const getArticleByItem = () => {
        return (
            <>
                {articles && articles.length > 0
                    ? articles.map(item => {
                        return <ArticleComponent article={item} key={item.uri} />;
                    })
                    : loaderSkeleton()}{' '}
            </>
        );
    };

    return (
        <section id="article" className="wrapper article">
            <div className="container">
                <Row className="wrapper__content article__content">
                    <Col
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        className="wrapper__content__heading"
                    >
                        <AlertComponent
                            color="info"
                            closable={true}
                            message={alert.message}
                        />
                        <HeadingComponent
                            color="dark"
                            title={article.heading}
                            size="extra-large"
                        />
                    </Col>
                    <Col
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        className="wrapper__content__body"
                    >
                        <Panel className="article__panel">
                            <Panel.Body>
                                <Row className="article__content__list">
                                    {getArticleByItem()}
                                </Row>
                            </Panel.Body>
                        </Panel>
                    </Col>
                    <Col
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        className="wrapper__content__footer article__content__button"
                    >
                        <SpinnerComponent
                            show={loading}/>
                        <ButtonComponent
                            color="primary"
                            isDisabled={disableLoadMoreBtn}
                            handleClickButton={onloadMoreData}
                            title={article.btnLoadMore}
                            closable={false}
                        />
                    </Col>
                </Row>
            </div>
        </section>
    );
};

const mapStateToProps = state => {
    return {
        loading  : state.articles.loading,
    };
};

ArticlesComponent.propTypes = {
    articles: PropTypes.array,
    onloadMoreData: PropTypes.func,
    disableLoadMoreBtn: PropTypes.bool,
    loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, '')(ArticlesComponent);
