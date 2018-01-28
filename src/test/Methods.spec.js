import Vue from 'vue'
import {shallow} from '@vue/test-utils'
import ShoppingCart from '../components/ShoppingCart.vue'


describe('Checking the methods of ShoppingCart', () =>{

    // Checking functions
    it('Check the buy() exists', () =>{
        expect(typeof(ShoppingCart.methods.buy)).toBe('function');
    })

    it('Check the remove() exists', () =>{
        expect(typeof(ShoppingCart.methods.remove)).toBe('function');
    })

    it('Check that updateShoppingTotal() exists', () =>{
        expect(typeof(ShoppingCart.methods.updateShoppingTotal)).toBe('function');
    })


})