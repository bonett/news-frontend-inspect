import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { fetchArticles } from '../../actions';
import {
    FETCH_ARTICLES_REQUEST,
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_FAILURE
} from '../../types';


import ArticlesComponent from '../../components/particular/article';
import NewsletterComponent from '../../components/particular/newsletter';
import ContactUsComponent from '../../components/particular/contact-us';

const HomeContainer = ({ fetchArticles}) => {
    const [articles, setArticles] =  useState(null);
    useEffect(() => {
        setArticles(fetchArticles());
    }, [articles]);

    return (
        <main>
            <ArticlesComponent articles={articles}/>
            <NewsletterComponent />
            <ContactUsComponent />
        </main>
    );
}

const mapStateToProps = state => {
    return {
        articleData: state.article
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchArticles: () => dispatch(fetchArticles())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);