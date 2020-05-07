<template>
  <div class="ref">hello Ref<br>
  <button v-on:click="HandleClick" class="file">Chọn File</button>
  <input
  ref="haha" 
  type="file" 
  style="display:none">
  </div>
</template>

<script>
export default {
    name :"ref",
   props:{
     haha:String
 },
    data() {
        return {
            
        }
    },
    methods:{
      HandleClick(){
        this.$refs.haha.click()
      }
    }
   
}
</script>

<style>
.ref{
  background: goldenrod;
  width: 500px;
  height: 500px;
}
.beu{
  width: 200px;
  height: 50px;
  background: greenyellow;
  border-radius: 2px solid red;
}
.beu:hover{
  background-color: aquamarine;
}


.file:hover{
  background: gold;
}
.file{
  width: 200px;
  height: 50px;
  background: black;
  color:magenta;
  opacity: 1.0;
}
</style>