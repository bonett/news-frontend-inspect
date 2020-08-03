import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchArticles } from '../../actions/article';

import ArticlesComponent from '../../components/particular/article';
import NewsletterComponent from '../../components/particular/newsletter';
import ContactUsComponent from '../../components/particular/contact-us';

const HomeContainer = ({ fetchArticles, articles }) => {
    useEffect(() => {
        fetchArticles();
    }, []);

    return (
        <main>
            <ArticlesComponent articles={articles.list} />
            <NewsletterComponent />
            <ContactUsComponent />
        </main>
    );
};

const mapStateToProps = state => {
    return {
        articles: state.articles,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchArticles: () => dispatch(fetchArticles()),
    };
};

HomeContainer.propTypes = {
    articles: PropTypes.object,
    fetchArticles: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
