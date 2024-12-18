


<template>

    <!-- Each product will have this layout -->

    <div class="cards">
        <img :src="productss.image" alt={{productss.title}} width="200px" height="300px">
        <h2>{{ productss.title }}</h2>
        
        <router-link :to="`/product/${productss.id}`">View Details</router-link>
        <br>
        
        <label for="quantity">Quantity:</label>

        <input type="number" v-model.number="quantity" min="1" width="20px"/>
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