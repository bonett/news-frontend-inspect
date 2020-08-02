import React from 'react';
import PropTypes from 'prop-types';

import AlertComponent from './../../common/alert';
import ArticleComponent from './../../common/article';
import ButtonComponent from './../../common/button';
import HeadingComponent from './../../common/heading';

import Panel from 'emerald-ui/lib/Panel';
import Row from 'emerald-ui/lib/Row';
import Col from 'emerald-ui/lib/Col';

import './style.scss';

import data from '../../../data/static';
import SkeletonComponent from '../../common/skeleton';

const ArticlesComponent = (props) => {

    const article  = data && data.article,
          alert    = data && data.alert;

    const { articles } = props;
          /* articles = [
            {
                id: 0,
                title: "Atlantci investigate crime syndicate involvement after teens c...",
                description: "Cueensland police are investigating whether young women at the centre of the state's latest coronavirus controversy were coached by an organised crime syndicate to cover their tracks at the border.",
                image: "https://1v1d1e1lmiki1lgcvx32p49h8fe-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/12506738-3x2-large-2-960x600.jpg",
                url: "https://thenewdaily.com.au/news/2020/07/31/queensland-police-brisbane-teens-coronavirus/"
            },
            {
                id: 1,
                title: "Contintnela investigate crime syndicate involvement after teens c...",
                description: "Cueensland police are investigating whether young women at the centre of the state's latest coronavirus controversy were coached by an organised crime syndicate to cover their tracks at the border.",
                image: "https://1v1d1e1lmiki1lgcvx32p49h8fe-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/12506738-3x2-large-2-960x600.jpg",
                url: "https://thenewdaily.com.au/news/2020/07/31/queensland-police-brisbane-teens-coronavirus/"
            },
            {
                id: 2,
                title: "Argentina investigate crime syndicate involvement after teens c...",
                description: "Cueensland police are investigating whether young women at the centre of the state's latest coronavirus controversy were coached by an organised crime syndicate to cover their tracks at the border.",
                image: "https://1v1d1e1lmiki1lgcvx32p49h8fe-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/12506738-3x2-large-2-960x600.jpg",
                url: "https://thenewdaily.com.au/news/2020/07/31/queensland-police-brisbane-teens-coronavirus/"
            },
            {
                id: 3,
                title: "Brasil Has been investigate crime syndicate involvement after teens c...",
                description: "Cueensland police are investigating whether young women at the centre of the state's latest coronavirus controversy were coached by an organised crime syndicate to cover their tracks at the border.",
                image: "https://1v1d1e1lmiki1lgcvx32p49h8fe-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/12506738-3x2-large-2-960x600.jpg",
                url: "https://thenewdaily.com.au/news/2020/07/31/queensland-police-brisbane-teens-coronavirus/"
            }
        ]; */

    const loaderSkeleton = () => {
        return (
            [1,2,3,4].map((index) => { return <SkeletonComponent key={index} /> })
        )
    }

    const getArticleByItem = () => {
        return (
            <>
                {
                    articles ? loaderSkeleton() :
                    articles.map((item) => {
                        return <ArticleComponent article={item} key={item.id} />
                    }) 
                }
            </>
        )
    }

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
                        <Panel className="article__panel">
                            <Panel.Body>
                                <Row className="article__content__list">
                                    {
                                        getArticleByItem()
                                    }
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

ArticlesComponent.propTypes = {
    articles: PropTypes.any.isRequired,
}

export default ArticlesComponent;
