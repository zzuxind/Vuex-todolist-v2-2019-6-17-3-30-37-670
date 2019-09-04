<template>
  <div >
      <input type="text" v-model="name">
      <button @click="startUse">开始使用</button>
      
      <router-view></router-view>
  </div>
</template>

<script>
export default {

    data:function(){
        return{
            name:""
        }
    },
    methods:{
        startUse:function(){
            this.$router.push("home/"+this.name)
        }
    }

}
</script>

<style>

</style>