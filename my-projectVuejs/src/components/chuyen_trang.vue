<template>
  <div class="header">
      <p>{{title}}</p>
      <div class="title">
            <slot></slot>
      </div>
  </div>
</template>

<script>
export default {

    name:"chuyen_trang",
    props:{
        title:String,
    },
    data() {
        return {
            
        }
    },
    methods: {
        
    },
}
</script>

<style>
.header{
    border: 2px solid red;
    height: 500px;
    width: 500px;
    display: flex;
}
.tabheader{
  list-style-type:none;
  margin: 0 ;
  padding: 0px;
  display: flex;
  margin-top: 100px;
}
.tabheader li{
padding: 0 15px;
border: 2px solid blue;
background: red;
cursor:pointer;
}
.tabheader .active{
    background-color: blue;
}
</style>