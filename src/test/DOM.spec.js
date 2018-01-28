import Vue from 'vue'
import {shallow} from '@vue/test-utils'
import ShoppingCart from '../components/ShoppingCart.vue'

describe('Checking the DOM elements exist', () =>{
    // Checking dom elements exist
    it('Testing the header text exists', () =>{
        const wrapper = shallow(ShoppingCart)
        const message = wrapper.find('h1').text()
        expect(message).toBe("Buy the alphabet")
    })

    it('Testing the section alphabet', () =>{
        const wrapper = shallow(ShoppingCart)
        const sectionAlphabet = wrapper.find('#alphabet-shopping-list').exists();
        expect(sectionAlphabet).toEqual(true);
    })
})