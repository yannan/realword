<template>
  <div>
    <nav class="navbar navbar-light">
      <div class="container">
        <router-link to="/" class="navbar-brand">conduit</router-link>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <router-link to="/" class="nav-link" active-class="active" exact>
              Home
            </router-link>
          </li>
          <li class="nav-item" v-if="isAuthenticated">
            <router-link to="/editor" class="nav-link" active-class="active">
              <i class="ion-compose"></i>&nbsp;New Post
            </router-link>
          </li>
          <li class="nav-item" v-if="isAuthenticated">
            <router-link to="/settings" class="nav-link">
              <i class="ion-gear-a"></i>&nbsp;Settings
            </router-link>
          </li>
          <li class="nav-item" v-if="!isAuthenticated">
            <router-link to="/register" class="nav-link">Sign up</router-link>
          </li>
          <li class="nav-item" v-if="!isAuthenticated">
            <router-link to="/login" class="nav-link">Sign in</router-link>
          </li>
          <li class="nav-item" v-if="isAuthenticated">
            <router-link to="/" class="nav-link">{{ user.username }}</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      user: state => state.auth.user,
      isAuthenticated: state => state.auth.isAuthenticated
    })
  }
};
</script>
