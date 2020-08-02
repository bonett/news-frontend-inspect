import React from 'react';

import ArticlesComponent from '../../components/particular/article';
import NewsletterComponent from '../../components/particular/newsletter';
import ContactUsComponent from '../../components/particular/contact-us';

const HomeContainer = () => {
    return (
        <main>
            <ArticlesComponent />
            <NewsletterComponent />
            <ContactUsComponent />
        </main>
    );
}

export default HomeContainer;