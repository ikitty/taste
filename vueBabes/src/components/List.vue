<template>
<ul>
    <li v-for="(item,i) in todoList" :class="{editing: item == editingTodo}">
        <div class="view">
            <label><input type="checkbox" @click="toggleComplete(item)" :checked="item.completed" value=""/></label>
            <p @dblclick="editTodo(item)">{{item.name}}</p>
            <span @click="remove(item.id)" class="btn_del">X</span>
        </div>
        <input class="edit" type="text" v-todo-focus="item == editingTodo" v-model="editingTodoTitle" @keyup.enter="doneEdit(item)" @blur="cancelEdit" autocomplete="off"/>
    </li>
</ul>
</template>

<script>
    export default {
        props: ['todoList']
        ,data: function () {
            // console.log(this.$route.params.filter) ;
            return {
                editingTodo: null
                ,editingTodoTitle: ''
            } ;
        }
        ,methods: {
            say: function (data) {
                console.log('hi', data) ;
            }
            ,test: function () {

            }
            ,toggleComplete: function (item) {
                this.$emit('child-update', item.id, 'completed', !item.completed)
                // todo.completed = !todo.completed
            }
            ,remove: function (data) {
                this.$emit('child-remove', data)
            }
            ,editTodo: function (todo) {
                this.editingTodoTitle = todo.name
                this.editingTodo = todo
            }
            ,cancelEdit: function () {
                this.editingTodoTitle = ''
                this.editingTodo = null
            }
            ,doneEdit: function (item) {
                let t = this.editingTodoTitle.trim()
                if (!t) {
                    this.remove(item.id)
                    return  ;
                }

                this.$emit('child-update', item.id, 'name', t)
                // item.title = t
                this.editingTodoTitle = ''
                this.editingTodo = null
            }
        }
		,directives: {
			'todo-focus': function (el, binding) {
				if (binding.value) {
					el.focus();
				}
			}
		}
    }
</script>

<style scoped>
ul {width:500px;margin:0 auto;text-align:left;list-style:none}
li {padding:10px 0px;line-height:30px;}
li label {float:left;cursor:pointer;}
li label input {cursor:pointer;margin-right:10px;}
li .view {overflow:hidden;}
li .edit {display:none;}
.editing .view {display:none;}
.editing .edit {display:block;}

li p{float:left;  margin:0px;padding-right:20px;}

.btn_del {padding:2px 10px;border:1px solid #ccc;-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px;cursor:pointer;}
</style>
