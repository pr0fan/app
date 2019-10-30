import Axios from 'axios'

let toast = (msg) => M.toast({html: msg});

export default{
    state: {
        users: [],
        sortBy: {},
      },
    getters:{
        usersList(state){
            return state.users;
        },
        getSort(state){
            return state.sortBy;
        },
        getUser(state){
            return id => state.users.find(el => el.id == id);
        },
    },
    mutations: {
        sortColumns(state, data){

            function sort(by){
            state.users.sort((a, b) => {
                if(by == 'asc'){
                return a[data] > b[data] ? 1 : -1;
                }else if(by == 'desc'){
                return a[data] < b[data] ? 1 : -1;
                } 
            });
            }

            if(!state.sortBy.name || state.sortBy.name != data){
            state.sortBy = {name: data, by: 'asc', icon: 'arrow_drop_up'}
            sort('asc');
            }

            if(state.sortBy.by == 'asc'){
            state.sortBy.by = 'desc';
            state.sortBy.icon = 'arrow_drop_down';
            sort('desc');
            }else{
            state.sortBy.by = 'asc';
            state.sortBy.icon = 'arrow_drop_up';
            sort('asc');
            }
            
        },
        showUsers(state, data){
            state.users = data;
        },
        addUser(state, data){
            state.users.push(data);
            toast('Добавлен новый пользователь');
        },
        updateUser(state, data){
            let users = state.users.concat();
            const index = state.users.findIndex(el => el.id == data.id);
            users[index] = {...data};
            state.users = users;
            toast('Данные пользователя обновлены');
        },
        deleteUser(state, data){
            const index = state.users.findIndex(el => el.id == data);
            state.users.splice(index, 1);
            toast('Пользователь удален');
        },
    },
    actions: {
        async getUsers(context){
            await Axios.get('https://user.test/api/users')
                .then(response => context.commit('showUsers', response.data))
                .catch(error => {
                    console.warn(error);
                });
        },
        async saveUser(context, data){
            await Axios.put('https://user.test/api/users', data)
                .then(response => context.commit('addUser', response.data))
                .catch(error => {
                    console.warn(error);
                });
        },
        async updateUser(context, data,){
            await Axios.post('https://user.test/api/users/'+data.id, data)
                .then(response => context.commit('updateUser', response.data))
                .catch(error => {
                    console.warn(error);
                });
        },
        async getUser(context, id){
            return await Axios.get('https://user.test/api/users/'+id);
        },
        async deleteUser(context, data){
            await Axios.delete('https://user.test/api/users/'+data)
                .then(response => context.commit('deleteUser', data))
                .catch(error => {
                    console.warn(error);
                });
        },
    }
}