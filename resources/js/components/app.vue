<template>
     <div class="todoListContainer">
          <div class="heading">
               <h2 id="title">Todo App</h2>
               <add-item  v-on:reloadlist="getList()"></add-item>
          </div>
          <list-view :items="items" v-on:reloadlist="getList()"></list-view>
     </div>
</template>
<script>
import addItem from "./addItem";
import listView from "./listView";
export default {
     components :{
          addItem ,
          listView
     },
      data:function(){
          return {
               items:[]
          }
     },
     methods:{
          getList(){
               axios.get('api/items').then(response=>{
                   this.items = response.data
               }).catch(error=>{
                    console.log(error)
               })
          }
     },
     created(){
          this.getList()
     }
};
</script>

<style scoped>
.todoListContainer{
     width: 350px;
     margin: auto;
}
.heading{
     background:#e6e6e6;
     padding:10px;
}
#title{
     text-align: center;
     margin: auto;
     padding-bottom:20px ;
}
 </style>