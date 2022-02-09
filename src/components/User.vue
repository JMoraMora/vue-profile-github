<template>
  <div>
    <div class="card">
      <img :src="urlImg">
      <span class="name">{{name}}</span>
      <span class="username">{{username}}</span>
      <span class="bio">{{bio}}</span>
      <a :href="urlGithub" target="_blank">Contact</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      urlImg: '',
      name: '',
      username: '',
      bio: '',
      urlGithub: '',
    }
  },
  created() {
    this.searchUser('JMoraMora')
  },
  methods:{
    searchUser(username) {
      fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => {
        this.urlImg = data['avatar_url']
        this.name = data['name']
        this.username = data['login']
        this.bio = data['bio']
        this.urlGithub = data['html_url']
      })
    }
  }
}
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  background: #EEF8E3;
  box-sizing: border-box;
}
.card img{
  width: 100%;
  height: 300px;
}
.name {
  display: block;
  padding: 12px 2px 0;
  font-size: 28px;
  font-weight: bold;
  color: #213409;
}
.username {
  color: #213409;
  font-size: 14px;
  display: block;
  margin-bottom: 10px;
}
.bio {
  display: block;
  padding: 4px 0;
  margin-bottom: 15px;
}

a {
  display: block;
  padding: 16px 0px;
  color: #EEF8E3;
  background-color: #213409;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
  text-decoration: none;
}
a:hover {
  opacity: 0.9;
}
</style>