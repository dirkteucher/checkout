import Vue from 'vue'
import {shallow} from '@vue/test-utils'
import ShoppingCart from '../components/ShoppingCart.vue'


describe('Checking Data.spec.js', () =>{
    // Module name
    it('The name of the module is ShoppingBasket', () =>{
        expect(ShoppingCart.name).toBe("ShoppingBasket")
    })

    // Checking data
    it('The header is correct', () =>{
        var data = ShoppingCart.data();
        expect(data.msg).toBe("Buy the alphabet");
    })

    it('The starting price is 0', () =>{
        var data = ShoppingCart.data();
        expect(data.totalPrice).toBe(0);
    })

    it('The shopping cart is an empty array', () =>{
        var data = ShoppingCart.data();
        expect(data.shoppingCart).toEqual([]);
    })

    it('Check the pricing rules being listed', () =>{
        var data = ShoppingCart.data();
        expect(data.specialPricingCounter).toEqual({
            A: 0,
            B: 0,
            C: 0,
            D: 0
          });
    })


    it('Check the alphabet letters we are selling', () =>{
        var data = ShoppingCart.data();
        expect(data.shoppingListData).toEqual({
            A : {
              itemName: "A",
              price: 50,
              currency: "GBP"
            },
            B : {
              itemName: "B",
              price: 30,
              currency: "GBP"
            },
            C : {
              itemName: "C",
              price: 20,
              currency: "GBP"
            },
            D : {
              itemName: "D",
              price: 15,
              currency: "GBP"
            }
          });
    })


})