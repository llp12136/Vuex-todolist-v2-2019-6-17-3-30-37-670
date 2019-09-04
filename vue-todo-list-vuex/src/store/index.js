import axios from "axios";
export default {
    strict: true,
    state: {
        todoList: [
            { status: 'completed', content: '吃饭' },
            { status: 'completed', content: '睡觉' },
            { status: 'completed', content: '打豆豆' }
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
        minusValue(state, index) {
            state.counters[index].value--;
            state.counterTotal--;
        },
        plusValue(state, index) {
            state.counters[index].value++;
            state.counterTotal++;
        },
        addTodoList(state, value) {
            state.todoList.push({
                status: 'active',
                content: value
            })
        },
        changeStatus(state, index) {
            state.todoList[index].status = state.todoList[index].status === 'completed' ? 'active' : 'completed';
        },
        changeFilter(state, filter) {
            state.currentFilter = filter;
        },
        initTodos:function(state,todos){
            state.todoList = todos;
            }
    },
    actions:{

        fetchTodos (context){
            const url = "http://5b4dcb2aec112500143a2311.mockapi.io/api/todos";

            axios.get(url).then(function(reponse){
                context.commit('initTodos',reponse.data);
                }).catch(function(error){
                console.log(error.reponse);
                })              
        },
        craeteTodos (context){
            const url = "http://5b4dcb2aec112500143a2311.mockapi.io/api/todos";
            axios.post(url,{
                "id":"50",
                "content":"烦烦烦方法",
                "status":"active"
                }).then(function(reponse){
                    context.commit('initTodos',reponse.data);
                }).catch(function(error){
                    console.log(error.reponse);
                }) 
            },
            updateTodos (context){
                const url = "http://5b4dcb2aec112500143a2311.mockapi.io/api/todos";
                axios.put(url,{
                    "id":"50",
                    "content":"想睡觉",
                    "status":"active"
                    }).then(function(reponse){
                        context.commit('initTodos',reponse.data);
                    }).catch(function(error){
                        console.log(error.reponse);
                    }) 
                }
    }
}