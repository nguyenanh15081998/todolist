<template>
  <div id="app">
    <h1>Todo-list ({{total}})</h1>
    <Todolist  @onChange="onChange"></Todolist>
    <p>{{counter}}</p>
    <button @click="incrementCounter">increment counter</button>
  </div>
</template>

<script>
import Todolist from './components/Todolist.vue'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store()
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
    },
    incrementCounter () {
        this.$store.dispatch('inrementAction', 1)
      }
  },
  computed: {
      counter () {
        return this.$store.getters.counter
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
