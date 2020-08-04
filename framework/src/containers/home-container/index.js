import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchArticles, fetchMoreArticles } from '../../actions/article';

import ArticlesComponent from '../../components/particular/article';
import NewsletterComponent from '../../components/particular/newsletter';
import ContactUsComponent from '../../components/particular/contact-us';

const HomeContainer = ({ fetchArticles, articles, fetchMoreArticles, disableBtn }) => {

    const [initial, setInitial] = useState(0),
        [limit, setLimit]     = useState(4);

   /*  useEffect(() => {
        fetchArticles();
        setInitial(4);
        setLimit(8);
    }, [fetchArticles]); */

    const onLoadMoreData = () => {
        let index = initial + 4,
            end   = limit + 4;

        setInitial(index);
        setLimit(end);

        fetchMoreArticles(articles.list, index, end);
    };

    return (
        <main>
            <ArticlesComponent
                articles={articles.onload}
                disableLoadMoreBtn={disableBtn}
                onloadMoreData={onLoadMoreData} />
            <NewsletterComponent />
            <ContactUsComponent />
        </main>
    );
};

const mapStateToProps = state => {
    return {
        articles  : state.articles,
        disableBtn: state.articles.isDisabled
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchArticles: () => dispatch(fetchArticles()),
        fetchMoreArticles: (articles, initial, limit) => dispatch(fetchMoreArticles(articles, initial, limit))
    };
};

HomeContainer.propTypes = {
    articles: PropTypes.object,
    fetchArticles: PropTypes.func,
    fetchMoreArticles: PropTypes.func,
    disableBtn: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
