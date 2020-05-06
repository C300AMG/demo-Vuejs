<template>

   <div id="app">

   <div class="container">
    <button v-on:click="title = 'Học lập trình trực tiếp tại zendvn'">Thay đổi conponentApp.vue</button>
        <comp-header 
          v-bind:title="title"
          v-on:changeTitle="handleChangeTitle"
        />
      <list-user 
      v-on:deleteUserEvent="handleDeleteUser"
      v-bind:listUser="listUser" 
      />
      <comp-footer v-bind:title="title" />
   </div>
   </div>

  

</template>

<script>
/* 
props Down : truyền dữ liệu từ thằng cha -> thằng con Mà thằng con chỉ được sài chứ không được chỉnh sữa
Event up : Truyền dữ liệu (sự kiện ) thông báo cho thằng cha biết nó muốn thay đổi -> nhiệm vụ của component cha
nhận được thông điệp và tiến thành thay đổi data 

Custom Event : Đây là phương thức để ta tạo ra my-event chứ không phải dùng event mặc định trong JS 
v-on:click="change-title"
click : Tên của sự kiện 
changetitle : Hàm sử lý khi sự kiện được kích hoạt



*/
import ListUser from './components/ListUser.vue';
import CompHeader from './components/CompHeader.vue';
import CompFooter from './components/CompFooter.vue';
export default {
  name:"app",
  data(){
    return{
      title : "hello VueJS - Header",
        
      listUser:[
        {id:100,email :'test01@gmail.com', active:false},
        {id:101,email :'test02@gmail.com', active:true},
        {id:102,email :'test03@gmail.com', active:false},
        {id:103,email :'test04@gmail.com', active:true},
        {id:104,email :'test05@gmail.com', active:false},
      ]
    }
  },
  methods:{
    handleChangeTitle(data){
      this.title = this.data;
      console.log('handleChangeTitle',data);
    },
    handleDeleteUser(data){
      var indexDelete = -1;
      
      this.listUser.forEach((element, indexx) => {
        console.log(element.id, indexx, data.id);
        if(element.id == data.id){
          indexDelete = indexx;
        }
      });
      if(indexDelete != -1){
         this.listUser.splice(indexDelete,1);
      }
      console.log('indexDelete sau khi chạy vòng foreach',indexDelete);
      console.log('handleDeleteUser trong file App ',data);
    }
  },
  components:{
      CompHeader,
      CompFooter,
      ListUser
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
.container{
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 15px;
  min-height: 3000px;
}

</style>