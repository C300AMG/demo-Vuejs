<template>

     <div class="user">
          <p> {{user.email}}</p>
         <button v-on:click="handleClick" class="delete">x</button>
     </div>

</template>

<script>
export default {
    name : "user",
    props:{
     user:{
            type:Object,
             default:null
     }
    },
    data (){
        return{
            
        }
    },
    methods:{
        handleClick(e){
            var data = {
                id:this.user.id
            } 
          console.log('hàm này trong user');
            this.$emit('deleteUser',data);
            
            
       
        }
    }

}
</script>

<style>
    .user{
        position: relative;
    }
    .user .delete {
        position: absolute;
        right: 0;
        top: 0;
       
    }
    .user .delete:hover{
         background: rgb(0, 255, 208)
    }
</style>