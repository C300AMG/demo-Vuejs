<template>
  <div class="list-user">
     <user 
     v-for="user  in listUser"
     v-bind:key="user.id" 
     v-bind:user="user"
     v-on:deleteUser="deleteUser"
     />
   
      
  </div>
</template>

<script>


/*
Bây giờ dữ liệu đều nằm ở data của thằng App, muốn xoá user thì bắt buộc phải xoá ở thằng app

App -> araay user cho list, list chạy vòng for để truyền từng user 1

->thằng user chỉ nhận thằng listuser là thằng cha cho nên khi muốn xoá (sự kiện click)thì nó phải thông báo cho thằng listuser rằng nó muốn xoá .Thằng listUser này nhận thông báo và thực hiện xoá
-> vì listUsser nó vẫn không nắm giữ cái array user đó , thì thằng listUsser phải truyền thông báo đến thằng App rằng thay đổi




 */
import User from './User.vue'
export default {
    name : 'list-user',
    props:{
      listUser:{
            type: Array,
            default: []
      }
    },
    data(){
        return {
           
        }
    },
    components:{
     User
  },
  methods:{
    deleteUser(data){
    console.log('hàm này ở listUser',data);
    this.$emit('deleteUserEvent',data);
    }
  }
}
</script>

<style>

.list-user{
  display: flex;
  flex-wrap:wrap ;
  justify-content: space-between;
}
.list-user .user {
  padding: 30px;
  margin-bottom: 30px;
  border:1px solid #333;
  width: calc(33.3333% - 20px);
}
</style>