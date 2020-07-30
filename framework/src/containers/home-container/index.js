import React from 'react';

import ArticleComponent from '../../components/particular/article';
import NewsletterComponent from '../../components/particular/newsletter';
import ContactUsComponent from '../../components/particular/contact-us';

const HomeContainer = () => {
    return (
        <main>
            <ArticleComponent />
            <NewsletterComponent />
            <ContactUsComponent />
        </main>
    );
}

export default HomeContainer;