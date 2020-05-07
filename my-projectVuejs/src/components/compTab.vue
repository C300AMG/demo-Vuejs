<template>
  <div class="compTab">
      <div class="tab-title">
          <span>{{title}}</span>
      </div>
      <div class="tab-content">
          <slot></slot>
      </div>
      
  </div>
</template>

<script>
export default {
    name:"comp-tab",
    props:{
        title:String
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
.compTab{
    border: 2px solid blue;
    height: 500px;
    width: 500px;
}

.tab-title{
    border: 2px solid red;
    display: flex;
    padding: 15px 30px;
}
.tabheader{
  list-style-type:none;
  margin: 0 ;
  padding: 0px;
  display: flex;
}
.tabheader li{
padding: 0 15px;
border: 2px solid blue;
background: red;
cursor:pointer;
}
.tabheader li:hover{
color:white;
background-color: red;

}
.tabheader .active{
  background-color: greenyellow;
}

</style>