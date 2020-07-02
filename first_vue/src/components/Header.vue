<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link to="/" class="navbar-brand">Blog_examle</router-link>
      <ul v-if="!isAuthenticated" class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active" exact
            >Home</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link" active-class="active" exact>
            <i class="ion-compose"></i>Login
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/register"
            class="nav-link"
            active-class="active"
            exact
          >
            <i class="ion-compose"></i>Register
          </router-link>
        </li>
      </ul>
      <ul v-else class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active" exact
            >Home</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/editor/:slug?"
            class="nav-link"
            active-class="active"
          >
            <i class="ion-compose"></i>&nbsp;New Article
          </router-link>
        </li>
        <li class="nav-item">
          <button @click="logout" class="btn btn-outline-danger">
            Or click here to logout.
          </button>
        </li>
        <li class="nav-item" v-if="currentUser.username">
          <router-link
            class="nav-link"
            active-class="active"
            exact
            :to="{
              name: 'profile',
              params: { username: currentUser.username },
            }"
            >{{ currentUser.username }}</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"]),
  },
};
</script>
