
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        productss: {},
      };
    },
    async created() {
      const productId = this.$route.params.id;
      
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      
      this.productss = response.data;
    },
    
  };
  </script>

<template>
    
      <img :src="productss.image" alt="Product Image" />
      <h2>whars</h2>
      <h1>{{ productss.title }}</h1>
      <p>{{ productss.description }}</p>
      <p><strong>Price:</strong> ${{ productss.price }}</p>
    
  
  </template>
  
  