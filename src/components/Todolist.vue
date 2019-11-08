<template>
	<div class="container">
		<div class="row">
			<div class="todo-list">
				<div class="input-group mb-3">
					<input type="text" class="form-control" placeholder="Nhập vào đây"  v-model="newTask" @keyup.enter="addTask">
					<div class="input-group-append">
						<button class="btn btn-outline-success" type="button" @click="addTask()">Add Todo List</button>
						<button class="btn btn-outline-danger" type="button" @click="clearAll()">Clear All</button>
					</div>
				</div>
				<ul v-for="(task, index) in tasksFilter" :key="index">
					<li class="title" @click="myFilter(task, index)" :class="{'done': task.completed}">{{task.title}}</li>
					<button class="remove" @click="removeTask(index)"><i class="far fa-trash-alt"></i></button>
				</ul>
			</div>
		</div>
	</div>
	
</template>
<script>
	import Vue from 'vue'
	export default {
		name: 'Todolist',
		data() {
			return {
				newTask: '',
				tasks: [],
				tasksFilter:[]
			};
		},
		methods:{
			addTask(){
				if (this.newTask) {
					this.tasks.push({
						title: this.newTask,
						completed: false
					});
					this.newTask = '';
				}
			},
			removeTask(index) {
				this.tasksFilter.splice(index, 1);
			},
			clearAll(){
				this.tasksFilter = [];
				this.tasks = [];
				localStorage.clear();
			},
			myFilter(task, index){
				task.completed = !task.completed;
				this.isActive = !this.isActive;
				Vue.set(this.tasksFilter, index, task);
			}
		},
		mounted() {
			if (localStorage.getItem('tasks')) this.tasks = JSON.parse(localStorage.getItem('tasks'));
			this.tasksFilter = this.tasks;
		},
		watch: {
			tasksFilter:function() {
				localStorage.setItem('tasks', JSON.stringify(this.tasks));
				let count = this.tasks;
				this.$emit('onChange', count);		
			},
			newTask: function(param){
				this.tasksFilter = this.tasks;
				this.tasksFilter = this.tasks.filter(x=>x.title.includes(param)); 					
			}

		}
	}
</script>
<style>
.todo-list{
	width: 100%;
}
.todo-list ul{
	display: flex;
	justify-content: center;
	padding: 0;
}
.remove{
	background: none;
	border: none;
	outline: none;
	opacity: 0;
	transition: 0.5s;
}
.todo-list ul li{
	cursor: pointer;
	width: 100%;
	color: #dc3545;
	border:1px solid #dc3545;
	list-style: none;
	padding: 5px;
}
/*.todo-list ul li:hover{
	background-color: #dc3545;
	color: white;
	transition: 0.5s;
	}*/
	.todo-list ul:hover .remove{
		opacity: 1;
		margin-left: 0px;
	}
	.fa-trash-alt{
		color: red;
	}
	.done{
		text-decoration: line-through;
		background: #28a745;
		color: white !important;
		border: 1px solid #28a745 !important;
	}
	#image-icon{
		width: 20px;
		height: 25px;
		margin:7px 10px 0 0;
	}
</style>

