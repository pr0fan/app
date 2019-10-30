<template>
    <nav>
      <div class="nav-wrapper">
        <router-link to="/" class="brand-logo">UsersApp</router-link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <router-link tag="li" to="/users" exact>
            <a href="#">Список пользователей</a>
          </router-link>
          <router-link tag="li" to="/users/create">
            <a href="#">Создать пользователя</a>
          </router-link>
        </ul>
      </div>
    </nav>
</template>

<style scoped>
    nav{
        padding: 0px 1rem;
    }
</style>