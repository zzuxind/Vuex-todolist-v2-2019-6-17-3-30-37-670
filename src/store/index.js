
import axios from 'axios'
const url="http://5b4dcb2aec112500143a2311.mockapi.io/api/todos";
export default {
    strict: true,
    state: {
        todoList: [
            {status: 'completed', content: '吃饭'},
            {status: 'completed', content: '睡觉'},
            {status: 'completed', content: '打豆豆'}
        ],
        currentFilter: 'all'
    },
    getters: {
        filteredTodoList: function (state) {
            let filteredTodoList = [];
            for (let i = 0; i < state.todoList.length; i++) {
                if (state.currentFilter === 'all' || state.currentFilter === state.todoList[i].status) {
                    filteredTodoList.push(state.todoList[i])
                }
            }
            return filteredTodoList;
        }
    },
    mutations: {
        handleCreateTodo(state,inputtingItem){
            state.todoList.push({
                    status: 'active',
                    content:inputtingItem
                })
        },
        handleFilter(state,currentFilter){
            state.currentFilter = currentFilter;
        },
        handleToggleActive(state,index){
            
            state.todoList[index].status = state.todoList[index].status === 'completed' ? 'active' : 'completed';
        },
        setTodos(state,data){
            state.todoList=data
        }
    },
    actions:{
        fetchTodos(context){
            console.log(55,context)
            axios.get(url).then(
                function(response){
                    console.log("29",response.data)
                    context.commit('setTodos',response.data)
                }).catch(
                function(error){
                    console.log(error)
            });    
        },
        createTodo(context,input){
            console.log(context,input)
            axios.post(url,{
                content:input,
                status:'completed'
            })
            .then(function(response){
                console.log("60",response)
                context.dispatch('fetchTodos')
            })
            .catch(function(error){
                console.log(error);
            });  
        },
        updateTodo(context){
            const posturl="http://5b4dcb2aec112500143a2311.mockapi.io/api/todos/120";
            axios.put(post,{
                id:120,
                content:"make friends",
                status:"active"
            }).then(function(response){
                context.dispatch("createTodo")
            }).catch(function(error){
                console.log(error.response);
            })
        }
    }
}
