<template>
  <header>
      <h1>{{title}}</h1>
      <button v-on:click="changeTitleHeader"> thay đổi title từ component header</button>
    
  </header>
</template>

<script>
export default {
 name:"comp-header",
 props:{
     title:String
 },

 data() {
     return {
            text: "Header",
        
     }
 },
 methods:{
     changeTitleHeader(e){
        //  this.title = "học lập trình frontEnd";
         console.log('trước khi nó kích hoạt sự kiện changeTitle Event');
         var data = {
             title :"test->data được truyền qua event"
         }
        this.$emit('changeTitle',{data})
        console.log('sau khi nó kích hoạt sự kiện changeTitle Event');
     }
 }
}
</script>

<style>

</style>