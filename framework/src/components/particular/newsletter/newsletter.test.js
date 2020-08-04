import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { NewsletterComponent } from './index';

it('renders correctly', () => {
    const wrapper = shallow(<NewsletterComponent />);
    expect(wrapper).to.be.present();
});