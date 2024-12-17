

<template>

  <div>

    <nav class="navbar">
      <router-link to="/home">Home</router-link> |
      <router-link to="/cart">Cart</router-link> 


    </nav>

    <router-view 
      :cart="cart" 
      @add-to-cart="addToCart" 
    />




  </div>
  
</template>

<script>
import axios from 'axios';
import Card from './Card.vue';
import {ref,computed} from 'vue'


export default {
  name:'App',
  components:{Card},
  data() {

    return {
      products_list: [],
      cart: [],
    };
    
  },

  methods: {
    addToCart(item) {
      console.log("Item added:", item);
      // Check if item is already in the cart
      const existingItem = this.cart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity; // Update quantity
      } else {
        this.cart.push(item); // Add new item to cart
      }
    },
  },
  
};
</script>

<style>
.navbar {
  background-color: #f8f9fa;
  padding: 10px;
  display: flex;
  gap: 20px;
  font-size: 18px;
}

</style>
