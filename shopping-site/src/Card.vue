


<template>

    <div class="cards">
        <img :src="productss.image" alt="Girl in a jacket">
        <h2>{{ productss.title }}</h2>
        
        <router-link :to="`/product/${productss.id}`">View Details</router-link>
        
        <label for="quantity">Quantity:</label>

        <input type="number" v-model.number="quantity" min="1"/>
        <button @click="addToCart">Add To Cart</button>


    </div>

</template>

<script>

export default {


    props:['productss'],

    data(){
        return{

            quantity:1
        }
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
    }

    
}



</script>