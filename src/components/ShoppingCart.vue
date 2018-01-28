<template>
  <div class="shopping-cart-container">
    <h1>{{ msg }}</h1>
    
    <section id="alphabet-shopping-list">
        <v-btn class="btn theme--dark primary" @click="buy('A')" color="blue">A</v-btn>
        <v-btn class="btn theme--dark primary" @click="buy('B')" color="blue">B</v-btn>
        <v-btn class="btn theme--dark primary"  @click="buy('C')" color="blue">C</v-btn>
        <v-btn class="btn theme--dark primary"  @click="buy('D')" color="blue">D</v-btn>
    </section>

    <section class="alphabet-shopping-cart">
      <ul>
        <li v-for="items in shoppingCart">{{items.shoppingItems.itemName}} <v-btn class="btn theme--dark warning" color="red" @click="remove(items.shoppingItems.itemName)">Remove</v-btn>  </li>
      </ul>
     <div class="total-checkout">
       <span>Total</span> <span class="price">£{{totalPrice}}</span>
     </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'ShoppingBasket',
  data () {
    return {
      msg: 'Buy the alphabet',
      totalPrice: 0,
      shoppingCart: [],
      specialPricingCounter: {
        A: 0,
        B: 0,
        C: 0,
        D: 0
      },
      shoppingListData: {
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
      }
    }
  },
  methods:  {
    buy: function(itemID){
      const shoppingItems = "shoppingItems";
      this.shoppingCart.push({shoppingItems: this.shoppingListData[itemID]});
      this.specialPricingCounter[itemID] = this.specialPricingCounter[itemID]+1;
      // Check the pricing rules
      this.checkPricingRules();
      this.updateShoppingTotal();
    },
    remove: function(itemName){
      var localApp = this;
        for(var item in this.shoppingCart){
          if(this.shoppingCart[item].shoppingItems.itemName === itemName){
            localApp.shoppingCart.splice(item, 1);
            this.specialPricingCounter[itemName] = this.specialPricingCounter[itemName]-1;
            this.checkPricingRules();
            this.updateShoppingTotal();
            return;
          }
        }
        this.checkPricingRules();
        this.updateShoppingTotal();
    },
    updateShoppingTotal: function(){
      this.totalPrice = 0;

      for(var items in this.shoppingCart){
        this.totalPrice = this.totalPrice + this.shoppingCart[items].shoppingItems.price;
      }
      this.totalPrice = Math.ceil(this.totalPrice);
    },
    checkPricingRules: function(){
      // The exact specifications would need to be discussed with the product manager/owner as there is a number of 
      // ways in which these rules could be handled
      // ++++++ Rule 1 - If purchasing 3 or more "A's" the price per "A" = £43.3 and the total is rounded up ++++++
      if(this.specialPricingCounter.A > 2){
        this.shoppingListData.A.price = 43.3;
      }else{
        this.shoppingListData.A.price = 50;
      }
      //  ++++++ Rule 2 - If purchasing 2 or more "B's" the price per "B" = £22.5  and the total is rounded up ++++++
      if(this.specialPricingCounter.B > 1){  // A ternary could be used here for leaner code
        this.shoppingListData.B.price = 22.5;
      }else{
        this.shoppingListData.B.price = 30;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin: 0 10px;
  }
</style>