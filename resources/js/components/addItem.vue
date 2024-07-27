<template>

     <div class="addItem">
          <input type="text" v-model="item.name">
           <button class="btn btn-primary" @click="addItem()">Add</button>
     </div>
</template>
<script>
export default {
     data:function(){
          return {
               item:{name:""}
          }
     },
     methods:{
          addItem(){
               if(this.item.name==""){
                    return;
               }
               axios.post('api/item/store', {
                    item:this.item
               }).then(response=>{
                    if(response.status==201){
                         this.item.name=""
                           this.$emit("reloadlist")
                    }
               }).catch(error=>{
                    console.log(error)
               })
          }
     }
};
</script>

<style scoped>

.addItem{
     display:flex;
     justify-content:center;
     align-items:center;
}
input{
     background:#e6e6e6;
     padding:5px;
}
#title{
     text-align: center;
     outline: none;
     padding:10px;
     margin-right:10px ;
     width: 100%;
}
button{
     margin-left: 20px;
}
 </style>