<template>
  <div>
      <img src="../assets/logo.png" >
      <table>
          <tr>
              <td>姓名：</td>
              <td>{{name}}</td>
          </tr>
          <tr>
              <td>电话</td>
              <td>1xxxxxxxxx</td>
          </tr>
      </table>
  </div>
</template>

<script>
export default {
    props:['name']
}
</script>

<style>

</style>