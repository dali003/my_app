<template>
    <form>
        <label>color : </label>
        <input type="color" id="color" name="color"  v-model="searchQuery" @change="test" > <br>
        <label>ID : </label>
        <input type="number" id="id" name="id"  @change="test" > <br>
        <button  @click="post" >submit</button>
       
    </form>
</template>

<script>
import { ref } from 'vue';
import apiClient from './Api.js';

export default {
  setup() {
    const searchQuery = ref('');
    const data = ref('');

    const search = () => {
    
      apiClient
        .get('/api/search', {
          params: {
            query: searchQuery.value,

          },
        })
        .then(response => {
          console.log(response.query);
          // Handle the response data as needed
        })
        .catch(error => {
          console.error(error);
          // Handle the error
        });
    };



    const post = (event) => {
    event.preventDefault()
    apiClient
      .post('/api/create', 
       
           {description : "test1", age:25},

       
      )
      .then(response => {
        console.log(response.query);
        // Handle the response data as needed
      })
      .catch(error => {
        console.error(error);
        // Handle the error
      });
  };

    const sendData = payload => {
      apiClient
        .post('/api/data', payload)
        .then(response => {
          console.log(response.data);
          // Handle the response data as needed
        })
        .catch(error => {
          console.error(error);
          // Handle the error
        });
    };
    
    const test = (e)=>{
        e.preventDefault();
      
       
        search();
         console.log(e.target.value);
        
        
    };
   
    return {
      // searchQuery,
      sendData,
      search,
      post,
      // data,
      test

    };
  },
};
</script>