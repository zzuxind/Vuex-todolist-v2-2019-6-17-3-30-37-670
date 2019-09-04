<template>
  <div>
      <button @click="goback">返回</button>
      <span class="namespan">{{name}}</span>
      <br/>
       <router-link :to="{ path: '/home/'+name+'/list'}">go to list</router-link>
    <br/>
        <router-link :to="{ path: '/home/'+name+'/my/'+name}">我的</router-link>
       <router-view></router-view>
  </div>
</template>

<script>
export default {
    props:['name'],
    methods:{
        goback:function(){
            if(confirm("客官要走吗？")){
                this.$router.push("/")
            }
        }
    }
}
</script>

<style>
.namespan{
    float: right;
}
</style>