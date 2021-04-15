import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Dashboard from './game-dashboard.container';
import Deck from '../../components/deck/deck.component'
import Draw from '../../components/draw-card/draw.component'
import Hand from '../../components/hand/hand.component'
import { BrowserRouter } from 'react-router-dom';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Dashboard', () => {
    const getWrapper = () => mount(
        <BrowserRouter>
            <Dashboard />
        </BrowserRouter>
    );
    it('renders', () => {
        const wrapper = getWrapper();
        expect(wrapper.exists()).toBe(true);

    });
    it('render Deck Component', () => {
        const wrapper = getWrapper();
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.containsMatchingElement(<Deck />)).toEqual(true);

    });
    it('render Draw Component', () => {
        const wrapper = getWrapper();
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.containsMatchingElement(<Hand />)).toEqual(true);

    });

});