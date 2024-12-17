
<template>

<div>
    
    
    <h1>Products</h1>
    <div class="products">
      <Card
        v-for="product in products_list" 
        :key="product.id"
        :productss="product"
        @add-to-cart="addToCart"
        />
        
        
    </div>
    
  </div>

</template>

<script>

import Card from './Card.vue'

import axios from 'axios'

export default{
    components:{Card},

    data(){
        return{
            products_list:[],
            cart: [],
        }
    },

    methods: {
    addToCart(item) {
        this.$emit('add-to-cart', item);
    
    },
  },

  async created(){

    const response = await axios.get('https://fakestoreapi.com/products');
    this.products_list = response.data;
  }
}


</script>