<template>
  <div id="app">
    <h1>Todo-list ({{total}})</h1>
    <Todolist  @onChange="onChange"></Todolist>
  </div>
</template>

<script>
import Todolist from './components/Todolist.vue'

export default {
  name: 'app',
  components: {
    Todolist
  },
  data() {
			return {
				total:0
			};
		},
  methods:{
    onChange(e){
      var totalFalse = e.filter(a=>a.completed === false).length; 		
      this.total = totalFalse;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
