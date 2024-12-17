<template>


<div v-if="cart.length > 0" class="cart">
    
      <h2>Shopping Cart</h2>
      <ul>
        <li v-for="item in cart" :key="item.id">
          {{ item.title }} - Quantity: {{ item.quantity }} - Total: ${{ item.price * item.quantity }}
          
        </li>
      </ul>
      <p><strong>Total Price:</strong> ${{ totalCartPrice }}</p>
    </div>
    <div v-else>
      <p>Your cart is empty.</p>
    </div>
</template>



<script>

export default{

    props:['cart'],

    computed: {
    totalCartPrice() {
      return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
    },
  },
}

</script>