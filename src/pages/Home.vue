<template>
  <div>
    <header>
      <h1>Vue profile Github</h1>
    </header>

    <main>
      <TheSearch></TheSearch>
      <User></User>
    </main>

    <footer>
      <h5>
        Follow me!! in <a href="#">Github as Moraboop</a>
      </h5>
    </footer>
  </div>
</template>

<script>
import TheSearch from '@/components/TheSearch'
import User from '@/components/User'
export default {
  components: {
    TheSearch, 
    User, 
  }
}
</script>

<style scoped>
header {
  background: #7FBD32;
  padding: 2px 0px;
  border-radius: 16px;
  margin: 10px;
}
header h1 {
  color: #213409;
}
main {
  padding: 18px 10px;
}
footer {
  background: #213409;
  height: 80px;
  padding: 12px 0px;
}
footer h5 {
  color: #B0DC7A;
}
footer h5 a{
  background: #7FBD32;
  padding: 6px 8px;
  border-radius: 12px;
  margin-left: 4px;
  text-decoration: none;
  color: #213409;  
}
footer h5 a:hover{
  background: #496D1D;
  color : #B0DC7A
}
</style>