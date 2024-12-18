
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        productss: {},
        quantity:1,
      };
    },

    methods:{

      addToCart(){
          
          this.$emit('add-to-cart', { 
          id:this.productss.id,
          
          title: this.productss.title, 
          price: this.productss.price, 
          quantity: this.quantity 
          
      });
      console.log("added in card" , this.productss.title)

      }
    },


    async created() {
      const productId = this.$route.params.id;
      
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      
      this.productss = response.data;
    },
    
  };
  </script>

<template>
    
      <img :src="productss.image" alt="Product Image"  width="300px" height="400px"/>
      <h1>{{ productss.title }}</h1>
      <p>{{ productss.description }}</p>
      <p><strong>Price:</strong> ${{ productss.price }}</p>

      <label for="quantity">Quantity:</label>

        <input type="number" v-model.number="quantity" min="1" width="20px"/>
        <button @click="addToCart">Add To Cart</button>
    
  
  </template>
  
  