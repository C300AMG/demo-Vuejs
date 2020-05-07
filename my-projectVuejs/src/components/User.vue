<template>
  <div class="user">
      <button v-on:click="handleDelete">x</button>
      <p>{{ user .email}}</p>
  </div>
</template>

<script>
export default {

    name:"User",
    props:{
        user:{
            type:Object,
            default:null
        }
    },
   
    data() {
        return {
            
        }
    },
    methods: {
       handleDelete(e){
           var data ={
               id : this.user.id
           }
           console.log('cái sự kiện handleDelete này là trong component user',e);
           this.$emit('deleteUser',data);
       } 
    },

}
</script>







<style>
.user{
    position: relative;

}
.user button{
    position: absolute;
    top: 0px;
    right: 0px;
    background: red;

}
.user button:hover{
    background-color: blueviolet;
}
</style>