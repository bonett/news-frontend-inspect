import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { expect } from 'chai';

import { NewsletterComponent } from './index';

configure({adapter: new Adapter()});

describe("NewsLetter Component", () => {
    it('renders correctly', () => {
        const component = shallow(<NewsletterComponent />);
        const wrapper = component.find('.wrapper');
        expect(wrapper.length).toBe(1);
    });
});