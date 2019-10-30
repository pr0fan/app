<template>
  <div>
    <h1 class="center-align">Список пользователей</h1>
    <table class="striped" v-if="usersList.length">
      <thead>
        <tr>
            <th @click="sortColumn('username')" class="width-th-block">
              <div class="flex-th-block">User<i v-if="getSort.name == 'username'" class="small material-icons">{{ getSort.icon }}</i></div>
            </th>
            <th @click="sortColumn('first_name')" class="width-th-block">
               <div class="flex-th-block">Firs name<i v-if="getSort.name == 'first_name'" class="small material-icons">{{ getSort.icon }}</i></div>
            </th>
            <th @click="sortColumn('last_name')" class="width-th-block">
                <div class="flex-th-block">Last name<i v-if="getSort.name == 'last_name'" class="small material-icons">{{ getSort.icon }}</i></div>
            </th>
            <th class="width-th-block"></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="user in usersList" :key="user.id">
          <td>{{ user.username }}</td>
          <td>{{ user.first_name }}</td>
          <td>{{ user.last_name }}</td>
          <td class="center-align">
             <router-link :to="{path: '/users/edit/'+user.id}" class="btn-floating btn-small waves-effect waves-light red lighten-1 btn-margin"><i class="material-icons">edit</i></router-link>
             <a href="#" @click="deleteUser(user.id)"  class="btn-floating btn-small waves-effect waves-light red lighten-1 btn-margin"><i class="material-icons">delete</i></a>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="center-align" v-else>
        <p>Список пользователей пуст :(</P>
        <router-link to="/users/create" class="valign-wrapper waves-effect waves-light btn-large red lighten-1">Добавить пользователя</router-link>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'home',
  computed: {
    ...mapGetters(['usersList', 'getSort']),
  },
  methods: {
    ...mapActions(['getUsers', 'deleteUser']),
    sortColumn(fieldName){
      this.$store.commit('sortColumns', fieldName);
    }
  },
  mounted(){
    this.getUsers();
  }
}
</script>


<style scoped>
  .btn-margin{
    margin: 0 5px;
  }

  .flex-th-block{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    min-height: 30px;
    cursor: pointer;
    transition: all 300;
  }

  .flex-th-block:hover{
    color: #EF5350;
  }

  .width-th-block{
    width: calc(100%/4);
  }
</style>
