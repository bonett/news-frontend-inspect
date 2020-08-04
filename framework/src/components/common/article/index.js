import React from 'react';
import PropTypes from 'prop-types';
import Truncate from 'react-truncate';
import Col from 'emerald-ui/lib/Col';

import './style.scss';

const ArticleComponent = props => {
    const { article } = props;

    return (
        <Col xs={12} sm={6} md={6} lg={6}>
            <article>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                    <div className="media">
                        <img
                            className="img--size"
                            src={article.image}
                            alt={article.title}
                        />
                    </div>
                    <div className="caption">
                        <h2 className="article--title">
                            <Truncate lines={2}>
                                {article.title}
                            </Truncate>
                            </h2>
                        <p className="article--description">
                            <Truncate lines={5}>
                            {article.description}
                            </Truncate>
                        </p>
                    </div>
                </a>
            </article>
        </Col>
    );
};

ArticleComponent.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    }),
};

export default ArticleComponent;
