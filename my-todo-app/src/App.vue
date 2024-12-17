

<script setup>
import {ref,computed} from 'vue'

const items=ref([

{id:1, label:'pick up the trash', newItemPriority:'High'}

])
let nextTodoId=2


const title=ref('To-Do List')
const add_todo=ref('')

const addTodo= () =>{
  items.value.push({

    id: nextTodoId++,
    label:add_todo.value,
    newItemPriority:newItemPriority.value

  })
  add_todo.value=''
  newItemPriority.value=''
  
}

const cancelAdd = () => {
  add_todo.value = ""; // Reset the input field
  newItemPriority.value = ''; // Reset the checkbox
  showItems.value = false; // Hide the input area
};

const removeBtn=(id) =>{
  items.value=items.value.filter((item) => item.id!=id)




}
const newItemPriority=ref('')
const filterPriority = ref('All');
const showItems=ref(false)
const filteredItems = computed(() => {
  if(filterPriority.value=='All'){
    return items.value
  }
  return items.value.filter((item) => item.newItemPriority === filterPriority.value);
});

</script>

<template>


  <h1>{{ title }}</h1>
  
  <button v-if="!showItems" @click="showItems=true">Add things</button>
  <button v-if="showItems" @click="cancelAdd" class="cancel-btn">Cancel</button>


  <div v-if="showItems">
  <input v-model="add_todo" id="add" placeholder="Enter your todo!"/>
  <label>
      <input type="radio" v-model="newItemPriority" value="High"> 
      High Priority
    </label>
    <label>
      <input type="radio" v-model="newItemPriority" value="Medium"> 
      Med Priority
    </label>

    <label>
      <input type="radio" v-model="newItemPriority" value="Low"> 
      Low Priority
    </label>

  <br>
  <button @click="addTodo" class="add-btn" :disabled="add_todo.length < 3">Add</button>
  

</div>




 
  <div class="all">
    <div v-if="!showItems" class="priority">
<label for="priority_filter"> Filter by:    </label>
<select v-model="filterPriority" class="priority_filter">

<option value="All">All</option>
      <option value="High">High</option>
      <option value="Medium">Medium</option>
      <option value="Low">Low</option>
     

    </select>
  </div>
    <ul>

      <li v-for="item in filteredItems" :key="item.id">
        {{ item.label }} <span v-if= "item.newItemPriority">({{ item.newItemPriority }} Priority)</span>

        <button @click="removeBtn(item.id)" class="remove-btn">Remove</button>


      </li>

    </ul>
  </div>



</template>

<style scoped>



</style>
