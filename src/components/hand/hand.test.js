import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Hand from './hand.component';
import { BrowserRouter } from 'react-router-dom';


Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Hand', () => {
    const props = {
        cardDetails: [{ Value: 2, Suit: "Spades" }]
    }
    const getWrapper = () => mount(
        <BrowserRouter>
            <Hand {...props} />
        </BrowserRouter>
    );
    it('renders', () => {
        const wrapper = getWrapper();
        expect(wrapper.exists()).toBe(true);

    });
    it('simulate click', () => {
        const wrapper = getWrapper();
        const submitBtn = wrapper.find('.sort-btn');
        submitBtn.simulate('click');

    });




});