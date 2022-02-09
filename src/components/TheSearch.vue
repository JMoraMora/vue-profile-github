<template>
  <form class="form-inline">
    <input type="text" placeholder="UserName" v-model="userName" @keyup="writeUserName">
    <button type="submit">SEARCH</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      userName: '',
    }
  },
  methods:{
    ...mapActions({
      setUserName: 'setUserName'
    }),
    writeUserName(){
      this.setUserName(this.userName)
    }
  }
}
</script>

<style scoped>
.form-inline {
  display: flex;
  align-items: center;
  flex-flow: nowrap;
  justify-content: center;
  margin-bottom: 15px;
}
.form-inline input {
  vertical-align: middle;
  margin: 5px 10px 5px 0;
  padding: 10px 16px;
  background-color: #fff;
  border: 1px solid #ddd;
  font-size: 14px;
}
.form-inline button {
  padding: 11px 20px;
  background-color: #213409;
  border: 1px solid #ddd;
  color: #EEF8E3;
  cursor: pointer;
  font-weight: bold;
  border-radius: 4px;
}
.form-inline input:focus {
  outline: none;
  border: 1px solid #B0DC7A;
}
.form-inline input:hover {
  border: 1px solid #B0DC7A;
}
.form-inline button:hover {
  opacity: 0.9;
}
.form-inline button:focus {
  outline: none;
  border: 1px solid #B0DC7A;
}

</style>