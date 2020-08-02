import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { getArticles } from '../../actions';

import ArticlesComponent from '../../components/particular/article';
import NewsletterComponent from '../../components/particular/newsletter';
import ContactUsComponent from '../../components/particular/contact-us';

const HomeContainer = (props) => {
    
    const [articles, setArticles] = useState(null);
    const { data, getArticles } = props;

    useEffect(() => {
       setArticles(getArticles)
    }, [articles]);

    return (
        <main>
            <ArticlesComponent
                articles={data} />
            <NewsletterComponent />
            <ContactUsComponent />
        </main>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state.articles
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getArticles: () => {
            dispatch(getArticles())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);