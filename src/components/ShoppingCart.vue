<template>
  <div class="shopping-cart-container">
    <h1>{{ msg }}</h1>
    
    <section id="alphabet-shopping-list">
        <v-btn class="btn theme--dark primary" @click="buy('a')" color="blue">A</v-btn>
        <v-btn class="btn theme--dark primary" @click="buy('b')" color="blue">B</v-btn>
        <v-btn class="btn theme--dark primary"  @click="buy('c')" color="blue">C</v-btn>
        <v-btn class="btn theme--dark primary"  @click="buy('d')" color="blue">D</v-btn>
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
        a: 0,
        b: 0,
        c: 0,
        d: 0
      },
      shoppingListData: {
        a : {
          itemName: "A",
          price: 50,
          currency: "GBP"
        },
        b : {
          itemName: "B",
          price: 30,
          currency: "GBP"
        },
        c : {
          itemName: "C",
          price: 20,
          currency: "GBP"
        },
        d : {
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

      // The following pricing rules can easily be refactored into separate functions as complexity of pricing rules grows in numbers
      // The exact specifications would need to be discussed with the product manager/owner as there is a number of 
      // ways in which these rules could be handled
      // ++++++ Rule 1 - If purchasing 3 or more "A's" the price per "A" = £43.3 and the total is rounded up ++++++
      if(this.specialPricingCounter.a > 2){
        this.shoppingListData.a.price = 43.3;
      }else{
        this.shoppingListData.a.price = 50;
      }
      //  ++++++ Rule 2 - If purchasing 2 or more "B's" the price per "B" = £22.5  and the total is rounded up ++++++
      if(this.specialPricingCounter.b > 1){  // A ternary could be used here for leaner code
        this.shoppingListData.b.price = 22.5;
      }else{
        this.shoppingListData.b.price = 30;
      }
      this.updateShoppingTotal();
    },
    remove: function(itemName){
      var localApp = this;
        for(var item in this.shoppingCart){
          if(this.shoppingCart[item].shoppingItems.itemName === itemName){
            localApp.shoppingCart.splice(item, 1);
            this.specialPricingCounter[itemName] = this.specialPricingCounter[itemName]-1;
            this.updateShoppingTotal();
            return;
          }
        }
        this.updateShoppingTotal();
    },
    updateShoppingTotal: function(){
      this.totalPrice = 0;

      for(var items in this.shoppingCart){
        console.log(this.shoppingCart[items].shoppingItems.price)
        this.totalPrice = this.totalPrice + this.shoppingCart[items].shoppingItems.price;
      }
      this.totalPrice = Math.ceil(this.totalPrice);
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