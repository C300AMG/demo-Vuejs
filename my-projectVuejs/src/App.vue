<template>

   <div id="app">
       
        <list-user 
        v-on:deleteUserEvent="handleDeleteUser"
        v-bind:listUser="listUser" 
        /> -->
       
       
         <demoRef 
          v-bind:title="haha"
          
        />


        <demoSlot>
            <div class="demo-slot">
                <p>Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and sup</p>
            </div>
        </demoSlot> 
<!-- <comp-tab title="Tiêu đề của tab"></comp-tab> -->

        <!-- </comp-tab> -->



        <!-- Thực hành lại cái chức năng tất cả những gì đã học -->


        
  <!-- <chuyen_trang 
  
  v-bind:title="title">
    <ul class="tabheader">
      <li 
      v-bind:class="{active:tab_active == index}"
      v-on:click="handleClick(index)"
       v-for="(item, index) in tabheader" 
       v-bind:key="index">{{item.text}}
       
       </li>
    </ul>


    <div class="tab_content tab1" v-if="tab_active === 0 ">
      tab 1  - --dsdadsVue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and sup
    </div>
    <div class="tab_content tab2" v-if="tab_active === 1 ">
      tab 2  - --Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and sup
    </div>
    <div class="tab_content tab3" v-if="tab_active === 2 ">
      tab 3  - --Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and sup
    </div>
    <div class="tab_content tab4" v-if="tab_active === 3 ">
      tab 4  - --Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and sup
    </div>

   </chuyen_trang> -->
  </div>
</template>

<script>
import chuyen_trang from './components/chuyen_trang.vue';
// import compTab from './components/compTab.vue'
import demoSlot from './components/demoSlot.vue';
import demoRef from './components/demoRef.vue';
import ListUser from './components/ListUser.vue';
export default {
  // Đây là tên component cha
  name : "app",
  // Đây là dữ liệu của trang 
   data() {

        return {
            // title:"Đây là trang list User",
            listUser : [
              {id:1,email:"a5.realy@gmail.com", active:false},
              {id:2,email:"a6.realy@gmail.com", active:true},
              {id:3,email:"a7.realy@gmail.com", active:false},
              {id:4,email:"a8.realy@gmail.com", active:false},
              {id:5,email:"a9.realy@gmail.com", active:true},
              {id:6,email:"a10.realy@gmail.com", active:true},
              {id:7,email:"a11.realy@gmail.com", active:true},
            ],

            haha : "demo Ref",
            demoSlot:"ĐÂy là slot 1212312",
           title:"Thông tin bài viết",

           tabheader:[
               {text:"tab1"},
               {text:"tab2"},
               {text:"tab3"},
               {text:"tab4"},
             ],
             tab_active :1
        }
    },
  //Đây là hàm xử lý các sự kiện của trang
  methods:{
      handleDeleteUser(data){
          var indexDelete = -1;
          this.listUser.forEach((user, index1) =>{
              console.log(user.id,index1,data.id);
              if(user.id === data.id){  
                  indexDelete = index1;
              }
          });
          if(indexDelete != -1){
              this.listUser.splice(indexDelete,1);
          }
          console.log('handleDeleteUser trong component App',data);
      },
      handleClick(index){
          console.log(this.index);
          this.tab_active = index;
        }
  },
  //Đây là phần import các component con vào thằng App
  components:{
    ListUser,
    demoRef,
    demoSlot,
    // compTab
    chuyen_trang

  }
}

</script>

<style>

*{
  box-sizing: border-box;
}
#app{
  text-align: center;
  color: blue;
  margin: 0 auto;
  padding: 0 15px;
  min-height: 3000px;
}
/* .container{
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 15px;
  min-height: 3000px;
} */

</style>