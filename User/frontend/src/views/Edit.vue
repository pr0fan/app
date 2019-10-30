<template>
   <div class="row">
    <h1 class="center-align">Редактирование пользователя</h1>
    <div class="col s6 offset-s3">
      <form  @submit.prevent="onSubmit">
        <div class="row">
          <div class="input-field col s12">
              <input id="username" type="text" v-model="username" class="validate" required>
              <label for="username">Username</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
              <input id="first_name" type="text" v-model="first_name" class="validate" required>
              <label for="first_name">Firs Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
              <input id="last_name" type="text" v-model="last_name" class="validate" required>
              <label for="last_name">Last Name</label>
          </div>
        </div>
        <div class="row right-align">
          <button class="btn waves-effect waves-light red lighten-1" type="submit" name="action">
            Сохранить
            <i class="material-icons right">add</i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions} from 'vuex'
export default {
    data(){
      return {
          username: '',
          first_name: '',
          last_name: '',
      }
    },
    methods:{
      ...mapActions(['getUser', 'updateUser']),
      onSubmit(){
        this.updateUser(
          {
            id: this.$route.params.id,
            username: this.username,
            first_name: this.first_name,
            last_name: this.last_name,
          }
        );
        this.$router.push('/users')
      }
    },
    async mounted(){
     const {data} = await this.getUser(this.$route.params.id);
      this.username = data.username;
      this.first_name = data.first_name;
      this.last_name = data.last_name;
      setTimeout(() => M.updateTextFields(), 0);
    },
}

</script>