<template>
  <div class="demo-slot">
  <comp-tab title="Tiêu đề của tab">
    <ul class="tabheader">
      <li 
      v-bind:class="{active:tabActive == index }"
      v-on:click="handleClick(index)"
       v-for="(item, index) in tabheader" 
       v-bind:key="index">{{item.text}}
       
       </li>
    </ul>
    <div class="tab-content tab1" v-if="tabActive === 0 ">
       tab 1 - Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and sup
    </div>
    <div class="tab-content tab2" v-if="tabActive === 1 ">
      tab 2 -Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and sup
    </div>
    <div class="tab-content tab3" v-if="tabActive === 2 ">
      tab 3- Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and sup
    </div>
    <div class="tab-content tab4" v-if="tabActive === 3 ">
      tab 4 -Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and sup
    </div>
  </comp-tab>
  </div>
</template>

<script>
import compTab from './compTab.vue'
export default {
    name:"demoSlot",
    components:{
      compTab
    },

    data() {
        return {    
             tabheader:[
               {text:"tab1"},
               {text:"tab2"},
               {text:"tab3"},
               {text:"tab4"},
             ],
             tabActive :2
        }
    },
    methods: {
      //Đầu tiên là gàn tabActive cố định là = 0 -->>> " dựa vào tabActive để hiển thị ra HTML"
      // thứ 2 if else mỗi tab nếu = 0 thì xuất hiện HTML này , nếu = 1 thì xuất hiện HTML kiaa
      // thứ 3 v-for tab đó kèm theo indexx cho mỗi vòng lặp
      // thứ 4 là sự kiện onclick so sánh cái tabActive==index sau khi --tức là so sánh cái nội dung với cái tiêu đề có ok hay không 
        handleClick(index){
          console.log(index);
          this.tabActive = index;
        }
    },

}
</script>

<style>

</style>